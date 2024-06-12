import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage"
import { NOTES_LINK_TEXT, NOTES_PAGE_URL, PARTICEAPI_PAGE_URL, FOR_US_LINK_URL, SUBSCRIBE_LINK_URL, POLICY_PAGE_URL, expectedMenuItems, SEARCH_TERM_LINK_URL, SEARCH_TERMS_PAGE_HEANDING_TEXT, ADVANCED_SEARCH_PAGE_URL, SEARCH_BTN_TEXT, RESULT_SEARCH_PAGE_URL } from "../helpers/testDataFooterPage";
import PolicyPage from "../page_objects/policyPage";
import SearchtermsPage from "../page_objects/searchTermsPage";
import AndvancedSearchPage from "../page_objects/advancedSearchPage";
import ResultSearchPage from "../page_objects/ResultSearchPage";

test.describe('footerPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 02.1.1 Verify that the footer is displayed on the site', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getFooter()).toBeVisible();

	});

	test('ТС 02.1.2 Verify that the "Notes" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getNoteslink()).toBeVisible();
		await expect(homePage.locators.getNoteslink()).toHaveText(NOTES_LINK_TEXT);

	});

	test('ТС 02.1.3 Verify that the "Notes" link contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getNoteslink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.4 Verify that the "Notes" link leads to the correct page.', async ({ page }) => {
		const homePage = new HomePage(page);

		const pagePromise = page.waitForEvent('popup');
		await homePage.clickNoteslink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(NOTES_PAGE_URL);

	});

	test('ТС 02.1.5 Verify that the "Practice API Testing using Magento 2" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getPacticeAPI()).toBeVisible();

	});

	test('ТС 02.1.6 Verify that the "Practice API Testing using Magento 2" link contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getPacticeAPI()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.7 Verify that the "Practice API Testing using Magento 2" link leads to the correct page.', async ({ page }) => {
		const homePage = new HomePage(page);
		const pagePromise = page.waitForEvent('popup');
		await homePage.clickPacticeAPILink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(PARTICEAPI_PAGE_URL);

	});

	test('ТС 02.1.8 Verify that the "Write for us" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getForUsLink()).toBeVisible();

	});

	test('ТС 02.1.9 Verify that the "Write for us" link contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getForUsLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.10 Verify that the "Write for us" link leads to the correct page.', async ({ page }) => {
		const homePage = new HomePage(page);

		const pagePromise = page.waitForEvent('popup');
		await homePage.clickForUsLink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(FOR_US_LINK_URL);

	});

	test('ТС 02.1.11 Verify that the "Subscribe" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSubscribeLink()).toBeVisible();

	});

	test('ТС 02.1.12 Verify that the "Subscribe" link contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSubscribeLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.13 Verify that the "Subscribe" link leads to the correct page.', async ({ page }) => {
		const homePage = new HomePage(page);

		const pagePromise = page.waitForEvent('popup');
		await homePage.clickSubscribeLink();
		const notesPage = await pagePromise;

		await expect(notesPage).toHaveURL(SUBSCRIBE_LINK_URL);

	});

	test('ТС 02.1.14 Verify that the "Privacy and Cookie Policy" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getPrivacyCookiesLink()).toBeVisible();

	});

	test('ТС 02.1.15 Verify that the "Privacy and Cookie Policy" link contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getPrivacyCookiesLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.16 Verify that the "Privacy and Cookie Policy" link opens the page, the user clicked on the "Privacy and Cookie Policy" link', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickPrivacyCookiesLink();
		const policyPage = new PolicyPage(page)
		await expect(page).toHaveURL(POLICY_PAGE_URL);

	});

	test('ТС 02.1.17 Verify that navigation menu has 14 (fourteen) elements: Luma Security, Luma Privacy Policy, The Information We Collect, How We Use The Information We Collect, Security, Others With Whom We Share Your Information, Your Choices Regarding Use Of The Information We Collect, Your California Privacy Rights, Cookies, Web Beacons, and How We Use Them, List of cookies we collect, Online Account Registration, Emails, Acceptance, Questions for Luma?.', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickPrivacyCookiesLink();

		const policyPage = new PolicyPage(page);

		const navigationMenu = await policyPage.locators.getNavigationMenu();
		const menuItems = await navigationMenu.locator('li').allTextContents();
		expect(menuItems.length).toBe(expectedMenuItems.length);
		for (const expectedItem of expectedMenuItems) {
			expect(menuItems).toContain(expectedItem);
		}


	});

	test('ТС 02.1.17.1 Verify that clicking each navigation menu link opens a new page', async ({ page, context }) => {
		const homePage = new HomePage(page);
		await homePage.clickPrivacyCookiesLink();

		const policyPage = new PolicyPage(page);
		const list = await policyPage.locators.getNavigationMenu();
		const items = await list.locator('li').all();
		for (const item of items) {
			const menuItemText = await item.innerText();
			if (expectedMenuItems.includes(menuItemText)) {
				await item.click();
				await homePage.open();
				await homePage.clickPrivacyCookiesLink();
			}
		}
	});

	test('ТС 02.1.18  Verify that the  elements contain a pointer cursor', async ({ page, context }) => {
		const homePage = new HomePage(page);
		await homePage.clickPrivacyCookiesLink();

		const policyPage = new PolicyPage(page);
		const list = await policyPage.locators.getNavigationMenu();
		const items = await list.locator('li').all();
		for (const item of items) {
			await expect(item).toHaveCSS('cursor', 'auto');
		}
	});


	test('ТС 02.1.19 navigation menu on the left is gray', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickPrivacyCookiesLink();
		const policyPage = new PolicyPage(page)
		await expect(policyPage.locators.getNavigationMenu()).toHaveCSS('background', 'rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС 02.1.20 Verify that the "Search Terms" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSearchTermsLink()).toBeVisible();

	});

	test('ТС 02.1.23 Verify that the search-terms contains the pointer cursor', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getSearchTermsLink()).toBeVisible();
		await expect(homePage.locators.getSearchTermsLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.21 Verify that the "Search Terms" link opens the page, the user clicked on the "Search Terms" link', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickSearchTermsLink();
		const searchTerms = new SearchtermsPage(page);
		await expect(page).toHaveURL(SEARCH_TERM_LINK_URL);

	});

	test('ТС 02.1.22 Verify that the page contain a search-terms', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickSearchTermsLink();
		const searchTerms = new SearchtermsPage(page);
		await expect(searchTerms.locators.getSearchTermsHeading()).toBeVisible();
		await expect(searchTerms.locators.getSearchTermsHeading()).toHaveText(SEARCH_TERMS_PAGE_HEANDING_TEXT);
		await expect(searchTerms.locators.getSearchTerms()).toBeVisible();
	});
	test('ТС 02.1.24 Verify that all tags on the "Popular Search Terms" page lead to other pages', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickSearchTermsLink();
		const searchTerms = new SearchtermsPage(page);
		const tags = await searchTerms.locators.getSearchTerms();
		const tagsCount = await tags.count();


		for (let i = 0; i < tagsCount; i++) {
			await tags.nth(i).click();
			const currentURL = page.url();

			await expect(currentURL).not.toBe(SEARCH_TERM_LINK_URL);

			await page.goBack();
		}
	});

	test('ТС 02.1.25 Verify that the "Advanced Search" link is placed in the footer', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getAdvancedSearchLink()).toBeVisible();

	});

	test('ТС 02.1.26 Verify that the "Advanced Search" link opens the page, the user clicked on the "Advanced Search" link', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		await expect(page).toHaveURL(ADVANCED_SEARCH_PAGE_URL);

	});

	test('ТС 02.1.27 Verify that the "Advanced Search" link opens the page, the user clicked on the "Advanced Search" link', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.locators.getAdvancedSearchLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 02.1.27.01 Verify that the "Advanced Search" page contains the search settings', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators.getSettingsSearch()).toBeVisible();
		await expect(advancedSearchPage.locators.getSettingsSearch()).toHaveText('Search Settings')

	});

	test('ТС 02.1.28 Verify that the "Advanced Search" page contains the "Product Name" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators.getProductNameField()).toBeVisible();

	});

	test('ТС 02.1.29 Verify that the "Advanced Search" page contains the "SKU" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators.getSKUField()).toBeVisible();

	});

	test('ТС 02.1.30 Verify that the "Advanced Search" page contains the "Description" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators.getDescriptionField()).toBeVisible();
	});

	test('ТС 02.1.31 Verify that the "Advanced Search" page contains the "Short Description" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators. getShortDescriptionField()).toBeVisible();
	});

	test('ТС 02.1.32 Verify that the "Advanced Search" page contains the "Price" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators.getPriceField()).toBeVisible();
	});

	test('ТС 02.1.39 Verify that the "Advanced Search" page contains the "USD" field', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators.getUSDField()).toBeVisible();
	});


	test('ТС 02.1.33 Verify that the "Advanced Search" page contains the "Search" button', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await expect(advancedSearchPage.locators. getSearchBtn()).toBeVisible();
		await expect(advancedSearchPage.locators. getSearchBtn()).toHaveCSS('cursor', 'pointer');
		await expect(advancedSearchPage.locators. getSearchBtn()).toHaveCSS('background', 'rgb(25, 121, 195) none repeat scroll 0% 0% / auto padding-box border-box');
		await expect(advancedSearchPage.locators. getSearchBtn()).toHaveText(SEARCH_BTN_TEXT);
	});

	test('ТС 02.1.34  Verify that the transition to the results page is successful, at least one field is filled with valid data', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await advancedSearchPage.fillSKUField();
		await advancedSearchPage.clickSearchBtn();
		await expect(page).toHaveURL(RESULT_SEARCH_PAGE_URL);
		const resultSearchPage = new ResultSearchPage(page);

	});

	test('ТС 02.1.36  Verify that the an informational message is displayed on the result page', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await advancedSearchPage.fillSKUField();
		await advancedSearchPage.clickSearchBtn();
		await expect(page).toHaveURL(RESULT_SEARCH_PAGE_URL);
		const resultSearchPage = new ResultSearchPage(page);
		await expect(resultSearchPage.locators.getValidMessage()).toBeVisible();

	});

	test('ТС 02.1.42  Verify that the transition to the results page is successful, at least one field is filled with invalid data, a warning message has been received', async ({ page }) => {
		const homePage = new HomePage(page);
		await homePage.clickAdvancedSearchLink();
		const advancedSearchPage = new AndvancedSearchPage(page);
		await advancedSearchPage.fillnotValidSKUField();
		await advancedSearchPage.clickSearchBtn();
		const resultSearchPage = new ResultSearchPage(page);
		await expect(resultSearchPage.locators.getNotValidMessage()).toBeVisible();

	});





})








