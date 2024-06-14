class GearPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Gear').getByText('Gear')
	}
}

export default GearPage;