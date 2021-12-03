const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');


class AuthAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    async getUserList() {
        return this.get(`/user/list`);
    }

    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return this.post(`/user/`, user);
    }

    async getUser(userName) {
        return this.get(`/user/${userName}/`);
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return this.post(`/login/`, credentials);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return this.post(`/refresh/`, token);
    }
}

module.exports = AuthAPI;