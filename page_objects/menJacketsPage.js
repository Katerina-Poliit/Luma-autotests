class MenJacketsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Jackets')
	}
}

export default MenJacketsPage;