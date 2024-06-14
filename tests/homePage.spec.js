import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_PAGE_HEADER_TEXT, MEN_PAGE_HEADER_TEXT, GEAR_PAGE_HEADER_TEXT, TRAINING_PAGE_HEADER_TEXT, SALE_PAGE_HEADER_TEXT, WHATS_NEW_URL, WOMEN_URL, MEN_URL, GEAR_URL, TRAINING_URL, SALE_URL, NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_URL,NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT, SHOP_NEW_YOGA_BTN_TEXT,WOMEN_CATAGORY_TOPS } from "../helpers/testDataHomePage";

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

	test('ТС 03.1.16 Verify that the "Women" navigation menu link redirects to corresponding page', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const womenPage = await homePage.clickWomenLink();

		await expect(page).toHaveURL(WOMEN_URL);

		await expect(womenPage.locators.getHeader()).toBeVisible();
		await expect(womenPage.locators.getHeader()).toHaveText(WOMEN_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.17 Verify that the Men" navigation menu link redirects to corresponding page', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const menPage = await homePage.clickMenLink()

		await expect(page).toHaveURL(MEN_URL);

		await expect(menPage.locators.getHeader()).toBeVisible();
		await expect(menPage.locators.getHeader()).toHaveText(MEN_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.18 Verify that the "Gear" navigation menu link redirects to corresponding page', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const gearPage = await homePage.clickGearLink();

		await expect(page).toHaveURL(GEAR_URL);

		await expect(gearPage.locators.getHeader()).toBeVisible();
		await expect(gearPage.locators.getHeader()).toHaveText(GEAR_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.19 Verify that the "Training" navigation menu link redirects to corresponding page', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const trainingPage = await homePage.clickTrainingLink();

		await expect(page).toHaveURL(TRAINING_URL);

		await expect(trainingPage.locators.getHeader()).toBeVisible();
		await expect(trainingPage.locators.getHeader()).toHaveText(TRAINING_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.20 Verify that the "Sale" navigation menu link redirects to corresponding page', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

		const salePage = await homePage.clickSaleLink();

		await expect(page).toHaveURL(SALE_URL);

		await expect(salePage.locators.getHeader()).toBeVisible();
		await expect(salePage.locators.getHeader()).toHaveText(SALE_PAGE_HEADER_TEXT);

	});

	test('ТС 03.1.21 Verify that the Home page contains the promo block', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getPromoBlock()).toBeVisible();

	});

	test('ТС 03.1.22 Verify that the promo block contains "New Luma Yoga Collection" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getLumaYogaCollectionSection()).toBeVisible();

	});

	test('ТС 03.1.23 Verify that the "New Luma Yoga Collection" promo section has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getLumaYogaCollectionSection()).toBeVisible();
		await expect(homePage.locators.getLumaYogaCollectionSection()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.24 Verify that the user is redirected to the "New Luma Yoga Collection" page after clicking on the "New Luma Yoga Collection" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		const newLumaYogaCollectionSectionPage = await homePage.clickNewLumaYogaCollectionSection();

		await expect(page).toHaveURL(NEW_LUMA_YOGA_COLLECTION_URL);

		await expect(newLumaYogaCollectionSectionPage.locators.getHeader()).toBeVisible();
		await expect(newLumaYogaCollectionSectionPage.locators.getHeader()).toHaveText(NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT);

	});

	test('ТС 03.1.25 Verify that the "New Luma Yoga Collection" promo sections has the information block', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getLumaYogaCollectionSectionInfBlock()).toBeVisible();

	});

	test('ТС 03.1.26 Verify that the information block has the header', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getLumaYogaCollectionSectionInfBlockHeader()).toBeVisible();
		await expect(homePage.locators.getLumaYogaCollectionSectionInfBlockHeader()).toHaveText(NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT);

	});

	test('ТС 03.1.27 Verify that the information block has the call to action text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getLumaYogaCollectionSectionInfBlockCTA()).toBeVisible();
		await expect(homePage.locators.getLumaYogaCollectionSectionInfBlockCTA()).toHaveText(NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT);

	});

	test('ТС 03.1.28 Verify that the information block containes the "Shop New Yoga" button', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopNewYogaBtn()).toBeVisible();
		await expect(homePage.locators.getShopNewYogaBtn()).toHaveText(SHOP_NEW_YOGA_BTN_TEXT);

	});

	test('ТС 03.1.29 Verify that the "Shop New Yoga" button has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopNewYogaBtn()).toBeVisible();
		await expect(homePage.locators.getShopNewYogaBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.30 Verify that the "Shop New Yoga" button is colored blue', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopNewYogaBtn()).toBeVisible();
		await expect(homePage.locators.getShopNewYogaBtn()).toHaveCSS('background', 'rgb(25, 121, 195) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС 03.1.31 Verify that the user is redirected to the "New Luma Yoga Collection" page after clicking on the "Shop New Yoga" button', async ({ page }) => {

		const homePage = new HomePage(page);

		const newLumaYogaCollectionSectionPage = await homePage.clickNewLumaYogaCollectionSection();

		await expect(page).toHaveURL(NEW_LUMA_YOGA_COLLECTION_URL);

		await expect(newLumaYogaCollectionSectionPage.locators.getHeader()).toBeVisible();
		await expect(newLumaYogaCollectionSectionPage.locators.getHeader()).toHaveText(NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT);

	});

	test('ТС 03.1.117 Verify that the "Women" navigation menu link contains the dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await expect(homePage.locators.getWomenDropdown()).toBeTruthy();


	});

	test('ТС 03.1.119 Verify that the dropdown contains the "Tops" dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await expect(homePage.locators.getMomenCategoryTops()).toHaveText(WOMEN_CATAGORY_TOPS);


	});


})
