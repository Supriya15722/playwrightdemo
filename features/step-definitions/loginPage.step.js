import {Given, When, Then} from "@cucumber/cucumber";
import {LoginPage} from "../pages/loginPage.js";
import {ProductPage} from "../pages/productPage.js";
import {expect} from "@playwright/test";

Given("I am on login page", async function() 
{
    console.log("I am on login page");
    this.loginPage= new LoginPage(this.page);
    await this.page.goto("https://www.saucedemo.com/");
    
});

When("I enter valid {string} and {string}", async function (username, password) 
{
    console.log("I enter username and password");
    await this.loginPage.enterUserNamePass(username, password);
});

When("I click on loginbutton", async function() 
{
    console.log("I click on loginbutton");
    await this.loginPage.loginMethod();
    this.productPage = new ProductPage(this.page);
   
});

Then("I should be on product page", async function() 
{
    console.log("I should be on product page");  

    const currentURL = await this.page.url();
    console.log(currentURL);
    
     expect(currentURL).toContain('inventory');
     console.log("I am on product page");  
});

When("I click on product sort dropdown", async function()
{
    await this.productPage.clickSortDropdown();
});

Then("I should see the product sort options", async function()
{
    const options = await this.productPage.getSortOptions();
    expect(options).toEqual([
        "Name (A to Z)",
        "Name (Z to A)",
        "Price (low to high)",
        "Price (high to low)"
    ]);
});

Then('Verify error message {string} displayed on login page', async function (errorMessage)
{
    const actualErrMessage= await this.loginPage.getLoginErrMsg();
    console.log(actualErrMessage);
    expect(actualErrMessage).toContain(errorMessage);
});