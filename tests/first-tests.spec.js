// @ts-check
const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/login-page';



  test('test', async ({ page }) => {
    const loginPage = new LoginPage(page)

    const baseUrl = 'https://www.saucedemo.com/v1/'
    const inventoryPageURL= 'https://www.saucedemo.com/v1/inventory.html'
  
    await page.goto(baseUrl);

    await loginPage.typeUsername('standard_user')
    await loginPage.typePassword('secret_sauce')
    await loginPage.clickLoginButton()
    await expect(page).toHaveURL(inventoryPageURL)
  });


