const { test, expect } = require("@playwright/test");
const BasePage = require("../../../page-objects/base.page");
const LoginPage = require("../../../page-objects/auth/login.page");
const ProductsPage = require("../../../page-objects/products/products.page");
const NavigationMenuComponent = require("../../../page-objects/components/navigation.component");
const CartPage = require("../../../page-objects/cart/cart.page");
const Checkout1Page = require('../../../page-objects/checkout1/checkout1.page')

const testUsers = require("../../../utils/test-data/test-users.json");

test.describe("products page tests", () => {
  let basePage;
  let loginPage;
  let productsPage;
  let navigationMenu;
  let cartPage;
  let checkout1Page;
  const checkoutUser = testUsers.users.checkoutUser;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    navigationMenu = new NavigationMenuComponent(page);
    cartPage = new CartPage(page);
    checkout1Page= new Checkout1Page(page)
    await loginPage.navigate();

    //login
    const user = testUsers.users.validUser;
    await loginPage.login(user.username, user.password);

    //perform click action
    await productsPage.addItemToCart(1);
    await navigationMenu.goToCart()

    await cartPage.clickElement(cartPage.checkoutButton);
  });

  test('should navigate to checkout1', async({page}) => { 
    
    await expect(page).toHaveURL(basePage.baseURL+checkout1Page.checkout1URL);
   })

   test('should proceed after filling fields', async({page}) => { 
    await checkout1Page.fillInputField(checkout1Page.firstNameField,checkoutUser.firstname)
    await checkout1Page.fillInputField(checkout1Page.lastNameField,checkoutUser.lastname)
    await checkout1Page.fillInputField(checkout1Page.postalCodeField,checkoutUser.postalcode)
    await checkout1Page.clickElement(checkout1Page.continueButton)

    await expect(page).toHaveURL(basePage.baseURL+"/checkout-step-two.html")
    })

    test.skip('should throw error when a field is empty @regression', async() => { 
      await checkout1Page.fillInputField(checkout1Page.firstNameField,checkoutUser.firstname)
      //leave lastname field empty
      await checkout1Page.fillInputField(checkout1Page.postalCodeField,checkoutUser.postalcode)
      })
  

});
