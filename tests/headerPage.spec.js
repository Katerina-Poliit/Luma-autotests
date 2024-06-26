import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import { LINKS_LIST, BASE_URL,NAVBAR_URLs_END_POINTS, MY_ACCOUNT_CREATE_END_POINT, LOGO_ALIGNMENT, SIGN_IN_LINK_TEXT, CUSTOMER_LOGIN_PAGE_URL, CUSTOMER_LOGIN_PAGE_HEADER_TEXT, NAVBAR_URLs_END_POINTS_FULL, CREATE_AN_ACCOUNT_LINK_TEXT, CREATE_NEW_CUSTOMER_ACCOUNT_PAGE_URL, CREATE__NEW_CUSTOMER_ACCOUNT_PAGE_HEADER_TEXT, SEARCH_FIELD_PLACEHOLDER_TEXT, SEARCH_ITEM, AUTOCOMPLETELIST, SEARCH_ITEM_NEGATIVE, NO_RESULTS_MESSAGE_TEXT } from "../helpers/testDataHeaderPage";
import Logo from "../page_objects/logo";
import SignIn from "../page_objects/SignIn";
import CreateAccount from "../page_objects/createAccount";
import SearchField from "../page_objects/searchField";


test.describe('headerPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 01.1.1 Verify the the site contains the header', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getHeader()).toBeVisible();

	});

	test('ТС 01.1.2 Verify the the header of the site contains the store logo', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getLogo()).toBeVisible();

	});

	test('ТС 01.1.3 Verify the the store logo has a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getLogo()).toBeVisible();
		await expect(homePage.locators.getLogo()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.4 Verify the the store logo contains the image', async ({ page }) => {
		const homePage = new HomePage(page);

		// Поиск элемента логотипа по метке 'store logo'
		const logo = page.getByLabel('store logo');

		// Проверка, что элемент логотипа существует
		await expect(logo).toBeVisible();
		
		// Поиск внутри логотипа элемента img
		const img = logo.locator('img');
		
		// Проверка, что элемент img существует
		await expect(img).toBeVisible();

	});

	test('ТС 01.1.5 Verify that the user is redirected to the homepage after clicking on the store logo from another page', async ({ page }) => {
		const homePage = new HomePage(page);

		for (let i = 0; i < LINKS_LIST.length; i++) {
			let link = LINKS_LIST[i];
			await page.goto(link);
			await homePage.clickLogo();
			await expect(page).toHaveURL(BASE_URL);
		 }

	});

	test('ТС 01.1.6 Verify that the store logo is located from the left in all pages of site', async ({ page }) => {
		
		const logo = new Logo(page);
		const allLinksWithLogo = NAVBAR_URLs_END_POINTS;
		allLinksWithLogo.push(MY_ACCOUNT_CREATE_END_POINT);

		for(let link of allLinksWithLogo){
		const storeLogo = await logo.locators.getLogo(link);

		await expect(storeLogo).toBeVisible();
		await expect(storeLogo).toHaveCSS('float', LOGO_ALIGNMENT);
		}

	});

	test('ТС 01.1.7 Verify the the header of the site contains the "Sign In" link', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSignInlink()).toBeVisible();
		await expect(homePage.locators.getSignInlink()).toHaveText(SIGN_IN_LINK_TEXT);

	});

	test('ТС 01.1.8 Verify the the "Sign In" link has a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSignInlink()).toBeVisible();
		await expect(homePage.locators.getSignInlink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.9 Verify that the user is redirected to the "Customer Login" page after clicking on the "Sign In" link', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const customerLoginPage = await homePage.clickSignInlink();

		await expect(page).toHaveURL(CUSTOMER_LOGIN_PAGE_URL);
		await expect(customerLoginPage.locators.getHeader()).toBeVisible();
		await expect(customerLoginPage.locators.getHeader()).toHaveText(CUSTOMER_LOGIN_PAGE_HEADER_TEXT);

	});

	test('ТС 01.1.10 Verify that "Sign In" link is located on every page of the website', async ({ page }) => {

		const signIn = new SignIn(page);
		const allLinksWithSignIn = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithSignIn){
		const signInLink = await signIn.locators.getSignIn(link);

		await expect(signInLink).toBeVisible();
		}

	});

	test('ТС 01.1.11 Verify the the header of the site contains the "Create an Account" link', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCreateAnAccountlink()).toBeVisible();
		await expect(homePage.locators.getCreateAnAccountlink()).toHaveText(CREATE_AN_ACCOUNT_LINK_TEXT);

	});

	test('ТС 01.1.12 Verify the the "Create an Account" link has a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCreateAnAccountlink()).toBeVisible();
		await expect(homePage.locators.getCreateAnAccountlink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.13 Verify that the user is redirected to the "Create New Customer Account" page after clicking on the "Create an Account" link', async ({ page }) => {

		const homePage = new HomePage(page);
		await expect(page).toHaveURL(BASE_URL);

		const createNewCustomerAccountPage = await homePage.clickCreateAnAccountlink();

		await expect(page).toHaveURL(CREATE_NEW_CUSTOMER_ACCOUNT_PAGE_URL);
		await expect(createNewCustomerAccountPage.locators.getHeader()).toBeVisible();
		await expect(createNewCustomerAccountPage.locators.getHeader()).toHaveText(CREATE__NEW_CUSTOMER_ACCOUNT_PAGE_HEADER_TEXT);

	});

	test('ТС 01.1.14 Verify that the "Create an Account" link is located on every page of the website', async ({ page }) => {

		const createAccount = new CreateAccount(page);
		const allLinksWithCreateAccount = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithCreateAccount){
		const allLinksWithCreateAccountLink = await createAccount.locators.getCreateAccount(link);

		await expect(allLinksWithCreateAccountLink).toBeVisible();
		}

	});

	test('ТС 01.1.15 Verify the the header of the site contains the search field', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchField()).toBeVisible();

	});

	test('ТС 01.1.16 Verify the the search field contains the "Search entire store here..." placeholder', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchField()).toBeVisible();
		await expect(homePage.locators.getSearchField()).toHaveAttribute('placeholder', SEARCH_FIELD_PLACEHOLDER_TEXT)

	});

	test('ТС 01.1.17 Verify the search field contains the search button (magnifier)', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchBtn()).toBeVisible();

	});

	test('ТС 01.1.18 Verify that the search button (magnifier) is inactive by default', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchBtn()).toBeVisible();
		await expect(homePage.locators.getSearchBtn()).toHaveAttribute('disabled');
	});

	test('ТС 01.1.19 Verify that the search button (magnifier) is active only after entering one or more letters in the search field', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchBtn()).toBeVisible();
		await expect(homePage.locators.getSearchBtn()).toHaveAttribute('disabled');

		await homePage.fillSearchField();

		await expect(homePage.locators.getSearchBtn()).not.toHaveAttribute("disabled");
	});

	test('ТС 01.1.20 Verify the the search button (magnifier) has a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchField();

		await expect(homePage.locators.getSearchBtn()).toBeVisible();
		await expect(homePage.locators.getSearchBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 01.1.21 Verify the search button (magnifier) is inactive after the search field is cleared', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchField();

		await expect(homePage.locators.getSearchBtn()).not.toHaveAttribute("disabled");

		await homePage.cleanSearchField();

		await expect(homePage.locators.getSearchBtn()).toHaveAttribute("disabled");

	});

	test('ТС 01.1.22 Verify that the search field has a different highlight color and border appearance after clicking on it', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchField()).toBeVisible();

		await homePage.clickSearchField();

		await expect(homePage.locators.getSearchField()).toBeVisible();
		await expect(homePage.locators.getSearchField()).toHaveCSS('box-shadow', 'rgb(0, 105, 157) 0px 0px 3px 1px');

	});

	test('ТС 01.1.23 Verify that the automatic search results match the query in the search bar after clicking on the search button (magnifier)', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		const searchResultPageWithResults = await homePage.clickSearchBtn();

		// Отримання списку пов'язаних пошукових термінів на сторінці результатів пошуку
		const alex = await searchResultPageWithResults.locators.getRelatedSearchTerms();

		// Створення об'єкта регулярного виразу для пошуку тексту SEARCH_ITEM
		const regex = new RegExp(SEARCH_ITEM, 'i'); // Флаг i в регулярному виразі вказує на регістронезалежний пошук

		// Перевірка, чи міститься хоча б один елемент зі списку автодоповнення текст SEARCH_ITEM за допомогою регулярного виразу
		const isMatchingItem = AUTOCOMPLETELIST.some(item => regex.test(item));

		 // Перевірка, що знайдено хоча б один елемент, який відповідає тексту пошуку
		expect(isMatchingItem).toBeTruthy();

		await expect(searchResultPageWithResults.locators.getSearchResult()).toBeVisible();
		await expect(searchResultPageWithResults.locators.getSearchResult()).toContainText(SEARCH_ITEM);

	});

	test('ТС 01.1.24 Verify that the automatic search results match the query in the search bar after pressing Enter in the search field', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		const searchResultPageWithResults = await homePage.pressSearchField();

		const regex = new RegExp(SEARCH_ITEM, 'i'); 

		const isMatchingItem = AUTOCOMPLETELIST.some(item => regex.test(item));

		expect(isMatchingItem).toBeTruthy();

		await expect(searchResultPageWithResults.locators.getSearchResult()).toBeVisible();
		await expect(searchResultPageWithResults.locators.getSearchResult()).toContainText(SEARCH_ITEM);

	});

	test('ТС 01.1.25 Verify that the user receives "Your search returned no results" if no results are found', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchFieldSmth(SEARCH_ITEM_NEGATIVE);

		const searchResultPageWithResults = await homePage.clickSearchBtn();

		await expect(searchResultPageWithResults.locators.getSearchResultNegative()).toBeVisible();
		await expect(searchResultPageWithResults.locators.getNoResultsMessage()).toBeVisible();
		await expect(searchResultPageWithResults.locators.getNoResultsMessage()).toHaveText(NO_RESULTS_MESSAGE_TEXT);

	});

	test('ТС 01.1.26 Verify that an automatic search begins and the dropdown with relevant products appears after entering three letters in the search field', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		await expect(homePage.locators.getDropdownSearch()).toHaveCount(8);

		// Отримання всіх елементів випадаючого списку
		const dropdownItems = await homePage.locators.getDropdownSearch().all();

		// Перевірка, що кожен елемент містить слово 'short'
		for (const item of dropdownItems) {

			const textContent = await item.textContent();

			//trim() для видалення пробілів з початку і кінця рядка та toLowerCase() для перетворення тексту до нижнього регістру перед перевіркою.
			expect(textContent.trim().toLowerCase()).toContain('short'); 
		}
			
	});

	test('ТС 01.1.27 Verify that the user is redirected to the search results page after clicking a product name in the drop-down list, and the search results match the query entered in the search bar', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		await expect(homePage.locators.getDropdownItem()).toBeVisible();

		const searchResultPageWithResults = await homePage.clickDropdownItem();

		await page.waitForLoadState('networkidle');

		await expect(page).toHaveURL(/search/);

		const regex = new RegExp(SEARCH_ITEM, 'i'); 

		const isMatchingItem = AUTOCOMPLETELIST.some(item => regex.test(item));

		expect(isMatchingItem).toBeTruthy();

		await expect(searchResultPageWithResults.locators.getSearchResultShort()).toBeVisible();
		await expect(searchResultPageWithResults.locators.getSearchResultShort()).toContainText(SEARCH_ITEM);

	});

	test('ТС 01.1.28 Verify that the search field placeholder disappears after entering text in the field', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getSearchField()).toBeVisible();

		await homePage.fillSearchFieldSmth(SEARCH_ITEM);

		await expect(homePage.locators.getSearchField()).toBeVisible();

	});

	test('ТС 01.1.29 Verify the search field is not case-sensitive', async ({ page }) => {
		const homePage = new HomePage(page);

		const searchItemUpperCase = "SHORT";
		const searchItemLowerCase = searchItemUpperCase.toLowerCase();
  
		await homePage.fillSearchFieldSmth(searchItemUpperCase);
		await page.waitForSelector("#search_autocomplete>ul>li>span:first-child");
		const autocompleteListUpperCase = await page.locator("#search_autocomplete>ul>li>span:first-child").allInnerTexts();
  
		await homePage.cleanSearchField();
  
		await homePage.fillSearchFieldSmth(searchItemLowerCase);
		await page.waitForSelector("#search_autocomplete>ul>li>span:first-child");
		const autocompleteListLowerCase = await page.locator("#search_autocomplete>ul>li>span:first-child").allInnerTexts();
  
		//Ця перевірка порівнює два масиви autocompleteListUpperCase та autocompleteListLowerCase. Метод .sort() використовується для сортування масивів, щоб вони були в одному і тому ж порядку елементів перед порівнянням. Після цього масиви порівнюються за допомогою .toEqual(), що перевіряє, чи мають обидва масиви однаковий вміст і порядок елементів.
		expect(autocompleteListUpperCase.sort()).toEqual(autocompleteListLowerCase.sort());

		//Ця перевірка порівнює довжину двох масивів autocompleteListLowerCase та autocompleteListUpperCase. Вона переконується, що обидва масиви мають однакову кількість елементів. Це важливо для того, щоб переконатись, що ні один з масивів не містить додаткових елементів, які можуть вплинути на порівняння.
		expect(autocompleteListLowerCase.length).toEqual(autocompleteListUpperCase.length);

	});

	test('ТС 01.1.30 Verify that the search field  available on all pages of the site', async ({ page }) => {

		const search = new SearchField(page);
		const allLinksWithSearchField = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithSearchField){

		const searchField = await search.locators.getSearchField(link);

		await expect(searchField).toBeVisible();
		}

	});

	test('ТС 01.1.31 Verify the the header of the site contains the shopping cart icon', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCartBtn()).toBeVisible();

	});

	test('ТС 01.1.32 Verify the the shopping cart icon has a cursor pointer', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getCartBtn()).toBeVisible();
		await expect(homePage.locators.getCartBtn()).toHaveCSS('cursor', 'pointer');

	});

})

