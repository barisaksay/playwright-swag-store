const BasePage= require('../base.page');

class LoginPage extends BasePage{
    constructor(page){
        super(page);

        //login page selectors

        this.usernameInput ='#user-name';
        this.passwordInput='#password';
        this.loginButton='#login-button';
    }

    async login(username,password){
        await this.fillInputField(this.usernameInput,username)
        await this.fillInputField(this.passwordInput,password)
        await this.clickElement(this.loginButton)
    }
}

module.exports=LoginPage;