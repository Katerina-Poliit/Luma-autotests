class MenBottomsPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items 1-12 of').getByText('Bottoms')
	}
}

export default MenBottomsPage;