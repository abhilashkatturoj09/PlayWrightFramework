const { page } = require('@playwright/test');

class LoginPage {

    constructor(page) {
        this.page = page;
    }
    async navigate() {
        await this.page.goto("https://www.google.com");
        console.log("in navigation");
    }
}

module.exports = LoginPage;