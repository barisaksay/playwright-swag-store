const {test,expect}=require('@playwright/test');
const LoginPage = require('../../../page-objects/auth/login.page');
const NavigationMenuComponent = require('../../../page-objects/components/navigation.component')
const testUsers= require('../../../utils/test-data/test-users.json');

test.describe('Logout tests',()=>{
    let loginPage;
    let navigationMenu;


    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        navigationMenu = new NavigationMenuComponent(page);
        await loginPage.navigate();
    })

    test('should logout successfully', async({page}) =>{ 
        const user=testUsers.users.validUser;

        await loginPage.login(user.username,user.password);
        await expect(page.locator(navigationMenu.menuExpandButton)).toBeVisible()

        await navigationMenu.expandMenu();
        await navigationMenu.logout();

        await expect(page).toHaveURL(loginPage.baseURL)

     })

})
