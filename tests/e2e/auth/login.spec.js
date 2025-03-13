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
        await loginPage.navigate("https://www.saucedemo.com/");
        
    })

    test('login with valid credentials',async({page})=>{
        const user=testUsers.users.validUser;

        await loginPage.login(user.username,user.password);
        await expect(page.locator(productsPage.productsList)).toBeVisible();
    })

    test('should not login for locked out user',async ({page}) => { 
        const lockedoutUser=testUsers.users.lockedoutUser;

        await loginPage.login(lockedoutUser.username,lockedoutUser.password);
        await expect(page.locator(loginPage.errorMessageElement)).toBeVisible();
        await expect(page.locator(loginPage.errorMessageElement)).toHaveText(loginPage.errorMessages.lockedOutUser);
     })

     test('should not login with invalid credentials', async({page}) => { 
        const invalidUser=testUsers.users.invalidUser
        
        await loginPage.login(invalidUser.username,invalidUser.password);
        
        await expect(page.locator(loginPage.errorMessageElement)).toHaveText(loginPage.errorMessages.invalidCredentials);
      })


      test.only('should click item name', async({page}) => { 
        const user=testUsers.users.validUser;
        await loginPage.login(user.username,user.password);

        const selectedItemName= await productsPage.selectItem(1);

        await expect(page.locator('.inventory_details_name')).toHaveText(selectedItemName)
       })
 })