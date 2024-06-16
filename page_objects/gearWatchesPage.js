class GearWatchesPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Watches')
	}
}

export default GearWatchesPage;