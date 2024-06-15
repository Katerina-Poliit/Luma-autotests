class MenTopsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.locator('#maincontent div').filter({ hasText: 'Tops' }),
	}
}

export default MenTopsPage;