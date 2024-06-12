class AndvancedSearchPage {
    constructor (page) {
        this.page = page
    }

    locators = {

        getSettingsSearch : () => this.page.locator('legend'),
        getProductNameField: () => this.page.getByLabel('Product Name'),
        getSKUField: () => this.page.getByLabel('SKU'),
        getDescriptionField: () => this.page.getByLabel('Description', { exact: true })

    }
}

export default AndvancedSearchPage;