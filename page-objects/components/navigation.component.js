/*
    Navigation menu component class representing the left hand-side menu shared across pages.
    This component encapsulates navigation menu locators and related methods.
*/

const BasePage= require('../base.page');

class NavigationMenuComponent{
    constructor(page){
        this.page=page;


    //selectors
    this.menuExpandButton='#react-burger-menu-btn'
    this.inventoryButton='#inventory_sidebar_link';
    this.logoutButton='#logout_sidebar_link';
    this.menuCollapseButton='#react-burger-cross-btn'
    }

    async expandMenu(){
        await this.page.locator(this.menuExpandButton).click()
    }

    async collapseMenu(){
        await this.page.locator(this.menuCollapseButton).click()
    }

    async goToInventory(){
        await this.page.locator(this.inventoryButton).click()
    }

    async logout(){
        await this.page.locator(this.logoutButton).click()
    }

}

module.exports=NavigationMenuComponent;