exports.LoginPage= class LoginPage{
    constructor(page){
        this.page=page;
        this.usernameField =page.locator('[data-test="username"]')
        this.passwordField=page.locator('[data-test="password"]')
        this.loginButton=page.locator('input#login-button')
    }
}

