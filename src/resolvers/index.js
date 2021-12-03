const publicationResolver = require('./publication_resolver');
const authResolver = require('./auth_resolver');
const categoryResolver = require('./category_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(categoryResolver, publicationResolver, authResolver);

module.exports = resolvers;