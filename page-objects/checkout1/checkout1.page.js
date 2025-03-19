const BasePage= require('../base.page');

class Checkout1Page extends BasePage{
    constructor(page){
        super(page);

        //checkout1 page selectors
        this.productsList ='.inventory_list'
        this.item='[data-test="inventory-item"]'
        this.itemName='[data-test="inventory-item-name"]'
        this.itemPrice='[data-test="inventory-item-price"]'
        this.addToCartButton='button[class="btn btn_primary btn_small btn_inventory "]'
        this.removeFromCartButton='button.btn_secondary:text("Remove")'
    }
}

module.exports=Checkout1Page;