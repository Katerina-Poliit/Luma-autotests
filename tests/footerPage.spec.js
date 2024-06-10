import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import {} from "../helpers/testDataFooterPage";

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

	});

    
});