// class GearWatchesPage {
// 	constructor (page) {
// 		 this.page = page
// 	}

// 	locators = {
// 		getHeader: () => this.page.getByLabel('Items').getByText('Watches')
// 	}
// }

// export default GearWatchesPage;

export default class GearWatchesPage {
	constructor(page) {
	  this.page = page;
	}

	async getHeader() {
	  return this.page.getByLabel('Items').getByText('Watches');
	}

	// async clickSignDocumentRadioBtn() {
	//   await this.signDocumentRadioBtn.click();
	// }
  }