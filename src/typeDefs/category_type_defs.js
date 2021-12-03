const { gql } = require('apollo-server');

const categoryTypeDefs = gql `
    input CategoryInput {
        name: String!
        description: String!
        user_id: Int!
    }

    type DetailCategory {
        id: Int!
        name: String!
        description: String!
        image: String
        user_id: Int!
    }

    type Mutation {
        createCategory(userInput: CategoryInput): DetailCategory
    }

    type Query {
        getCategoryById(id: Int!): DetailCategory
        getCategoryList: [DetailCategory]
    }
`;

module.exports = categoryTypeDefs;