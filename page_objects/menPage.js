class MenPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Men').getByText('Men')
	}
}

export default MenPage;