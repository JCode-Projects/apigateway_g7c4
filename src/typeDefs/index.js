//Se llama al typedef (esquema) de cada submodulo
const authTypeDefs = require('./auth_type_defs');
const categoryTypeDefs = require('./category_type_defs');
const publicationTypeDefs = require('./publication_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, categoryTypeDefs, publicationTypeDefs];

//Se exportan
module.exports = schemasArrays;