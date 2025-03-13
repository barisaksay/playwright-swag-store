const BasePage= require('../base.page');

class ProductDetailsPage extends BasePage{
    constructor(page){
        super(page);

        //product details page selectors
        this.itemName='[data-test="inventory-item-name"]'
        this.itemPrice='[data-test="inventory-item-price"]'
        this.itemDescription='[data-test="inventory-item-desc"]'
        this.addToCartButton='button#add-to-cart'
        this.backToInventoryButton='[data-test="back-to-products"]'
    }

    //products page methods
    async addToCart(){
        await this.page.locator().click()
    }   
}

module.exports=ProductDetailsPage;