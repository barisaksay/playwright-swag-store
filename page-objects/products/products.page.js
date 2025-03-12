const BasePage= require('../base.page');

class ProductsPage extends BasePage{
    constructor(page){
        super(page);

        //products page selectors

        this.productsList ='.inventory_list';
    }

}

module.exports=ProductsPage;