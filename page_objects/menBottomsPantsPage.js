class MenBottomsPantsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Pants')
	}
}

export default MenBottomsPantsPage;