const { gql } = require('apollo-server-express');

const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String   
    }

    type Dream {
        _id: ID
        dreamText: String
        dreamType: String
        dreamDate: String
        dreamTitle: String
        dreamTags: [String]
        dreamComments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        commentDate: String
        commentAuthor: String
    }

    type Calendar {
        _id: ID
        calendarDate: String
        calendarDreams: [Dream]
    }

    type Query {
        user: User
        dream: Dream
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