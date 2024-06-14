import { test, expect } from "@playwright/test";
import HomePage from "../page_objects/homePage";
import { BASE_URL } from "../helpers/testDataHomePage";

test.describe('homePage.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();

	});

	test('ТС 03.1.1 Verify that user directed to the Home page after entering "Home page" url', async ({ page }) => {
		const homePage = new HomePage(page);

		await expect(page).toHaveURL(BASE_URL);

	});

})
