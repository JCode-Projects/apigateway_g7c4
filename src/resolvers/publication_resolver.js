const publicationResolver = {
    Query: {
        getPublicationById: async (_, { id }, { dataSources, userIdToken }) => {
            return dataSources.publicationAPI.getPublicationById(id);
        },

        getPublicationList: async (_, __, { dataSources, userIdToken }) => {
            return dataSources.publicationAPI.getPublicationList();
        }
    },
    Mutation: {
        createPublication: async (_, { userInput }, { dataSources, userIdToken }) => {
            let date = new Date();
            let publicationInput = {
                title: userInput.title,
                description: userInput.description,
                date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
                category: userInput.category,
                user_id: userInput.user_id
            }

            return dataSources.publicationAPI.createPublication(publicationInput);
        }

    }
};


module.exports = publicationResolver;