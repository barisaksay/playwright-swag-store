class BasePage{
    constructor(page){
        this.page=page;
    }

    //navigation method
    async navigate(path=''){
        await this.page.goto(path);
    }

    //element interaction
    async clickElement(selector){
        await this.page.locator(selector).click()
    }

    async fillInputField(selector,text){
        await this.page.locator(selector).fill(text)
    }

    async getText(selector){
        return await this.page.locator(selector).textContent()
    }

    async isVisible(selector){
        return await this.page.locator(selector).isVisible()
    }
}

    module.exports = BasePage;