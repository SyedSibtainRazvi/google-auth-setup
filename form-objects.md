url: https://gist.github.com/iffyuva/d10498e6c129373a7912

# Form objects

The current situation of form objects doesn't look good. earlier codemancers
have raised concerns about their usage. This writing tries to capture the
history of form objects, how they have evolved in day to day usage. Please
feel free to comment so that we can improve on this:

## Version 1

* Derive from `ActiveModel::Model`
* Pass all the parameters as hash
* Perform validations, and save record(s).

```ruby
  # form which will be used to create an user under org.
  class OrgUserForm < ActiveModel::Model
    attr_accessor :org, :user
    attr_accessor :name, :email

    validates :org, :name, :email, presence: true

    def save
      return false unless valid?

      # do whatever here
    end
  end

  # in controller code, typical usage will be like this:

  # pass whitelisted parameters to form and save.
  form = OrgUserForm.new(user_params)
  form.save

  # whitelist parameters
  def user_params
    params.require(:user).permit(:name, :email).tap do |t|
      t[:org] = org
    end
  end
```


## Version 2

There were several concerns raised because the code was confusing. Lets go
one by one:

#### Base class for forms.

Since all the forms are deriving from `ActiveModel::Model`, create a base
form

```ruby
  class BaseForm < ActiveModel::Model
  end

  class OrgUserForm < BaseForm
    # usual stuff
  end
```

#### Strong parameters

Whitelisting parameters api is violated. `tap` should not be used. So,
changes are made to the code not to use tap.

```ruby
  # get whitelisted parameters, and merge additional parameters
  create_params = user_params.merge(org: org)
  form = OrgUserForm.new(create_params)
  form.save

  # whitelist parameters
  def user_params
    params.require(:user).permit(:name, :email)
  end
```

#### Form initialization

Passing all the parameters to form object seems to be a big problem. It
gave a feeling that its one big hash, and that it is very confusing,
and hard to understand. So, attributes which are not merged into the
whitelisted parameters are passed as arguments, and we override
initialize method


```ruby
  class OrgUserForm < BaseForm
    attr_accessor :org, :user
    attr_accessor :name, :email

    validates :name, :email, presence: true

    def initialize(org, params = {})
      self.org = org
      super(params)
    end
  end

  # pass whitelisted parameters to form and save.
  form = OrgUserForm.new(org, user_params)
  form.save

  # whitelist parameters
  def user_params
    params.require(:user).permit(:name, :email)
  end
```

#### Same form for edit and update

Another problem surfaced, that we are using same form for both create and
edit. And the code to handle both is really getting complex. For eg:


```ruby
  class OrgUserForm < BaseForm
    def initialize(org, params = {})
      self.org = org

      user_params = {}
      if (self.user = params[:user])
        user_params[:email] = user.email
        user_params[:name] = user.name
      end

      super(params.reverse_merge(user_params))
    end

    def save
      return false unless valid?

      # if user is present, update user, or save user.
      user ? update! : create!
    end
  end
```

Tried to improve the code, and make it look better, but its still bad.
This is the small change which is made, pass user as 2nd param.


```ruby
  class OrgUserForm < BaseForm
    def initialize(org, user = nil, params = {})
      self.org = org
      self.user = user

      user_params = {}
      if user
        user_params[:email] = user.email
        user_params[:name] = user.name
      end

      super(params.reverse_merge(user_params))
    end
  end
```

The code still looks not very elegant, but this is the picture.


## Version 3 - Proposed

Would like to add syntatic sugar to forms, and add more interface to
forms (hopefully to make it better)

* Donot pass parameter to `initialize`
* Separate out form population for both new and edit actions
* Have separate methods for create and update.

Lets look at syntax for create first.

```ruby
  # For creating an user under org.
  OrgUserForm.new(org)            # 1
    .build(user_params)           # 2
    .create                       # 3
```

So, on the 1st line, initializer will take all *essential* objects
for initing the form. form doesnot know about the action yet. On
the 2nd line, `build` the *user* with parameters passed. And on
the third line, create the user. Implementation looks like this:

```ruby
  OrgUserForm < BaseForm
    attr_accessor :org, :user
    attr_accessor :name, :email

    def initialize(org)
      self.org = org
    end

    # this returns it`self` for chaining.
    def build(params)
      email = params[:email]
      name = params[:name]
      self
    end

    def create
      return false unless valid?

      # capture errors will rescue exceptions of interest, and
      # then populate errors on form if required.
      capture_errors do
        self.user = org.users.create!(name: name, email: email)
      end
    end
  end
```

Looking at edit syntax:

```ruby
  # For editing an user under org.
  OrgUserForm.new(org)            # 1
    .edit(user)                   # 2
    .with(user_params)            # 3
    .update                       # 4
```

Again, same syntax. Add method called `edit` which will populate form with
required parameters. Add another method `with` which will consider the
params, and update them. Implementation looks like this:

```ruby
  OrgUserForm < BaseForm
    # this returns it`self` for chaining.
    def edit(user)
      self.user = user
      self.email = user.email
      self.name = user.name
      self
    end

    # this returns it`self` for chaining.
    def with(params)
      self.email = params[:email]
      self.name = params[:name]
      self
    end

    def update
      return false unless valid?

      capture_errors do
        self.user.update_attributes!(name: name, email: email)
      end
    end
  end
```


We can do bit of refactoring, by extracting out parameter assignment,
and moving it to `BaseForm`


```ruby
  class BaseForm < ActiveModel::Model
    def populate(params = {})
      params.each do |attr, value|
        self.public_send("#{attr}=", value)
      end
    end
  end

  OrgUserForm < BaseForm
    attr_accessor :org, :user
    attr_accessor :name, :email

    def initialize(org)
      self.org = org
    end

    def build(params)
      populate(params)
      self
    end

    def edit(user)
      populate(user: user, email: user.email, name: user.name)
      self
    end

    def with(params)
      populate(params)
      self
    end

    def create
    end

    def update
    end
  end
```

## Updates from discussion
General rules:

- should accept input param from controller.
- build required association
- perform the action which form is suppose to do.
