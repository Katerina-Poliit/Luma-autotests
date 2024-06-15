class WomenShortsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeading: () => this.page.getByLabel('Items').getByText('Shorts'),
	}
}

export default WomenShortsPage;