const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [book]
  }

  type Book{
    bookId: ID!
    authors: [String!]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth{
    token: STring!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, emailL String!, password: String!): Auth
    saveBook( bookId: ID!
      authors: [String!],
      description: String,
      title: String!,
      image: String,
      link: String ): User
      removedBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
