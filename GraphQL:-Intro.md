# GraphQL 
(https://graphql.org)

GraphQL is a language-independent specification for client-server communication. It lets you model the resources and processes provided by a server as a domain-specific language (DSL). Clients can use it to send scripts written in your DSL to the server to process and respond to as a batch.

GraphQL
 - is fully typed and everything should be typed
 - gives clients the power to ask for exactly what they need and nothing more
 - will expose only one endpoint to interact with the server
 - services can be written in [many languages](https://graphql.org/code/)

To construct a page from scratch we would need to fetch data from several endpoints. Assuming it is some project management app, you have to show projects belong to a user, minimal things you have to fetch would be `user info (/user/:id)` and `projects of the user (user/:id/projects)`, in the real world it could be so many.


In GraphQL the query will closely match the result:
```Graphql
# Requesting for user info and projects of a user with id 12
query {
  getUser(id: 12) {
    name
    email
    projects {
      name
      createdAt
    }
  }
}
```
will give you:
```graphql
{
  data: {
    getUser {
      name: "Bryan",
      email: "byn@fb.com",
      projects: [
        {
          name: "React router",
          createdAt: "20-10-2010"
        },
        {
          name: "Create react app",
          createdAt: "04-08-2016"
        },
      ],
    }
  }
}
```

###### Also published on medium https://medium.com/@jawakarsmith/graphql-intro-6c1ecb1babca