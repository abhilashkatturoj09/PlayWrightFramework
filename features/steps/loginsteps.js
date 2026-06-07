// import { Given, When, Then } from "@cucumber/cucumber";
const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const { page } = require('@playwright/test');
const config =require('../../utils/config');
Given('google url', async function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    console.log("in google url");
    console.log(config.login);
    this.LoginPage = new LoginPage(this.page);
    await this.LoginPage.navigate();
    // await this.page.goto

});

When('enter in google page', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    console.log("in enter in google page");
});


Then('Clcik on the search button', function () {
    // Write code here that turns the phrase above into concrete actions
    // return 'pending';
    console.log("in Clcik on the search button");

});
