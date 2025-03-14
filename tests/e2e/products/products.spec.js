const { test, expect } = require("@playwright/test");
const LoginPage = require("../../../page-objects/auth/login.page");
const ProductsPage = require("../../../page-objects/products/products.page");
const ProductDetailsPage = require("../../../page-objects/products/productDetails.page");
const NavigationMenuComponent = require('../../../page-objects/components/navigation.component');
const testUsers = require("../../../utils/test-data/test-users.json");
const productDetails = require("../../../utils/test-data/products.json");

test.describe("products page tests", () => {
  let loginPage;
  let productsPage;
  let productDetailsPage;
  let navigationMenu;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);
    navigationMenu = new NavigationMenuComponent(page);

    await loginPage.navigate();

    const user = testUsers.users.validUser;
    await loginPage.login(user.username, user.password);
  });

  test("correct number of items are displayed", async ({ page }) => {
    const numberOfProducts = productDetails.items.length;

    await expect(page.locator(productsPage.item)).toHaveCount(numberOfProducts);
  });

  test("item name should be clickable ", async ({ page }) => {
    const selectedItemName = await productsPage.selectItem(1);

    await expect(page.locator(productDetailsPage.itemName)).toHaveText(selectedItemName);
  });

  test("should add item to cart from inventory page ", async ({ page }) => {
    await productsPage.addItemToCart(0)

    await expect(page.locator(navigationMenu.cartCounter)).toBeVisible()
  });

  test("should add multiple items to cart from inventory page ", async ({ page }) => {
    await productsPage.addItemToCart(0)
    await productsPage.addItemToCart(1)

    await expect(page.locator(navigationMenu.cartCounter)).toBeVisible()
    await expect(page.locator(navigationMenu.cartCounter)).toHaveText('2') //2 - because addItemToCart() is called twice.

  });

  test("should remove from cart via inventory page ", async ({ page }) => {
    await productsPage.addItemToCart(0)
    await productsPage.removeItemFromCart(0)

    await expect(page.locator(navigationMenu.cartCounter)).not.toBeVisible()


  });
  
});
