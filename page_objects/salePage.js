class SalePage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Sale').getByText('Sale')
	}
}

export default SalePage;