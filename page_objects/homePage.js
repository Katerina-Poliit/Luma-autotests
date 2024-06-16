
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
import WomenTopsPage from "./womenTopsPage";
import WomenTopsSubcategoryJacketsPage from "./WomenTopsSubcategoryJacketsPage";
import WomenHoodiesSweatshirtsPage from "./WomenHoodiesSweatshirtsPage";
import PantsPage from "./pantsPage";
import WomenTeesPage from "./womenTeesPage";
import WomenBrassTanksPage from "./womenBrassTanksPage";
import WomenBottomsPage from "./womenBottomsPage";
import WomenPanstPage from "./womenPantsPage";
import WomenShortsPage from "./womenShortsPage";
import MenTopsPage from "./menTopsPage";
import MenJacketsPage from "./menJacketsPage";
import MenHoddiesSweatshirtsPage from "./menHoddiesSweatshirtsPage";
import TeesPage from "./teesPage";
import MenTopsTeesPage from "./menTopsTeesPage";
import MenTopsTanksPage from "./menTopsTanksPage";


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
		getLumaYogaCollectionSection: () => this.page.getByRole('link', { name: 'New Luma Yoga Collection Get' }),
		getLumaYogaCollectionSectionInfBlock: () => this.page.locator('.bg-white').first(),
		getLumaYogaCollectionSectionInfBlockHeader: () => this.page.locator('.info').filter({ hasText: 'New Luma Yoga Collection' }),
		getLumaYogaCollectionSectionInfBlockCTA: () => this.page.locator('.title').filter({ hasText: 'Get fit and look fab in new seasonal styles' }),
		getShopNewYogaBtn: () => this.page.locator('.button'),
		get20OFFSection: () => this.page.getByRole('link', { name: '20% OFF Luma pants when you' }),
		get20OFFSectionInfBlock: () => this.page.locator('.home-pants .content'),
		get20OFFSectionInfBlockHeader: () => this.page.locator('.title').filter({ hasText: '20% OFF' }),
		get20OFFSectionInfBlockCTA: () => this.page.locator('.info').filter({ hasText: 'Luma pants when you shop today*' }),
		getShopPantsLink: () => this.page.locator('.icon').filter({ hasText: 'Shop Pants' }),
		getEvenMoreSection: () => this.page.getByRole('link', { name: 'Even more ways to mix and' }),
		getEvenMoreSectionInfBlock: () => this.page.locator('.home-t-shirts .content'),
		getEvenMoreSectionInfBlockHeader: () => this.page.locator('.title').filter({ hasText: 'Even more ways to mix and match' }),
		getEvenMoreSectionInfBlockCTA: () => this.page.locator('.info').filter({ hasText: 'Buy 3 Luma tees get a 4th free' }),
		getShopTeesLink: () => this.page.locator('.icon').filter({ hasText: 'Shop Tees' }),
		getTakeItFromErinSection: () => this.page.getByRole('link', { name: 'Take it from Erin Luma' }),


      //----------------------------- Kate -----------------------------------------------------------
		getWomenDropdown: () => this.page.locator('.nav-2 > ul > li > a'),
		getMomenCategoryTops:() => this.page.getByRole('menuitem', { name: ' Tops' }),
		getWomenTopsSubcategoryJackets:() => this.page.locator('#ui-id-11'),
		getWomenTopsSubcategoryHoodiesSweatshirts:() => this.page.locator('#ui-id-12'),
		getTopsSubcategoryTees:() => this.page.locator('#ui-id-13'),
		getTopsSubcategoryBrassTanks:() => this.page.locator('#ui-id-14'),
		getMomenCategoryBottoms:() => this.page.getByRole('menuitem', { name: ' Bottoms' }),
		getWomenSubcategoryPants:() => this.page.locator('#ui-id-15'),
		getWomenSubcategoryShorts:() => this.page.locator('#ui-id-16'),
		getMenDropdown: () => this.page.getByRole('menuitem', { name: ' Men' }),
		getMenTopsSubcategory: () => this.page.locator('#ui-id-17'),
		getMenTopsJackets:() => this.page.locator('#ui-id-19'),
		getMenTopsHoodiesSweatshirts:() => this.page.locator('#ui-id-20'),
		getMenTopsTees:() => this.page.locator('#ui-id-21'),
		getMenTopsTanks:() => this.page.locator('#ui-id-22'),


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

	async getShopNewYogaBtn() {
		await this.locators.getShopNewYogaBtn().click();
		return new NewLumaYogaCollectionSectionPage(this.page);
	}

	async hoverWomenLink() {
		await this.locators.getWomenLink().hover();

		return this;
	}

	async clickMomenCategoryTops() {
		await this.locators.getMomenCategoryTops().click();

		return new WomenTopsPage(this.page);
	}

	async hoverMomenCategoryTops() {
		await this.locators.getMomenCategoryTops().hover();

		return this;
	}

	async clickWomenTopsSubcategoryJackets() {
		await this.locators.getWomenTopsSubcategoryJackets().click();

		return new WomenTopsSubcategoryJacketsPage(this.page);
	}

	async clickWomenTopsSubcategoryHoodiesSweatshirts() {
		await this.locators.getWomenTopsSubcategoryHoodiesSweatshirts().click();

		return new WomenHoodiesSweatshirtsPage(this.page);
	}

	async click20OFFSection() {
		await this.locators.get20OFFSection().click();

		return new PantsPage(this.page);
	}

	async clickShopPantsLink() {
		await this.locators.getShopPantsLink().click();

		return new PantsPage(this.page);
	}

	async clickTopsSubcategoryTees() {
		await this.locators.getTopsSubcategoryTees().click();

		return new WomenTeesPage(this.page);
	}

	async clickTopsSubcategoryBrassTanks() {
		await this.locators.getTopsSubcategoryBrassTanks().click();

		return new WomenBrassTanksPage(this.page);
	}

	async clickMomenCategoryBottoms() {
		await this.locators.getMomenCategoryBottoms().click();

		return new WomenBottomsPage(this.page);
	}

	async hoverMomenCategoryBottoms() {
		await this.locators.getMomenCategoryBottoms().hover();

		return this;
	}


	async clickWomenSubcategoryPants() {
		await this.locators.getWomenSubcategoryPants().click();

		return new WomenPanstPage(this.page);
	}


	async clickWomenSubcategoryShorts() {
		await this.locators.getWomenSubcategoryShorts().click();

		return new WomenShortsPage(this.page);
	}


	async hoverMenDropdown() {
		await this.locators.getMenDropdown().hover();

		return this;
	}

	async hoverMenTopsSubcategory() {
		await this.locators.getMenTopsSubcategory().hover();

		return this;
	}

	async clickMenTopsSubcategory() {
		await this.locators.getMenTopsSubcategory().click();

		return new MenTopsPage(this.page);
	}

	async clickMenTopsJackets() {
		await this.locators.getMenTopsJackets().click();

		return new MenJacketsPage(this.page);
	}

	async hovertMenTopsHoodiesSweatshirts() {
		await this.locators.getMenTopsHoodiesSweatshirts().hover();

		return this;
	}

	async clickMenTopsHoodiesSweatshirts() {
		await this.locators.getMenTopsHoodiesSweatshirts().click();

		return new MenHoddiesSweatshirtsPage(this.page);
	}

	async clickEvenMoreSection() {
		await this.locators.getEvenMoreSection().click();

		return new TeesPage(this.page);
	}

	async clickShopTeesLink() {
		await this.locators.getShopTeesLink().click();

		return new TeesPage(this.page);
	}

	async hoverMenTopsTees() {
		await this.locators.getMenTopsTees().hover();

		return this;
	}

	async clickMenTopsTees() {
		await this.locators.getMenTopsTees().click();

		return new MenTopsTeesPage(this.page);
	}

	async hoverMenTopsTanks() {
		await this.locators.getMenTopsTanks().hover();

		return this;
	}

	async clickMenTopsTanks() {
		await this.locators.getMenTopsTanks().click();

		return new MenTopsTanksPage(this.page);
	}


}

export default HomePage;
