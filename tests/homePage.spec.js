import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import WomenTopsPage from "../page_objects/womenTopsPage";

import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_PAGE_HEADER_TEXT, MEN_PAGE_HEADER_TEXT, GEAR_PAGE_HEADER_TEXT, TRAINING_PAGE_HEADER_TEXT, SALE_PAGE_HEADER_TEXT, WHATS_NEW_URL, WOMEN_URL, MEN_URL, GEAR_URL, TRAINING_URL, SALE_URL, NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_URL,NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT, SHOP_NEW_YOGA_BTN_TEXT,WOMEN_CATAGORY_TOPS, WOMEN_TOPS_PAGE_URL, WOMEN_TOPS_SUBCATEGORY_JACKETS, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS, WOMEN_TOPS_JACKETS_URL,  WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL, PANTS_URL, PANTS_HEADER_TEXT, OFF_20_SECTION_HEADER_TEXT, OFF_20_SECTION_CTA_TEXT, SHOP_PANTS_LINK_TEXT, HEADING_TOPS_TEXT, HEADING_JACKETS_TEXT, HEADING_HOODIES_TEXT, WOMEN_TOPS_SUBCATEGORY_TEES_TEXT, WOMEN_TOPS_TEES_URL, HEADING_TEES_PAGE_TEXT, WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS, WOMEN_TOPS_BRASSTANKS_URL, HEADING_BRASTANKS_PAGE_TEXT, WOMEN_CATAGORY_BOTTOMS, WOMEN_BOTTOMS_PAGE_URL, HEADING_BOTTOMS_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, WOMEN_BOTTOMS_PANTS_PAGE_URL, HEADING_WOMEN_PANTS_PAGE_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT, WOMEN_SHORTS_PAGE_URL, HEADING_WOMEN_SHORTS_PAGE_TEXT, MEN_DROPDOWN_TEXT, MEN_CATAGORY_TOPS_TEXT } from "../helpers/testDataHomePage";

