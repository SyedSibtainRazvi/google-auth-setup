# Generators for views

Rails generators can be customized. Whenever scaffolding is run, generators give us
a bunch of things like models, migrations, controllers, helpers ,tests, views like
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

It is possible to customize the views so that they can use tailwind. This gives us
the ability to quickly whip up good looking pages. We already have a paid
subscription to Tailwind. Now we have to finalize a UI and get that working
