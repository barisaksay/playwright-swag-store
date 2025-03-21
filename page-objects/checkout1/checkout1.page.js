const BasePage= require('../base.page');

class Checkout1Page extends BasePage{
    constructor(page){
        super(page);

        //checkout1 page selectors
        this.firstNameField='[data-test="firstName"]'
        this.lastNameField='[data-test="lastName"]'
        this.postalCodeField='[data-test="postalCode"]'
        this.continueButton='input[data-test="continue"]'
        this.cancelButton='button[data-test="cancel"]'
        this.checkout1URL='/checkout-step-one.html'
    }
}

module.exports=Checkout1Page;