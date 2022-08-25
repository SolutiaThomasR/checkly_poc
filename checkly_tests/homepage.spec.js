const { test, expect } = require('@playwright/test');

test('test homepage contact', async ({ page }) => {

  // Go to https://www.solutiaconsulting.com/
  await page.goto('https://www.solutiaconsulting.com/');

  // Click text=Let's Talk
  await page.locator('text=Let\'s Talk').click();

  // Click input[name="name"]
  await page.locator('input[name="name"]').click();

  // Fill input[name="name"]
  await page.locator('input[name="name"]').fill('Thomas Reither');

});
