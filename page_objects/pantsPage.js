class PantsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items 1-12 of').getByText('Pants')
	}
}

export default PantsPage;