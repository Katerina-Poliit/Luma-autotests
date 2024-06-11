import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage"
import {NOTES_LINK_TEXT, NOTES_PAGE_URL, PARTICEAPI_PAGE_URL, FOR_US_LINK_URL, SUBSCRIBE_LINK_URL, POLICY_PAGE_URL} from "../helpers/testDataFooterPage";
import PolicyPage from "../page_objects/policyPage";

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
});