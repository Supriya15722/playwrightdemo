export class ProductPage
{
    constructor(page)
    {
        this.addToCart= page.locator("#add-to-cart-sauce-labs-backpack");
        this.productInCart= page.locator(".shopping_cart_badge");
        this.productName= page.locator(".inventory_item_name").first();
        this.cartLink= page.locator(".shopping_cart_link");
        this.sortDropdown= page.locator(".product_sort_container");
        this.logo= page.locator(".app_logo");
    }


    async clickOnAddToCart()
    {
        await this.addToCart.click();
    }

    async getCartCount()
    {
        //console.log("Cart count....")
        const cartCount = await this.productInCart.textContent();
        console.log("Products added in cart= "+cartCount);
        return cartCount;
    }

    async getProductName()
    {
        return await this.productName.textContent();
    }

    async openCart()
    {
        await this.cartLink.click();
    }

    async clickSortDropdown()
    {
        await this.sortDropdown.click();
    }

    async getSortOptions()
    {
        const options = await this.sortDropdown.locator("option").allTextContents();
        return options.map(option => option.trim());
    }


        async isLogoVisible()
    {
        const logotxt= await this.logo.textContent();
        return logotxt;
    }

}