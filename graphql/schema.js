const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User!]!
    getPost(id: ID!): Post
    getAllPosts: [Post!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createPost(title: String!, content: String!, author: ID!): Post
  }
`);

module.exports = schema;
