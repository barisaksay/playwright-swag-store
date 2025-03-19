class BasePage{
    constructor(page){
        this.page=page;
        this.baseURL='https://www.saucedemo.com';
    }

    //navigation method
    async navigate(path = '') {
        await this.page.goto(`${this.baseURL}${path}`);
    }

    //element interaction
    async clickElement(selector){
        await this.page.locator(selector).click()
    }

    async fillInputField(selector,text){
        await this.page.locator(selector).fill(text)
    }

    async getText(selector, index = null) {
        const locator = this.page.locator(selector);
        
        if (index !== null) {
            // Get text from the nth element
            return await locator.nth(index).textContent();
        } else {
            // Get text from the first (or only) matching element
            return await locator.textContent();
        }
    }

    async isVisible(selector){
        return await this.page.locator(selector).isVisible()
    }
}

    module.exports = BasePage;