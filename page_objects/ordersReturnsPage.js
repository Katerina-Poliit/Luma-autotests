class OrdersReturnsPage {
	constructor(page){
		 this.page = page;
	}

	locators = {

        getOrdersAndReturnsPageFields: () => this.page.locator('.fieldset .label').filter((label) => label.textContent() === ORDERS_AND_RETURNS_PAGE_FIELDS).all(),
        getContinueBtn: () => this.page.getByRole('button', { name: 'Continue' }),
	}

}

export default OrdersReturnsPage;