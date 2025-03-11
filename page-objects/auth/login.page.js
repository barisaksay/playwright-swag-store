const BasePage= require('../base.page');

class LoginPage extends BasePage{
    constructor(page){
        super(page);

        //login page selectors

        this.usernameInput ='#user-name';
        this.passwordInput='#password';
        this.loginButton='#login-button';
        this.errorMessageElement='[data-test="error"]'
        
        this.errorMessages={
            lockedOutUser:"Epic sadface: Sorry, this user has been locked out.",
            invalidCredentials:"Epic sadface: Username and password do not match any user in this service"
        }
    }

    async login(username,password){
        await this.fillInputField(this.usernameInput,username)
        await this.fillInputField(this.passwordInput,password)
        await this.clickElement(this.loginButton)
    }
}

module.exports=LoginPage;