import WomenTopsSubcategoryJacketsPage from "../page_objects/WomenTopsSubcategoryJacketsPage";
import WomenHoodiesSweatshirtsPage from "../page_objects/WomenHoodiesSweatshirtsPage";

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
	    expect(homePage.locators.getWomenDropdown()).toBeTruthy();

	});

	test('ТС 03.1.119 Verify that the dropdown contains the "Tops" dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await expect(homePage.locators.getMomenCategoryTops()).toHaveText(WOMEN_CATAGORY_TOPS);

	});

	test('ТС 03.1.120 Verify that the "Tops" dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await expect(homePage.locators.getMomenCategoryTops()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.121 Verify that the "Tops" dropdown redirects to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		const womenTopsPage = await homePage.clickMomenCategoryTops();
		await expect(page).toHaveURL(WOMEN_TOPS_PAGE_URL);
		await expect(womenTopsPage.locators.getHeadingPage()).toBeVisible();
		await expect(womenTopsPage.locators.getHeadingPage()).toHaveText(HEADING_TOPS_TEXT);

	});

	test('ТС 03.1.122 Verify that the "Tops" dropdown contains the "Jackets" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
		await expect(homePage.locators.getWomenTopsSubcategoryJackets()).toBeVisible();
		await expect(homePage.locators.getWomenTopsSubcategoryJackets()).toHaveText(WOMEN_TOPS_SUBCATEGORY_JACKETS)

	});

	test('ТС 03.1.123 Verify that the "Jackets" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
		await expect(homePage.locators.getWomenTopsSubcategoryJackets()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.123.1 Verify that the subcategory "Jackets" redirects to the appropriate page ', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
		const womenJacketsPage = await homePage.clickWomenTopsSubcategoryJackets();
		await expect(page).toHaveURL(WOMEN_TOPS_JACKETS_URL);
		await expect(womenJacketsPage.locators.getHeadingJacketsPage()).toBeVisible();
		await expect(womenJacketsPage.locators.getHeadingJacketsPage()).toHaveText(HEADING_JACKETS_TEXT);

	});

	test('ТС 03.1.124 Verify that the "Tops" dropdown contains the "Hoddies & Sweatshirts" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
		await expect(homePage.locators.getWomenTopsSubcategoryHoodiesSweatshirts()).toBeVisible();
		await expect(homePage.locators.getWomenTopsSubcategoryHoodiesSweatshirts()).toHaveText(WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS);

	});

	test('03.1.125 Verify that the "Hoddies & Sweatshirts" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
		await expect(homePage.locators.getWomenTopsSubcategoryHoodiesSweatshirts()).toHaveCSS('cursor', 'pointer');

	});

	test('03.1.124.1 Verify that the subcategory ""Hoodies & Sweatshirts" redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
		const womenHoodiesSweatshirtsPage = await homePage.clickWomenTopsSubcategoryHoodiesSweatshirts();
		await expect(page).toHaveURL( WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL);
		await expect(womenHoodiesSweatshirtsPage.locators.getHeadingPage()).toBeVisible();
		await expect(womenHoodiesSweatshirtsPage.locators.getHeadingPage()).toHaveText(HEADING_HOODIES_TEXT)

	});

	test('ТС 03.1.32 Verify that the promo block contains "20% OFF" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.get20OFFSection()).toBeVisible();

	});

	test('ТС 03.1.33 Verify that the "20% OFF" promo section has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.get20OFFSection()).toBeVisible();
		await expect(homePage.locators.get20OFFSection()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.34 Verify that the user is redirected to the "Pants" page after clicking on the "20% OFF" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		const pantsPage = await homePage.click20OFFSection();

		await expect(page).toHaveURL(PANTS_URL);
		await expect(pantsPage.locators.getHeader()).toBeVisible();
		await expect(pantsPage.locators.getHeader()).toHaveText(PANTS_HEADER_TEXT);
	});

	test('ТС 03.1.35 Verify that the "20% OFF" promo sections has the information block', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.get20OFFSectionInfBlock()).toBeVisible();

	});

	test('ТС 03.1.36 Verify that the information block has the header', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.get20OFFSectionInfBlockHeader()).toBeVisible();
		await expect(homePage.locators.get20OFFSectionInfBlockHeader()).toHaveText(OFF_20_SECTION_HEADER_TEXT);

	});

	test('ТС 03.1.37 Verify that the information block has the call to action text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.get20OFFSectionInfBlockCTA()).toBeVisible();
		await expect(homePage.locators.get20OFFSectionInfBlockCTA()).toHaveText(OFF_20_SECTION_CTA_TEXT);

	});

	test('ТС 03.1.38 Verify that the information block containes the "Shop pants" link', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopPantsLink()).toBeVisible();
		await expect(homePage.locators.getShopPantsLink()).toHaveText(SHOP_PANTS_LINK_TEXT);

	});

	test('ТС 03.1.39 Verify that the "Shop pants" link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopPantsLink()).toBeVisible();
		await expect(homePage.locators.getShopPantsLink()).toHaveCSS('cursor', 'pointer');
	});

	test('ТС 03.1.40 Verify that the user is redirected to the "Pants" page after clicking on the "Shop pants" link', async ({ page }) => {

		const homePage = new HomePage(page);

		const pantsPage = await homePage.clickShopPantsLink();

		await expect(page).toHaveURL(PANTS_URL);
		await expect(pantsPage.locators.getHeader()).toBeVisible();
		await expect(pantsPage.locators.getHeader()).toHaveText(PANTS_HEADER_TEXT);
	});

	test('ТС 03.1.41 Verify that the promo block contains "Even more ways to mix and match" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getEvenMoreSection()).toBeVisible();

	});

	test('ТС 03.1.42 Verify that the "Even more ways to mix and match" promo section has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getEvenMoreSection()).toBeVisible();
		await expect(homePage.locators.getEvenMoreSection()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.126 Verify that the "Tops" dropdown contains the "Tees" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
	    expect(homePage.locators.getTopsSubcategoryTees()).toBeVisible();
		expect(homePage.locators.getTopsSubcategoryTees()).toHaveText(WOMEN_TOPS_SUBCATEGORY_TEES_TEXT)

	});

	test('ТС 03.1.127 Verify that the "Tees" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
	    expect(homePage.locators.getTopsSubcategoryTees()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.127.1 Verify that the subcategory "Tees" redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
	    const womenTeesPage = await homePage.clickTopsSubcategoryTees();
		await expect(page).toHaveURL(WOMEN_TOPS_TEES_URL);
		await expect(womenTeesPage.locators.getHeadingTessPage()).toBeVisible();
		await expect(womenTeesPage.locators.getHeadingTessPage()).toHaveText(HEADING_TEES_PAGE_TEXT);
	});

	test('ТС 03.1.128 Verify that the "Tops" dropdown contains the "Brass Tanks" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
	    expect(homePage.locators.getTopsSubcategoryBrassTanks()).toBeVisible();
		expect(homePage.locators.getTopsSubcategoryBrassTanks()).toHaveText(WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS)

	});

	test('ТС 03.1.129 Verify that the "Brass Tanks" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
	    expect(homePage.locators.getTopsSubcategoryBrassTanks()).toHaveCSS('cursor', 'pointer');


	});

	test('ТС 03.1.130 Verify that the subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryTops();
	    const womenBrassTanksPage = await homePage.clickTopsSubcategoryBrassTanks();
		await expect(page).toHaveURL(WOMEN_TOPS_BRASSTANKS_URL);
		await expect(womenBrassTanksPage.locators.getHeadingBrassTanksPage()).toHaveText(HEADING_BRASTANKS_PAGE_TEXT);

	});

	test('ТС 03.1.131 Verify that the dropdown contains the "Bottoms" dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
	    expect(homePage.locators.getMomenCategoryBottoms()).toBeVisible();
		expect(homePage.locators.getMomenCategoryBottoms()).toHaveText(WOMEN_CATAGORY_BOTTOMS)

	});

	test('ТС 03.1.132 Verify that the "Bottoms" dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
	    expect(homePage.locators.getMomenCategoryBottoms()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.133 Verify that the "Bottoms" dropdown redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
	    const womenBottomsPage = await homePage.clickMomenCategoryBottoms();
		await expect(page).toHaveURL(WOMEN_BOTTOMS_PAGE_URL);
		await expect(womenBottomsPage.locators.getHeading()).toHaveText(HEADING_BOTTOMS_TEXT);

	});

	test('ТС 03.1.134 Verify that the "Bottoms" dropdown contains the "Pants" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryBottoms()
	    expect(homePage.locators.getWomenSubcategoryPants()).toBeVisible();
		expect(homePage.locators.getWomenSubcategoryPants()).toHaveText(WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT)

	});

	test('ТС 03.1.135 Verify that the "Bottoms" dropdown contains the "Pants" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryBottoms()
	    expect(homePage.locators.getWomenSubcategoryPants()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.135.1 Verify that the "Pants" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryBottoms()
	    const womenPantsPage = await homePage.clickWomenSubcategoryPants();
		await expect(page).toHaveURL(WOMEN_BOTTOMS_PANTS_PAGE_URL);
		await expect(womenPantsPage.locators.getHeading()).toHaveText(HEADING_WOMEN_PANTS_PAGE_TEXT)

	});

	test('ТС 03.1.136 Verify that the "Bottoms" dropdown contains the "Shorts" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryBottoms()
	    expect(homePage.locators.getWomenSubcategoryShorts()).toBeVisible();
		expect(homePage.locators.getWomenSubcategoryShorts()).toHaveText(WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT)

	});

	test('ТС 03.1.137 Verify that the "Shorts" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryBottoms()
	    expect(homePage.locators.getWomenSubcategoryShorts()).toHaveCSS('cursor', 'pointer');


	});

	test('ТС 03.1.138 Verify that the "Shorts" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverWomenLink();
		await homePage.hoverMomenCategoryBottoms();
	    const womenShortsPage = await homePage.clickWomenSubcategoryShorts();
		await expect(page).toHaveURL(WOMEN_SHORTS_PAGE_URL);
		await expect(womenShortsPage.locators.getHeading()).toHaveText(HEADING_WOMEN_SHORTS_PAGE_TEXT)


	});

	test('ТС 03.1.139 Verify that the "Men" navigation menu link contains the dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
	    expect(homePage.locators.getMenDropdown()).toBeVisible();
		expect(homePage.locators.getMenDropdown()).toHaveText(MEN_DROPDOWN_TEXT);

	});

	test('ТС 03.1.140 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
	    expect(homePage.locators.getMenDropdown()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.141 Verify that the "Men" dropdown contains the "Tops" dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage. hoverMenTopsSubcategory();
	    expect(homePage.locators.getMenTopsSubcategory()).toBeVisible();
		expect(homePage.locators.getMenTopsSubcategory()).toHaveText(MEN_CATAGORY_TOPS_TEXT);

	});



})
