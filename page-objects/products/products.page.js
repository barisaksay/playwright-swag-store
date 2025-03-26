const BasePage= require('../base.page');

class ProductsPage extends BasePage{
    constructor(page){
        super(page);

        //products page selectors
        this.productsList ='.inventory_list'
        this.item='[data-test="inventory-item"]'
        this.itemName='[data-test="inventory-item-name"]'
        this.itemPrice='[data-test="inventory-item-price"]'
        this.addToCartButton='button[class="btn btn_primary btn_small btn_inventory "]'
        this.removeFromCartButton='button.btn_secondary:text("Remove")'
        this.sortDropdown='select[data-test="product-sort-container"]'
        this.sortLowHigh='lohi'
        this.sortHighLow='hilo'
        this.sortAZ='az'
        this.sortZA='za'
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
    
    async sortItems(sortOrder){
        await this.page.locator(this.sortDropdown).selectOption({ value:`${sortOrder}`})
    }

    async getAllProductNames() {
        const productNameElements = await this.page.locator(this.itemName);
        const count = await productNameElements.count();
    
        const productNames = [];
    
        for (let i = 0; i < count; i++) {
            const text = await productNameElements.nth(i).textContent();
            productNames.push(text.trim());
        }

        return productNames;
    }
    

}

module.exports=ProductsPage;