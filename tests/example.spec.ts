import { test, expect } from '@playwright/test';

test('csp must work', async ({ page }) => {
  await page.goto('http://localhost:3000/index.html');

  // Expect a title "to contain" a substring.
  await expect(page.locator("img")).not.toBeVisible();


});
