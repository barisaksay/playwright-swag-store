exports.LoginPage= class LoginPage{
    constructor(page){
        this.page=page;
        this.usernameField =page.locator('[data-test="username"]')
        this.passwordField=page.locator('[data-test="password"]')
        this.loginButton=page.locator('input#login-button')
    }

     async typeUsername(username){
        await this.usernameField.fill(username)
    }
    
    async typePassword(password){
        await this.passwordField.fill(password)
    }

    async clickLoginButton(){
        await this.loginButton.click()
    }

    //alternative login for helper: in Cypress project this was implemented by a custom command
    async login(username,password){
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}

