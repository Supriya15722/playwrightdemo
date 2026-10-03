import {Given, When, Then} from "@cucumber/cucumber";
import {CartPage} from "../pages/cartPage.js";
import {expect} from "@playwright/test";

When('I capture the product name from product page', async function ()
{
   this.productName = await this.productPage.getProductName();
});

When('I click on Add to cart button', async function () 
{
   console.log("I click on Add to cart button");
   await this.productPage.clickOnAddToCart();
});

When('I open the shopping cart', async function ()
{
   await this.productPage.openCart();
   this.cartPage = new CartPage(this.page);
});

Then('the product name in the cart should match the product page', async function ()
{
   const cartProductName = await this.cartPage.getProductName();
   expect(cartProductName).toEqual(this.productName);
});


Then('verify product added in the cart sucessfully', async function () 
{
   console.log("verify product added in the cart sucessfully");
   const cartCount = await this.productPage.getCartCount();
   expect(cartCount).toEqual("1");
 
});

Then("Verify {string} logo is present on product page", async function(logo)
{
    const actualText= await this.productPage.isLogoVisible();
    console.log("Logo text is: " + actualText);
    expect(actualText).toEqual("Swag Labs");
})
