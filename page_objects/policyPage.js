class PolicyPage {
    constructor (page) {
        this.page = page
    }

    locators = {
        getNavigationMenu: () => this.page.locator('#privacy-policy-nav-content')
    }

    async clickNavigationMenu() {
		await this.locators.getNavigationMenu().click();
		return this;
	}
}

export default PolicyPage;