class CustomerLoginPage {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getHeader: () => this.page.getByText('Customer Login')
	}

}

export default CustomerLoginPage;