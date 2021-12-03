const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class CategoryAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async getCategoryById(id) {
        return this.get(`/productCategory/${id}/`);
    }

    async getCategoryList() {
        return this.get('/productCategory/');
    }

    async createCategory(category) {
        category = new Object(JSON.parse(JSON.stringify(category)));
        return this.post('/productCategory/', category);
    }

}

module.exports = CategoryAPI;