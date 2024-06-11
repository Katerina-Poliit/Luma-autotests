
import NotesPage from "./notesPage";

import CreateNewCustomerAccountPage from "./createNewCustomerAccountPage";
import CustomerLoginPage from "./customerLoginPege";
import SearchResultPageWithResults from "./searchResultPageWithResults";


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
		getSearchBtn: () => this.page.locator("button[title='Search']"),
		getPacticeAPI: () => this.page.getByRole('link', { name: 'Practice API Testing using Magento' }),

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

	async fillSearchFieldSmth(value) {
		await this.locators.getSearchField().fill(value);
		return this;
	}

	async fillSearchField() {
		await this.locators.getSearchField().fill('a');
		return this;
	}

	async cleanSearchField() {
		await this.locators.getSearchField().fill('');
		return this;
	}

	async clickSearchField() {
		await this.locators.getSearchField().click();
		return this;
	}

	async clickSearchBtn() {
		await this.locators.getSearchBtn().click();
		return new SearchResultPageWithResults(this.page);
	}

	async pressSearchField() {
		await this.locators.getSearchField().press('Enter');
		return new SearchResultPageWithResults(this.page);
	}

}

export default HomePage;
