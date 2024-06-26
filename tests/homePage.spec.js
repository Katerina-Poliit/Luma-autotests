import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import WomenTopsPage from "../page_objects/womenTopsPage";

import { BASE_URL, WHATS_NEW_LINK_TEXT, WOMEN_LINK_TEXT, MEN_LINK_TEXT, GEAR_LINK_TEXT, TRAINING_LINK_TEXT, SALE_LINK_TEXT, WHATS_NEW_PAGE_HEADER_TEXT, WOMEN_PAGE_HEADER_TEXT, MEN_PAGE_HEADER_TEXT, GEAR_PAGE_HEADER_TEXT, TRAINING_PAGE_HEADER_TEXT, SALE_PAGE_HEADER_TEXT, WHATS_NEW_URL, WOMEN_URL, MEN_URL, GEAR_URL, TRAINING_URL, SALE_URL, NEW_LUMA_YOGA_COLLECTION_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_URL,NEW_LUMA_YOGA_COLLECTION_IB_HEADER_TEXT, NEW_LUMA_YOGA_COLLECTION_IB_CTA_TEXT, SHOP_NEW_YOGA_BTN_TEXT,WOMEN_CATAGORY_TOPS, WOMEN_TOPS_PAGE_URL, WOMEN_TOPS_SUBCATEGORY_JACKETS, WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS, WOMEN_TOPS_JACKETS_URL,  WOMEN_TOPS_SUBCATEGORY_HOODIESSWEATSHIRTS_URL, PANTS_URL, PANTS_HEADER_TEXT, OFF_20_SECTION_HEADER_TEXT, OFF_20_SECTION_CTA_TEXT, SHOP_PANTS_LINK_TEXT, HEADING_TOPS_TEXT, HEADING_JACKETS_TEXT, HEADING_HOODIES_TEXT, WOMEN_TOPS_SUBCATEGORY_TEES_TEXT, WOMEN_TOPS_TEES_URL, HEADING_TEES_PAGE_TEXT, WOMEN_TOPS_SUBCATEGORY_BRAS_TANKS, WOMEN_TOPS_BRASSTANKS_URL, HEADING_BRASTANKS_PAGE_TEXT, WOMEN_CATAGORY_BOTTOMS, WOMEN_BOTTOMS_PAGE_URL, HEADING_BOTTOMS_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, WOMEN_BOTTOMS_PANTS_PAGE_URL, HEADING_WOMEN_PANTS_PAGE_TEXT, WOMEN_BOTTOMS_SUBCATEGORY_SHORTS_TEXT, WOMEN_SHORTS_PAGE_URL, HEADING_WOMEN_SHORTS_PAGE_TEXT, MEN_DROPDOWN_TEXT, MEN_CATAGORY_TOPS_TEXT, MEN_TOPS_PAGE_URL, HEADING_MEN_TOPS_PAGE_TEXT, MEN_TOPS_SUBCATEGORY_JACKETS, MEN_TOPS_JACKETS_URL, MEN_TOPS_HOODIESSWEATSHIRTS_TEXT, MEN_HOODIESSWEATSHIRTS_URL, MEN_TOPS_TEES_TEXT, TEES_URL, TEES_HEADER_TEXT, EVEN_MORE_SECTION_HEADER_TEXT, EVEN_MORE_SECTION_CTA_TEXT, SHOP_TEES_LINK_TEXT, MEN_TOPS_TESS_PAGE_URL, MEN_TOPS_SUBCATEGORY_TANKS_TEXT, MEN_TOPS_TANKS_PAGE_URL, HEADING_MEN_TANKS_PAGE_TEXT,  MEN_CATAGORY_BOTTOMS, MEN_BOTTOMS_PAGE_URL,MEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT, MEN_BOTTOMS_PANTS_PAGE_URL, HEADING_MEN_BOTTOMS_PANTS_TEXT, MEN_SHORTS_PAGE_URL, HEADING_MEN_SHORTS_PAGE_TEXT, GEAR_BAGS_PAGE_URL, HEADING_GEAR_BAGS_PAGE_TEXT, GEAR_FITNESS_PAGE_URL, GEAR_WATCHES_PAGE_URL, TRAINING_VIDEO_DOWNLOAD_PAGE_URL  } from "../helpers/testDataHomePage";


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

	test('ТС 03.1.143 Verify that the "Tops" dropdown redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage. hoverMenTopsSubcategory();
	    const menTopsPage = await homePage.clickMenTopsSubcategory();
		await expect(page).toHaveURL(MEN_TOPS_PAGE_URL);
		await expect(menTopsPage.locators.getHeader()).toHaveText(HEADING_MEN_TOPS_PAGE_TEXT);

	});

	test('ТС 03.1.142 Verify that the "Tops" dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage. hoverMenTopsSubcategory();
	    expect(homePage.locators.getMenTopsSubcategory()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.144 Verify that the "Tops" dropdown contains the subcategory "jackets"', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
	    expect(homePage.locators.getMenTopsJackets()).toBeVisible();
		expect(homePage.locators.getMenTopsJackets()).toHaveText(MEN_TOPS_SUBCATEGORY_JACKETS);

	});

	test('ТС 03.1.145 Verify that the "Jackets" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
	   expect(homePage.locators.getMenTopsJackets()).toHaveCSS('cursor', 'pointer');


	});

	test('ТС 03.1.146 Verify that the "Jackets" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
	   const menJacktsPage = await homePage.clickMenTopsJackets();
		await expect(page).toHaveURL(MEN_TOPS_JACKETS_URL);
		await expect(menJacktsPage.locators.getHeader()).toHaveText(HEADING_JACKETS_TEXT);

	});

	test('ТС 03.1.146 Verify that the "Tops" dropdown contains the "Hoddies & Sweatshirts" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
	   expect(homePage.locators.getMenTopsHoodiesSweatshirts()).toBeVisible();
		expect(homePage.locators.getMenTopsHoodiesSweatshirts()).toHaveText(MEN_TOPS_HOODIESSWEATSHIRTS_TEXT);

	});

	test('ТС 03.1.147 Verify that the "Hoddies & Sweatshirts" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		await homePage.hovertMenTopsHoodiesSweatshirts()
	   expect(homePage.locators.getMenTopsHoodiesSweatshirts()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.147.1 Verify that the "Hoddies & Sweatshirts" dropdown redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		const menHoddiesSweatshirtsPage = await homePage.clickMenTopsHoodiesSweatshirts();
		await expect(page).toHaveURL(MEN_HOODIESSWEATSHIRTS_URL);
		await expect(menHoddiesSweatshirtsPage.locators.getHeader()).toHaveText(HEADING_HOODIES_TEXT);

	});

	test('ТС 03.1.148 Verify that the "Tops" dropdown contains the "Tees" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
	   expect(homePage.locators.getMenTopsTees()).toBeVisible();
		expect(homePage.locators.getMenTopsTees()).toHaveText(MEN_TOPS_TEES_TEXT);

	});

	test('ТС 03.1.43 Verify that the user is redirected to the "Tees" page after clicking on the "Even more ways to mix and match" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		const teesPage = await homePage.clickEvenMoreSection();

		await expect(page).toHaveURL(TEES_URL);
		await expect(teesPage.locators.getHeader()).toBeVisible();
		await expect(teesPage.locators.getHeader()).toHaveText(TEES_HEADER_TEXT);

	});

	test('ТС 03.1.44 Verify that the "Even more ways to mix and match" promo sections has the information block', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getEvenMoreSectionInfBlock()).toBeVisible();

	});

	test('ТС 03.1.45 Verify that the information block has the header', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getEvenMoreSectionInfBlockHeader()).toBeVisible();
		await expect(homePage.locators.getEvenMoreSectionInfBlockHeader()).toHaveText(EVEN_MORE_SECTION_HEADER_TEXT);

	});

	test('ТС 03.1.46 Verify that the information block has the call to action text', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getEvenMoreSectionInfBlockCTA()).toBeVisible();
		await expect(homePage.locators.getEvenMoreSectionInfBlockCTA()).toHaveText(EVEN_MORE_SECTION_CTA_TEXT);

	});

	test('ТС 03.1.47 Verify that the information block containes the "Shop Tees" link', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopTeesLink()).toBeVisible();
		await expect(homePage.locators.getShopTeesLink()).toHaveText(SHOP_TEES_LINK_TEXT);

	});

	test('ТС 03.1.48 Verify that the "Shop Tees" link has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getShopTeesLink()).toBeVisible();
		await expect(homePage.locators.getShopTeesLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.49 Verify that the user is redirected to the "Tees" page after clicking on the "Shop Tees" link', async ({ page }) => {

		const homePage = new HomePage(page);

		const teesPage = await homePage.clickShopTeesLink();

		await expect(page).toHaveURL(TEES_URL);
		await expect(teesPage.locators.getHeader()).toBeVisible();
		await expect(teesPage.locators.getHeader()).toHaveText(TEES_HEADER_TEXT);

	});

	test('ТС 03.1.50 Verify that the promo block contains "Take it from Erin" promo section', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getTakeItFromErinSection()).toBeVisible();

	});

	test('ТС 03.1.51 Verify that the "Take it from Erin" promo section has a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await expect(homePage.locators.getTakeItFromErinSection()).toBeVisible();
		await expect(homePage.locators.getTakeItFromErinSection()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.149 Verify that the "Tees" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		await homePage.hoverMenTopsTees()
	    expect(homePage.locators.getMenTopsTees()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.149.1 Verify that the "Tees" dropdown redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		const menTopsTeesPage = await homePage.clickMenTopsTees();
		await expect(page).toHaveURL(MEN_TOPS_TESS_PAGE_URL);
		await expect(menTopsTeesPage.locators.getHeader()).toHaveText(HEADING_TEES_PAGE_TEXT);


	});

	test('ТС 03.1.150 Verify that the "Tops" dropdown contains the "Brass Tanks" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		await homePage.hoverMenTopsTanks();
		expect(homePage.locators.getMenTopsTanks()).toBeVisible();
		expect(homePage.locators.getMenTopsTanks()).toHaveText(MEN_TOPS_SUBCATEGORY_TANKS_TEXT);

	});

	test('ТС 03.1.151 Verify that the "Tops" dropdown contains the "Brass Tanks" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		await homePage.hoverMenTopsTanks();
        expect(homePage.locators.getMenTopsTanks()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.152 Verify that the " Tanks" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenTopsSubcategory();
		const menTopsTanksPage = await homePage.clickMenTopsTanks();
		await expect(page).toHaveURL(MEN_TOPS_TANKS_PAGE_URL)
        expect(menTopsTanksPage.locators.getHeader()).toHaveText(HEADING_MEN_TANKS_PAGE_TEXT);

	});

	test('ТС 03.1.153 Verify that the dropdown contains the "Bottoms" dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		expect(homePage.locators.getMenCategoryBottoms()).toBeVisible();
		expect(homePage.locators.getMenCategoryBottoms()).toHaveText( MEN_CATAGORY_BOTTOMS);

	});

	test('ТС 03.1.154 Verify that the "Bottoms" dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		expect(homePage.locators.getMenCategoryBottoms()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.155 Verify that the "Bottoms" dropdown redirects to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		const menBottomsPage = await homePage.clickMenCategoryBottoms();
		await expect(page).toHaveURL(MEN_BOTTOMS_PAGE_URL);
		await expect(menBottomsPage.locators.getHeader()).toHaveText(HEADING_BOTTOMS_TEXT);

	});

	test('ТС 03.1.156 Verify that the "Bottoms" dropdown contains the "Pants" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		await homePage.hoverMenBottomsPants();
		expect(homePage.locators.getMenBottomsPants()).toBeVisible();
		expect(homePage.locators.getMenBottomsPants()).toHaveText(MEN_BOTTOMS_SUBCATEGORY_PANTS_TEXT);

	});

	test('ТС 03.1.157 Verify that the "Pants" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		await homePage.hoverMenBottomsPants();
		expect(homePage.locators.getMenBottomsPants()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.157.1 Verify that the " Pants" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		const menBottomsPage = await homePage.clickMenBottomsPants();
		await expect(page).toHaveURL(MEN_BOTTOMS_PANTS_PAGE_URL);
		await expect(menBottomsPage.locators.getHeader()).toHaveText(HEADING_MEN_BOTTOMS_PANTS_TEXT)

	});

	test('ТС 03.1.158 Verify that the "Bottoms" dropdown contains the "Shorts" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		await homePage.hoverMenBottomsShorts();
		expect(homePage.locators.getMenBottomsShorts()).toBeVisible();


	});

	test('ТС 03.1.159 Verify that the "Shorts" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		await homePage.hoverMenBottomsShorts();
		expect(homePage.locators.getMenBottomsShorts()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.160 Verify that the  "Shorts" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverMenDropdown();
		await homePage.hoverMenCategoryBottoms();
		const menBottomsShortsPage = await homePage.clickMenBottomsShorts();
		await expect(page).toHaveURL(MEN_SHORTS_PAGE_URL);
		await expect(menBottomsShortsPage.locators.getHeader()).toHaveText(HEADING_MEN_SHORTS_PAGE_TEXT)

	});

	test('ТС 03.1.161 Verify that the "Gear" navigation menu link contains the dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		expect(homePage.locators.getGearLink()).toBeVisible();

	});

	test('ТС 03.1.162 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		expect(homePage.locators.getGearLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.163 Verify that the dropdown contains the "Bags" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		await homePage.hoverGearBags()
		expect(homePage.locators.getGearBags()).toBeVisible();

	});

	test('ТС 03.1.164 Verify that the dropdown contains the "Bags" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		await homePage.hoverGearBags()
		expect(homePage.locators.getGearBags()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.165 Verify that the "Bags" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		const gearBagsPage = await homePage.clickGearBags();
		await expect(page).toHaveURL(GEAR_BAGS_PAGE_URL);
		await expect(gearBagsPage.locators.getHeader()).toHaveText(HEADING_GEAR_BAGS_PAGE_TEXT);

	});

	test('ТС 03.1.166 Verify that the dropdown contains the "Fitness Equipment" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		await homePage.hoverGearFitnessEquipment();
		await expect(homePage.locators.getGearFitnessEquipment()).toBeVisible();


	});

	test('ТС 03.1.167 Verify that the "Fitness Equipment" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		await homePage.hoverGearFitnessEquipment();
		await expect(homePage.locators.getGearFitnessEquipment()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.168 Verify that the "Fitness Equipment" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		const gearFitnessEquipmentPage = await homePage.clickGearFitnessEquipment();
		await expect(page).toHaveURL(GEAR_FITNESS_PAGE_URL);
		await expect(gearFitnessEquipmentPage.locators.getHeader()).toBeVisible();

	});

	test('ТС 03.1.169 Verify that the dropdown contains the "Watches" subcategory', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		await homePage.hoverGearWatches();
		await expect(homePage.locators.getGearWatches()).toBeVisible();

	});

	test('ТС 03.1.170 Verify that the "Watches" subcategory contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		await homePage.hoverGearWatches();
		await expect(homePage.locators.getGearWatches()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.171 Verify that the "Watches" subcategories are redirected to the appropriate pages', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverGearLink();
		const gearWatchesPage = await homePage.clickGearWatches();
		await expect(page).toHaveURL(GEAR_WATCHES_PAGE_URL);
		// await expect(gearWatchesPage.getHeader()).toBeVisible();
		const header = await gearWatchesPage.getHeader();
        await expect(header).toBeVisible();

	});

	test('ТС 03.1.172 Verify that the "Training" navigation menu link contains the dropdown', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverTrainingLink();
		await homePage.hovertrainingVideoDownloading();
		await expect(homePage.locators.trainingVideoDownloading()).toBeVisible();

	});

	test('ТС 03.1.173 Verify that the dropdown contains a cursor pointer', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverTrainingLink();
		await homePage.hovertrainingVideoDownloading();
		await expect(homePage.locators.trainingVideoDownloading()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.1.175 Verify that the "Video download"subcategory is redirected to the appropriate page', async ({ page }) => {

		const homePage = new HomePage(page);

		await homePage.hoverTrainingLink();
		const trainingVideoDownloadPage = await homePage.clicktrainingVideoDownloading();
		await expect(page).toHaveURL(TRAINING_VIDEO_DOWNLOAD_PAGE_URL);
		await expect(trainingVideoDownloadPage.Heading).toBeVisible();

	});










})
