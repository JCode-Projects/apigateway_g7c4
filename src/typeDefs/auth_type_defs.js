const { gql } = require('apollo-server');

const authTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }

    input SignUpInput {
        username: String!
        password: String!
        name: String!
        document: Int!
        email: String!
        city: String!
        address: String
        phone: String!
    }

    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        document: Int!
        email: String!
        city: String!
        address: String
        phone: String!
        image: String
    }
    
    type Mutation {
        signUpUser(userInput: SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Query {
        userDetailByUserName(userName: String!): UserDetail!
        getUserList: [UserDetail]
    }
`;

module.exports = authTypeDefs;