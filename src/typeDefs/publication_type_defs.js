const { gql } = require('apollo-server');

const publicationTypeDefs = gql `
    input PublicationInput {
        title: String!
        description: String!
        category: Int!
        user_id: Int!
    }

    type PublicationDetail {
        id: Int!
        title: String!
        description: String!
        date: String!
        image: String
        category: Int!
        user_id: Int!
    }

    type Mutation {
        createPublication(userInput: PublicationInput): PublicationDetail
    }

    type Query {
        getPublicationById(id: Int!): PublicationDetail
        getPublicationList: [PublicationDetail]
    }
`;

module.exports = publicationTypeDefs;