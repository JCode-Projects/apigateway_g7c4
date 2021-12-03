const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const CategoryAPI = require('./dataSources/category_api');
const AuthAPI = require('./dataSources/auth_api');
const PublicationAPI = require('./dataSources/publication_api');
const authentication = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        categoryAPI: new CategoryAPI(),
        publicationAPI: new PublicationAPI(),
        authAPI: new AuthAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});