// @ts-check
const { test, expect } = require('@playwright/test');

test("navigate to login page",async({page})=>{
  await page.goto("https://www.saucedemo.com/v1/");
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/")
})

test('test', async ({ page }) => {
  const usernameField = page.locator('[data-test="username"]')
  const passwordField = page.locator('[data-test="password"]')
  const loginButton = page.locator('input#login-button')
  const baseUrl = 'https://www.saucedemo.com/v1/'
  const inventoryPageURL= 'https://www.saucedemo.com/v1/inventory.html'
  await page.goto(baseUrl);
  await usernameField.click();
  await usernameField.fill('standard_user');
  await passwordField.click();
  await passwordField.fill('secret_sauce');
  await loginButton.click();
  await expect(page).toHaveURL(inventoryPageURL)
});
