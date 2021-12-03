const usersResolver = {
    Query: {
        userDetailByUserName: (_, { userName }, { dataSources, userIdToken }) => {
            return dataSources.authAPI.getUser(userName)
        },
        getUserList: (_, __, { dataSources, userIdToken }) => {
            return dataSources.authAPI.getUserList();
        }
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const authInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                document: userInput.document,
                email: userInput.email,
                city: userInput.city,
                address: userInput.address,
                phone: userInput.phone
            }

            return dataSources.authAPI.createUser(authInput);
        },

        logIn: (_, { credentials }, { dataSources }) => {
            return dataSources.authAPI.authRequest(credentials)
        },

        refreshToken: (_, { refresh }, { dataSources }) => {
            return dataSources.authAPI.refreshToken(refresh)
        },
    }
};

module.exports = usersResolver;