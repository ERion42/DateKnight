const { gql } = require('apollo-server-express');

// Mongoose

const typeDefs = gql`
    scalar Date
    type User {
        _id: ID!
        email: String!
        username: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(userId: ID!): User
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, username: String!, password: String!): Auth
    }
`
module.exports = typeDefs;

