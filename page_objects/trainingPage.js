class TrainingPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Training').getByText('Training')
	}
}

export default TrainingPage;