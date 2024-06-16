class MenBottomsShortsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Shorts')
	}
}

export default MenBottomsShortsPage;