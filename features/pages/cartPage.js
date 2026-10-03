export class CartPage
{
    constructor(page)
    {
        this.productName= page.locator(".cart_item .inventory_item_name");
        this.removeButton= page.getByRole("button", {name: "Remove"});
        this.cartItems= page.locator(".cart_item");
    }

    async getProductName()
    {
        return await this.productName.textContent();
    }

    async removeProduct()
    {
        await this.removeButton.click();
    }

    async getCartItemCount()
    {
        return await this.cartItems.count();
    }
}