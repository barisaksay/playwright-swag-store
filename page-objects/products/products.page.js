const BasePage= require('../base.page');

class ProductsPage extends BasePage{
    constructor(page){
        super(page);

        //products page selectors
        this.productsList ='.inventory_list'
        this.item='[data-test="inventory-item"]'
        this.itemName='[data-test="inventory-item-name"]'
        this.addToCartButton='button[class="btn btn_primary btn_small btn_inventory "]'
        this.removeFromCartButton='button.btn_secondary:text("Remove")'
        this.productsURL='/inventory.html'
    }

    //products page methods
    async selectItem(n){
        const selectedItemName= await this.page.locator(this.itemName).nth(n).textContent();
        await this.page.locator(this.itemName).nth(n).click();
        return selectedItemName;
    }

    async addItemToCart(n){
        await this.page.locator(this.addToCartButton).nth(n).click();
    }

    async removeItemFromCart(n){
        await this.page.locator(this.removeFromCartButton).nth(n).click();
    }
    

}

module.exports=ProductsPage;