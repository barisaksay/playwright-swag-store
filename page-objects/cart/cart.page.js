const BasePage= require('../base.page');

class CartPage extends BasePage{
    constructor(page){
        super(page);

        //cart page selectors
        this.cartItem='[data-test="inventory-item"]'
        this.itemName='[data-test="inventory-item-name"]'
        this.itemPrice='[data-test="inventory-item-price"]'
        this.itemDescription='[data-test="inventory-item-desc"]'
        this.removeButton='button:text("Remove")'
        this.continueShoppingButton='button#continue-shopping'
        this.checkoutButton='button[data-test="checkout"]'
        this.cartURL='/cart.html'
    }
}

module.exports=CartPage;