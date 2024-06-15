class WomenBrassTanksPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeadingBrassTanksPage: () => this.page.locator('.page-title'),
	}
}

export default WomenBrassTanksPage;