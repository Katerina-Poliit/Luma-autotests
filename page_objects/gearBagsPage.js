class GearBagsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.locator('#maincontent div').filter({ hasText: 'Bags' })
	}
}

export default GearBagsPage;