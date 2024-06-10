
class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByText('Toggle Nav My Cart My Cart')
	};

	async open() {
		await this.page.goto("/");
	}

	// async clickNextBtn() {
	// 	await this.locators.getNextBtn().click();
	// 	return this;
	// }

}

export default HomePage;
