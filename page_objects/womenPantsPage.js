class WomenPanstPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeading: () => this.page. getByLabel('Items 1-12 of').getByText('Pants'),
	}
}

export default WomenPanstPage;