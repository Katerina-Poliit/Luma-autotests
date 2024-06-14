class WhatsNewPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('What\'s New').getByText('What\'s New')
	}
}

export default WhatsNewPage;