class WomenTeesPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeadingTessPage: () => this.page.locator('.page-title'),
	}
}

export default WomenTeesPage;