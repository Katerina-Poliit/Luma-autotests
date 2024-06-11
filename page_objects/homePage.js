
import NotesPage from "./notesPage";

import CreateNewCustomerAccountPage from "./createNewCustomerAccountPage";
import CustomerLoginPage from "./customerLoginPege";


class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByText('Toggle Nav My Cart My Cart'),
		getLogo: () => this.page.getByLabel('store logo'),

		getFooter: () => this.page.locator('.page-wrapper footer'),
		getNoteslink: () => this.page.getByRole('link', { name: 'Notes' }),

		// getFooter: () => this.page.getByRole('contentinfo'),
		getNotesslink: () => this.page.locator('li').filter({ hasText: 'Notes' }),
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


	async clickNoteslink() {
		await this.locators.getNoteslink().click();
		return new NotesPage(this.page);
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
