# Generators for Admins

Rails generators are interesting. Whenever we do scaffolding, this is usually like
this:

```
./bin/rails g scaffold Post title:string body:text

      invoke  active_record
      create    db/migrate/20230419141258_create_posts.rb
      create    app/models/post.rb
      invoke    test_unit
      create      test/models/post_test.rb
      create      test/fixtures/posts.yml
      invoke  resource_route
       route    resources :posts
      invoke  serializer
      create    app/serializers/post_serializer.rb
      invoke  scaffold_controller
      create    app/controllers/posts_controller.rb
      invoke    erb
      create      app/views/posts
      create      app/views/posts/index.html.erb
      create      app/views/posts/edit.html.erb
      create      app/views/posts/show.html.erb
      create      app/views/posts/new.html.erb
      create      app/views/posts/_form.html.erb
      create      app/views/posts/_post.html.erb
      invoke    resource_route
      invoke    test_unit
      create      test/controllers/posts_controller_test.rb
      create      test/system/posts_test.rb
      invoke    helper
      create      app/helpers/posts_helper.rb
      invoke      test_unit
      invoke    jbuilder
      create      app/views/posts/index.json.jbuilder
      create      app/views/posts/show.json.jbuilder
      create      app/views/posts/_post.json.jbuilder
```

So the generator creates a resource called `/posts`. This is great as we get CRUD
with the click of a button

What I couldn't figure out is to create CRUD within a route, say `/admin/posts`.
It would be nice to have such custom generators

## Update

Looks like this is possible

```sh
./bin/rails g controller api/v1/admin/users index show edit update

 create  app/controllers/admin/posts_controller.rb
  route  namespace :admin do
           get 'posts/index'
           get 'posts/show'
           get 'posts/edit'
           get 'posts/update'
           get 'posts/destroy'
         end
 invoke  tailwindcss
 create    app/views/admin/posts
 create    app/views/admin/posts/index.html.erb
 create    app/views/admin/posts/show.html.erb
 create    app/views/admin/posts/edit.html.erb
 create    app/views/admin/posts/update.html.erb
 create    app/views/admin/posts/destroy.html.erb
 invoke  test_unit
 create    test/controllers/admin/posts_controller_test.rb
 invoke  helper
 create    app/helpers/admin/posts_helper.rb
 invoke    test_unit
```
