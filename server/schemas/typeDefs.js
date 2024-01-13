const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedDreams: [dreamSchema]
    }
`

module.exports = typeDefs;