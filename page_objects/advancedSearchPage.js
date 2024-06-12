import HomePage from "./homePage";

class AndvancedSearchPage {
    constructor (page) {
        this.page = page
    }

    locators = {

        getSettingsSearch : () => this.page.locator('legend'),
        getProductNameField: () => this.page.getByLabel('Product Name'),
        getSKUField: () => this.page.getByLabel('SKU'),
        getDescriptionField: () => this.page.getByLabel('Description', { exact: true }),
        getShortDescriptionField: () => this.page.getByLabel('Short Description'),
        getPriceField: () => this.page.getByLabel('Price'),
        getUSDField: () => this.page.getByLabel('USD'),
        getSearchBtn: () => this.page.locator('#form-validate').getByRole('button', { name: 'Search' })

    }
}

export default AndvancedSearchPage;