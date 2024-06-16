class GearFitnessEquipmentPage {
	constructor (page) {
		 this.page = page
	}

	locators = {
		getHeader: () => this.page.getByLabel('Items').getByText('Fitness Equipment')
	}
}

export default GearFitnessEquipmentPage;