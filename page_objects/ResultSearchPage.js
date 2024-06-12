class ResultSearchPage {
    constructor (page) {
        this.page = page
    }


    locators = {
        getValidMessage: () => this.page.getByText('1 item were found using the'),
        getNotValidMessage: () => this.page.getByText('We can\'t find any items'),
        getBreadcrmsCatalog: () => this.page. getByRole('link', { name: 'Catalog Advanced Search' }),
        getBreadcrmsHome: () => this.page.getByRole('link', { name: 'Home' })

    }

    async clickBreadcrmsCatalog() {
		await this.locators. getBreadcrmsCatalog().click();
		return this;
	}

    async clickBreadcrmsHome() {
		await this.locators.getBreadcrmsHome().click();
		return this;
	}
}

export default ResultSearchPage;