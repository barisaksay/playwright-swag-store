const {test,expect}=require('@playwright/test');
const LoginPage = require('../../../page-objects/auth/login.page');
const ProductsPage= require('../../../page-objects/products/products.page')
const testUsers= require('../../../utils/test-data/test-users.json');
const productDetails = require('../../../utils/test-data/products.json');

test.describe('products page tests', () => { 
    let loginPage;
    let productsPage;


    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        productsPage=new ProductsPage(page)
        await loginPage.navigate("https://www.saucedemo.com/");
        const user=testUsers.users.validUser;
        await loginPage.login(user.username,user.password);
    })

      test('should click item name', async({page}) => { 
        const selectedItemName= await productsPage.selectItem(1);

        //const itemName= productDetails.items[1].name;

        await expect(page.locator('.inventory_details_name')).toHaveText(selectedItemName)
       })
 })