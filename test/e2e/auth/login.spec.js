const {test,expect}=require('@playwright/test');
const LoginPage = require('../../../page-objects/auth/login.page');
const ProductsPage= require('../../../page-objects/products/products.page')
const testUsers= require('../../../utils/test-data/test-users.json');

test.describe('login tests', () => { 
    let loginPage;
    let productsPage;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        productsPage=new ProductsPage(page)
        await loginPage.navigate();
        
    })

    test('login with valid credentials',async({page})=>{
        
        const user=testUsers.users.validUser;

        await loginPage.login(user.username,user.password);
         expect(page.locator('.inventory_list')).toBeVisible();
    })
 })