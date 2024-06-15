class WomenTopsSubcategoryJacketsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {

		getHeadingJacketsPage: () => this.page.locator('.page-title'),

	}
}

export default WomenTopsSubcategoryJacketsPage;