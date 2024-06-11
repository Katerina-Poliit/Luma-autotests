class PolicyPage {
    constructor (page) {
        this.page = page
    }

    locators = {
        getNavigationMenu: () => this.page.locator('#privacy-policy-nav-content')
    }
}

export default PolicyPage;