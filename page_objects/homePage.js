
import NotesPage from "./notesPage";
import ParticeAPIPage from "./particeApi.Page";
import WriteForUsPage from "./writeForUsPage";
import SubscribePage from "./SubscribePage";
import PolicyPage from "./policyPage";
import SearchtermsPage from "./searchTermsPage";
import AndvancedSearchPage from "./advancedSearchPage";
import OrdersReturnsPage from "./ordersReturnsPage";
import CreateNewCustomerAccountPage from "./createNewCustomerAccountPage";
import CustomerLoginPage from "./customerLoginPege";
import SearchResultPageWithResults from "./searchResultPageWithResults";
import WhatsNewPage from "./watsNewPage";
import WomenPage from "./womenPage";
import MenPage from "./menPage";
import GearPage from "./gearPage";
import TrainingPage from "./trainingPage";
import SalePage from "./salePage";
import LumaYogaCollectionSectionPage from "./newLumaYogaCollectionSectionPage";
import NewLumaYogaCollectionSectionPage from "./newLumaYogaCollectionSectionPage";


class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByText('Toggle Nav My Cart My Cart'),
		getLogo: () => this.page.getByLabel('store logo'),
		getFooter: () => this.page.locator('.page-wrapper footer'),
		getNoteslink: () => this.page.getByRole('link', { name: 'Notes' }),
		getNotesslink: () => this.page.locator('li').filter({ hasText: 'Notes' }),
		getSignInlink: () => this.page.getByRole('link', { name: 'Sign In' }),
		getCreateAnAccountlink: () => this.page.getByRole('banner').getByRole('link', { name: 'Create an Account' }),
		getSearchField: () => this.page.getByPlaceholder('Search entire store here...'),
		getSearchBtn: () => this.page.locator("button[title='Search']"),
		getPacticeAPI: () => this.page.getByRole('link', { name: 'Practice API Testing using Magento' }),
		getForUsLink: () => this.page.getByRole('link', { name: 'Write for us' }),
		getSubscribeLink: () => this.page.getByRole('link', { name: 'Subscribe' }),
		getPrivacyCookiesLink: () => this.page.getByRole('link', { name: 'Privacy and Cookie Policy' }),
		getSearchTermsLink: () => this.page.getByRole('link', { name: 'Search Terms' }),
		getAdvancedSearchLink: () => this.page.getByRole('link', { name: 'Advanced Search' }),
		getDropdownSearch: () => this.page.locator('#search_autocomplete > ul > li'),
		getDropdownItem: () => this.page.locator('.qs-option-name').filter({hasText: 'shorts for men'}),
		getCartBtn: () => this.page.getByRole('link', { name: ' My Cart' }),
		getOrsersReturnsLink: () => this.page.getByRole('link', { name: 'Orders and Returns' }),
      //----------------------------- Home page -----------------------------------------------------------
		getBody: () => this.page.locator('div').filter({ hasText: 'New Luma Yoga Collection Get' }).nth(3),
		getWatsNewLink: () => this.page.getByRole('menuitem', { name: 'What\'s New' }),
		getWomenLink: () => this.page.getByRole('menuitem', { name: 'Women' }),
		getMenLink: () => this.page.getByRole('menuitem', { name: 'Men' }).last(),
		getGearLink: () => this.page.getByRole('menuitem', { name: 'Gear' }),
		getTrainingLink: () => this.page.getByRole('menuitem', { name: 'Training' }),
		getSaleLink: () => this.page.getByRole('menuitem', { name: 'Sale' }),
		getPromoBlock: () => this.page.locator('div').filter({ hasText: 'New Luma Yoga Collection Get' }).nth(3),
		getLumaYogaCollectionSection: () => this.page.getByRole('link', { name: 'New Luma Yoga Collection Get' })


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

	async clickPacticeAPILink() {
		await this.locators.getPacticeAPI().click();
		return new ParticeAPIPage(this.page);
	}

	async clickForUsLink() {
		await this.locators.getForUsLink().click();
		return new WriteForUsPage(this.page);
	}

	async clickSubscribeLink() {
		await this.locators.getSubscribeLink().click();
		return new SubscribePage(this.page);
	}

	async clickPrivacyCookiesLink() {
		await this.locators.getPrivacyCookiesLink().click();
		return new PolicyPage(this.page);
	}

	async clickSearchTermsLink() {
		await this.locators.getSearchTermsLink().click();
		return new SearchtermsPage(this.page);
	}

	async clickAdvancedSearchLink() {
		await this.locators.getAdvancedSearchLink().click();
		return new AndvancedSearchPage(this.page);
	}

	async clickDropdownItem() {
		await this.locators.getDropdownItem().click();
		return new SearchResultPageWithResults(this.page);
	}

	async clickOrsersReturnsLink() {
		await this.locators.getOrsersReturnsLink().click();
		return new OrdersReturnsPage(this.page);
	}

	async clickWatsNewLink() {
		await this.locators.getWatsNewLink().click();
		return new WhatsNewPage(this.page);
	}

	async clickWomenLink() {
		await this.locators.getWomenLink().click();
		return new WomenPage(this.page);
	}

	async clickMenLink() {
		await this.locators.getMenLink().click();
		return new MenPage(this.page);
	}

	async clickGearLink() {
		await this.locators.getGearLink().click();
		return new GearPage(this.page);
	}

	async clickTrainingLink() {
		await this.locators.getTrainingLink().click();
		return new TrainingPage(this.page);
	}

	async clickSaleLink() {
		await this.locators.getSaleLink().click();
		return new SalePage(this.page);
	}

	async clickNewLumaYogaCollectionSection() {
		await this.locators.getLumaYogaCollectionSection().click();
		return new NewLumaYogaCollectionSectionPage(this.page);
	}

}

export default HomePage;
