import CreateNewCustomerAccountPage from "./createNewCustomerAccountPage";
import CustomerLoginPage from "./customerLoginPege";

class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByText('Toggle Nav My Cart My Cart'),
		getLogo: () => this.page.getByLabel('store logo'),
		getFooter: () => this.page.getByRole('contentinfo'),
		getNoteslink: () => this.page.locator('li').filter({ hasText: 'Notes' }),
		getSignInlink: () => this.page.getByRole('link', { name: 'Sign In' }),
		getCreateAnAccountlink: () => this.page.getByRole('banner').getByRole('link', { name: 'Create an Account' }),
		getSearchField: () => this.page.getByPlaceholder('Search entire store here...'),
		getSearchBtn: () => this.page.locator("button[title='Search']")
	};

	async open() {
		await this.page.goto("/");
	}

	async clickLogo() {
		await this.locators.getLogo().click();
		return this;
	}

	async clickSignInlink() {
		await this.locators.getSignInlink().click();
		return new CustomerLoginPage(this.page);
	}

	async clickCreateAnAccountlink() {
		await this.locators.getCreateAnAccountlink().click();
		return new CreateNewCustomerAccountPage(this.page);
	}

}

export default HomePage;
