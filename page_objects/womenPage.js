class WomenPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Women').getByText('Women')
	}
}

export default WomenPage;