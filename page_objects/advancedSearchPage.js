class AndvancedSearchPage {
    constructor (page) {
        this.page = page
    }

    locators = {

        getSettingsSearch : () => this.page.locator('legend'),
        getProductNameField: () => this.page.getByLabel('Product Name'),

    }
}

export default AndvancedSearchPage;