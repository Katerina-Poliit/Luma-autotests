class MenTopsTanksPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Tanks')
	}
}

export default MenTopsTanksPage;