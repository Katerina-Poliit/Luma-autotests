import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_PAGE_HEADER_TEXT, MEN_PAGE_HEADER_TEXT, GEAR_PAGE_HEADER_TEXT, TRAINING_PAGE_HEADER_TEXT, SALE_PAGE_HEADER_TEXT, WHATS_NEW_URL, WOMEN_URL, MEN_URL, GEAR_URL, TRAINING_URL, SALE_URL  } from "../helpers/testDataHomePage";

test.describe('homePage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 03.1.1 Verify that user directed to the Home page after entering "Home page" url', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

	});

	test('ТС 03.1.2 Verify that the Home page contains the main content (body) of the page', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getBody()).toBeVisible();

	});

	test('ТС 03.1.3 Verify that the "What\'s New" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getWatsNewLink()).toBeVisible();
		await expect(homePage.locators.getWatsNewLink()).toHaveText(WHATS_NEW_LINK_TEXT);

	});

	test('ТС 03.1.4 Verify that the "Women" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getWomenLink()).toBeVisible();
		await expect(homePage.locators.getWomenLink()).toHaveText(WOMEN_LINK_TEXT);

	});

	test('ТС 03.1.5 Verify that the "Men" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getMenLink()).toBeVisible();
		await expect(homePage.locators.getMenLink()).toHaveText(MEN_LINK_TEXT);

	});

	test('ТС 03.1.6 Verify that the "Gear" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getGearLink()).toBeVisible();
		await expect(homePage.locators.getGearLink()).toHaveText(GEAR_LINK_TEXT);

	});

	test('ТС 03.1.7 Verify that the "Training" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getTrainingLink()).toBeVisible();
		await expect(homePage.locators.getTrainingLink()).toHaveText(TRAINING_LINK_TEXT);

	});

	test('ТС 03.1.8 Verify that the "Sale" navigation menu link is displayed and contains the appropriate text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getSaleLink()).toBeVisible();
		await expect(homePage.locators.getSaleLink()).toHaveText(SALE_LINK_TEXT);

	});

	test('ТС 03.1.9 Verify that the "What\'s New" navigation menu link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getWatsNewLink()).toBeVisible();
		await expect(homePage.locators.getWatsNewLink()).toHaveCSS('cursor', 'pointer');
	  
	});

	test('ТС 03.1.10 Verify that the "Women" navigation menu link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getWomenLink()).toBeVisible();
		await expect(homePage.locators.getWomenLink()).toHaveCSS('cursor', 'pointer');
	  
	});

	test('ТС 03.1.11 Verify that the "Men" navigation menu link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getMenLink()).toBeVisible();
		await expect(homePage.locators.getMenLink()).toHaveCSS('cursor', 'pointer');
	  
	});

	test('ТС 03.1.12 Verify that the "Gear" navigation menu link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getGearLink()).toBeVisible();
		await expect(homePage.locators.getGearLink()).toHaveCSS('cursor', 'pointer');
	  
	});

	test('ТС 03.1.13 Verify that the "Training" navigation menu link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getTrainingLink()).toBeVisible();
		await expect(homePage.locators.getTrainingLink()).toHaveCSS('cursor', 'pointer');
	  
	});

	test('ТС 03.1.14 Verify that the "Sale" navigation menu link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getSaleLink()).toBeVisible();
		await expect(homePage.locators.getSaleLink()).toHaveCSS('cursor', 'pointer');
	  
	});

	test('ТС 03.1.15 Verify that the "What\'s New" navigation menu link redirects to corresponding page', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const whatsNewPage = await homePage.clickWatsNewLink();

		await expect(page).toHaveURL(WHATS_NEW_URL);
	  
		await expect(whatsNewPage.locators.getHeader()).toBeVisible();
		await expect(whatsNewPage.locators.getHeader()).toHaveText(WHATS_NEW_PAGE_HEADER_TEXT);

	
	});

})
