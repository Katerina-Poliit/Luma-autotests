
class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByText('Toggle Nav My Cart My Cart'),
		getLogo: () => this.page.getByLabel('store logo'),
		getFooter: () => this.page.getByRole('contentinfo'),
		getNoteslink: () => this.page.locator('li').filter({ hasText: 'Notes' })
	};

	async open() {
		await this.page.goto("/");
	}

	async clickLogo() {
		await this.locators.getLogo().click();
		return this;
	}

}

export default HomePage;
