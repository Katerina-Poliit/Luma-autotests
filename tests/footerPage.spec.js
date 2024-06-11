import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage"
import {NOTES_LINK_TEXT, NOTES_PAGE_URL} from "../helpers/testDataFooterPage";

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
});