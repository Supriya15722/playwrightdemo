export class CartPage
{
    constructor(page)
    {
        this.productName= page.locator(".cart_item .inventory_item_name");
    }

    async getProductName()
    {
        return await this.productName.textContent();
    }
}