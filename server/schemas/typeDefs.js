const { gql } = require('apollo-server-express');





const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        
    }
    
    type Query {
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): AuthPayload
        login(email: String!, password: String!): AuthPayload
    }

    type AuthPayload {
        token: String
        user: User
    }



`;




module.exports = typeDefs;