const { test, expect } = require("@playwright/test");
const BasePage = require("../../../page-objects/base.page");
const LoginPage = require("../../../page-objects/auth/login.page");
const ProductsPage = require("../../../page-objects/products/products.page");
const ProductDetailsPage = require("../../../page-objects/products/productDetails.page");
const NavigationMenuComponent = require("../../../page-objects/components/navigation.component");
const CartPage = require("../../../page-objects/cart/cart.page");

const testUsers = require("../../../utils/test-data/test-users.json");
const productDetails = require("../../../utils/test-data/products.json");

test.describe("products page tests", () => {
  let basePage;
  let loginPage;
  let productsPage;
  let productDetailsPage;
  let navigationMenu;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    navigationMenu = new NavigationMenuComponent(page);
    cartPage = new CartPage(page);

    await loginPage.navigate();

    const user = testUsers.users.validUser;
    await loginPage.login(user.username, user.password);
  });

  test("correct item added to cart", async ({ page }) => {
    //get name of the item before performing click action
    const itemName = await productsPage.getText(productsPage.itemName, 1);

    //perform click action
    await productsPage.addItemToCart(1);

    await productsPage.clickElement(navigationMenu.cartButton);
    
    //get name of the item at cart page
    const cartItemName = await cartPage.getText(cartPage.itemName);

    await expect(page).toHaveURL(basePage.baseURL + cartPage.cartURL);
    expect(cartItemName).toEqual(itemName);
  });

  test("should remove item from cart", async ({ page }) => {
    await productsPage.addItemToCart(1);
    await productsPage.clickElement(navigationMenu.cartButton);

    await expect(page).toHaveURL(basePage.baseURL+cartPage.cartURL)

    await cartPage.clickElement(cartPage.removeButton)

    await expect(page.locator(cartPage.cartItem)).not.toBeVisible()
  });

    test("should navigate back to inventory", async ({ page }) => {

      await productsPage.clickElement(navigationMenu.cartButton)
      await cartPage.clickElement(cartPage.continueShoppingButton);

      await expect(page).toHaveURL(basePage.baseURL+productsPage.productsURL)
  });
});
