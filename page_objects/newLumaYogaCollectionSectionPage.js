class NewLumaYogaCollectionSectionPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items 1-12 of').getByText('New Luma Yoga Collection')
	}
}

export default NewLumaYogaCollectionSectionPage;