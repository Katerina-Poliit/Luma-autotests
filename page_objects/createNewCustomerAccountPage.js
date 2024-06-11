class CreateNewCustomerAccountPage {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getHeader: () => this.page.getByText('Create New Customer Account')
	}

}

export default CreateNewCustomerAccountPage;