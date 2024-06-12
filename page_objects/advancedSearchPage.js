import HomePage from "./homePage";
import ResultSearchPage from "./ResultSearchPage";


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

    async fillSKUField() {
		await this.locators. getSKUField().fill('WJ12');
		return this;
	}

    async clickSearchBtn() {
		await this.locators.getSearchBtn().click();
		return new ResultSearchPage(this.page);
	}

}

export default AndvancedSearchPage;