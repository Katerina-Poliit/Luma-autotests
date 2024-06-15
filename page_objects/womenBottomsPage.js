class WomenBottomsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeading: () => this.page.locator('#maincontent div').filter({ hasText: 'Bottoms' }),
	}
}

export default WomenBottomsPage;