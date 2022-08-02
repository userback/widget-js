import { test, expect } from '@playwright/test';

test('Userback JS Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-widget:3000/');

    // Open the userback widget
    const widget = page.locator('.userback-button.userback-button-e');
    await widget.click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback React Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-react:3000/');

    // Open the userback widget
    const widget = page.locator('.userback-button.userback-button-e');
    await widget.click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});

test('Userback Vue Widget loads and can be opened', async ({ page }) => {
    // Error Handling
    page.on('pageerror', (err) => { console.error(err.message); });
    page.on('console', (message) => { console.log(message); });

    await page.goto('http://example-vue:3000/');

    // Open the userback widget
    const widget = page.locator('.userback-button.userback-button-e');
    await widget.click();

    // Check for pop-up content
    await expect(page.locator('img.userback-controls-logo')).toHaveCount(1);
    await expect(page.locator('text="Report a bug"')).toHaveCount(1);
});
