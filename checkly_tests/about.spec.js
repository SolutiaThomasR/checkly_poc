import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.solutiaconsulting.com/
  await page.goto('https://www.solutiaconsulting.com/');

  // Click text=About Us >> nth=0
  await page.locator('text=About Us').first().click();
  await expect(page).toHaveURL('https://www.solutiaconsulting.com/about');

  // Click img[alt="Rick Kuula"]
  await page.locator('img[alt="Rick Kuula"]').click();
  await expect(page).toHaveURL('https://www.solutiaconsulting.com/about/rickkuula');

  // Click svg[role="img"] >> nth=1
  await page.locator('svg[role="img"]').nth(1).click();
  await expect(page).toHaveURL('https://www.solutiaconsulting.com/about');

});