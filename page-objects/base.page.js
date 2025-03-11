class BasePage{
    constructor(page){
        this.page=page;
        this.baseUrl="https://www.saucedemo.com/";
    }

    //navigation method
    async navigate(path=''){
        await this.page.goto(`${this.baseUrl}${path}`);
    }

    //element interaction
    async clickElement(selector){
        await this.page.locator(selector).click()
    }

    async fillInputField(selector,text){
        await this.page.locator(selector). fill(text)
    }

    async getText(selector){
        return await this.page.locator(selector).textContent()
    }
}

    module.exports = BasePage;