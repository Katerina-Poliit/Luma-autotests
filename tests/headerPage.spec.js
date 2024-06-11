import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import { LINKS_LIST, BASE_URL,NAVBAR_URLs_END_POINTS, MY_ACCOUNT_CREATE_END_POINT, LOGO_ALIGNMENT, SIGN_IN_LINK_TEXT, CUSTOMER_LOGIN_PAGE_URL, CUSTOMER_LOGIN_PAGE_HEADER_TEXT, NAVBAR_URLs_END_POINTS_FULL} from "../helpers/testDataHeaderPage";
import Logo from "../page_objects/logo";
import SignIn from "../page_objects/SignIn";


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
		const homePage = new HomePage(page);

		const signIn = new SignIn(page);
		const allLinksWithSignIn = NAVBAR_URLs_END_POINTS_FULL;

		for(let link of allLinksWithSignIn){
		const signInLink = await signIn.locators.getSignIn(link);

		await expect(signInLink).toBeVisible();
		}

	});

})

