// @ts-check
const { test, expect } = require('@playwright/test');
const { describe } = require('node:test');

describe("learning playwright",()=>{

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
  

})

