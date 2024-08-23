const { test, expect } = require('@playwright/test');

test('has title', async () => {
    await page.goto('https://www.advantageonlineshopping.com/#/register');
    await page.expect(page).toHaveTitle('CREATE ACCOUNT')
});