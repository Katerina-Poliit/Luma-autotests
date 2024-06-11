class CreateAccount {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getCreateAccount: () => this.page.getByRole('link', { name: 'Create an Account' })
	}

}

export default CreateAccount;