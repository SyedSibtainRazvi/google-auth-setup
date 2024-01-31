# Scaffolding

One of the beautiful things about Rails is: scaffolding. We do:

```
./bin/rails generate scaffold blog title:string body:text
```

and voila, we have the following:

- A model (interface to database)
- A controller for blogs CRUD
- Views to interact with blogs
- A database migration file
- Tests for all the above code

This is just amazing, and it is very easy to churn out pages

I wonder if this makes sense in Nextjs world. It will be nice easily churn out
pages which involves the following:

- A prisma definition for a blog
- An api for blogs CRUD
- React code to interact with blogs (Maybe use redux as well?)
- A database migration
- Tests for all the above code using jest

Does it make sense to have such helpers?
