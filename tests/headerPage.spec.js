import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import { } from "../helpers/testDataHeaderPage";


test.describe('mainPage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС.01.1.1 Verify the the site contains the header', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(homePage.locators.getHeader()).toBeVisible();

	});


})

