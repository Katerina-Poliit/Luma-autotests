class SignIn {
	constructor(page){
		 this.page = page;
	}

	locators = {
		 getSignIn: () => this.page.getByRole('link', { name: 'Sign In' })
	}

}

export default SignIn;