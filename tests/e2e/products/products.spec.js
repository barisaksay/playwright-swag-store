const { test, expect } = require("@playwright/test");
const LoginPage = require("../../../page-objects/auth/login.page");
const ProductsPage = require("../../../page-objects/products/products.page");
const ProductDetailsPage = require("../../../page-objects/products/productDetails.page");
const testUsers = require("../../../utils/test-data/test-users.json");
const productDetails = require("../../../utils/test-data/products.json");

test.describe("products page tests", () => {
  let loginPage;
  let productsPage;
  let productDetailsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    productDetailsPage = new ProductDetailsPage(page);

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

  test.only("should add item to cart from inventory page ", async ({ page }) => {
    await productsPage.addItemToCart(0);

    
  });
  
});
