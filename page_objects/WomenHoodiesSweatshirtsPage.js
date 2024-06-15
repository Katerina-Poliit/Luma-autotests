class WomenHoodiesSweatshirtsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Training').getByText('Training'),
		getHeadingPage: () => this.page.locator('.page-title'),
	}
}

export default WomenHoodiesSweatshirtsPage;