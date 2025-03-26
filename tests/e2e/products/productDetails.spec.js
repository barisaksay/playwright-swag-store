const {test,expect}=require('@playwright/test');
const LoginPage = require('../../../page-objects/auth/login.page');
const ProductsPage= require('../../../page-objects/products/products.page')
const ProductDetailsPage= require('../../../page-objects/products/productDetails.page')
const NavigationMenuComponent = require('../../../page-objects/components/navigation.component');

const testUsers= require('../../../utils/test-data/test-users.json');
const productDetails = require('../../../utils/test-data/products.json');
 
test.describe('product details page tests', () => { 
    let loginPage;
    let productsPage;
    let productDetailsPage;
    let navigationMenu;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        productsPage=new ProductsPage(page)
        productDetailsPage= new ProductDetailsPage(page);
        navigationMenu = new NavigationMenuComponent(page);

        await loginPage.navigate();
        const user=testUsers.users.validUser;
        await loginPage.login(user.username,user.password);
    })

    test('should navigate back to products/inventory page', async({page}) => { 
        await productsPage.selectItem(1);
        await productDetailsPage.clickElement(productDetailsPage.backToInventoryButton);

        await expect(page.locator(productsPage.productsList)).toBeVisible()
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

     })

     test('should add item to cart from product details page @regression', async({page}) => { 

        await productsPage.selectItem(0);
        await productDetailsPage.addToCart();
        await expect(page.locator(navigationMenu.cartCounter)).toHaveText('1');
     })

 })