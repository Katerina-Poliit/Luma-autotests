class MenTopsTeesPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Tees')
	}
}

export default MenTopsTeesPage;