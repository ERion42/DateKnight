const { gql } = require('apollo-server-express');

// Mongoose

const typeDefs = gql`

    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
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
        addUser(username: String!, email: String!, password: String!): Auth
    }
`
module.exports = typeDefs;

// Sequelize

// const typeDefs = gql`

//     type User {
//         id: ID!
//         username: String!
//         email: String!
//         password: String!
//     }

//     type Auth {
//         token: ID!
//         user: User
//     }

//     type Query {
//         user(userId: ID!): User
//         me: User
//     }

//     type Mutation {
//         login(email: String!, password: String!): Auth
//         addUser(username: String!, email: String!, password: String!): Auth
//     }
// `
// module.exports = typeDefs;
