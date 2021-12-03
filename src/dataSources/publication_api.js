const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PublicationAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async getPublicationById(id) {
        return this.get(`/publication/${id}/`);
    }

    async getPublicationList() {
        return this.get('/publication/');
    }

    async createPublication(category) {
        category = new Object(JSON.parse(JSON.stringify(category)));
        return this.post('/publication/', category);
    }

}

module.exports = PublicationAPI;