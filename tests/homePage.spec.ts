import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'

test.describe('Home Page', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('should display correct header text', async ({page})=>{
        const title = await homePage.getHeaderInfo()
        expect(title).toContain('AAwarenessRRedirectYYieldAAction')
    });

});