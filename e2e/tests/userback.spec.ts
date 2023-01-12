/* eslint-disable no-console */
import { test, expect } from '@playwright/test';

const FEEDBACK_BTN = '.userback-button.userback-button-e';

test('Userback JS Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-widget:3000/');

    // Open the userback widget
    await (await page.waitForSelector(FEEDBACK_BTN)).click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback React Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-react:3000/');

    // When Authide is on
    // await page.waitForSelector(FEEDBACK_BTN, { state: 'hidden' });
    // await page.locator('text="Show"').click();
    // await page.waitForSelector(FEEDBACK_BTN);

    // Open the userback widget
    await (await page.waitForSelector(FEEDBACK_BTN)).click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback Vue3 Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-vue:3000/');

    // Open the userback widget
    await (await page.waitForSelector(FEEDBACK_BTN)).click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback Vue2 Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-vue2:3000/');

    // Open the userback widget
    await (await page.waitForSelector(FEEDBACK_BTN)).click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback Nuxt2 Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-nuxt2:3000/');

    // Open the userback widget
    await (await page.waitForSelector(FEEDBACK_BTN)).click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback Nuxt3 Widget loads and can be opened', async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'An error causing safari not to load the userback widget??'); // @FIXME

    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-nuxt:3000/');

    // Open the userback widget
    await (await page.waitForSelector(FEEDBACK_BTN)).click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});
