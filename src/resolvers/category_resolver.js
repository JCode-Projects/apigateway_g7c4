const categoryResolver = {
    Query: {
        getCategoryById: async(_, { id }, { dataSources, userIdToken }) => {
            return dataSources.categoryAPI.getCategoryById(id);
        },
        
        getCategoryList: async(_, __, { dataSources, userIdToken }) => {
            return dataSources.categoryAPI.getCategoryList();
        },
    },
    Mutation: {
        createCategory: async(_, { userInput }, { dataSources, userIdToken }) => {
            let categoryInput = {
                name: userInput.name,
                description: userInput.description,
                user_id: userInput.user_id,
            }

            return dataSources.categoryAPI.createCategory(categoryInput);
        }
    }
};

module.exports = categoryResolver;