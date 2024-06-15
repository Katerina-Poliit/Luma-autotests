class WomenTopsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {

		getHeadingPage: () => this.page.locator('.page-title'),



	}
}

export default WomenTopsPage;