/* eslint-disable jest/no-done-callback */
/* eslint-disable jest/expect-expect */
import { expect, test } from '@playwright/test';

test('should be able to create new recipe', async ({ page }) => {
  await page.goto('/');

  await page
    .getByRole('textbox', { name: /new recipe/ })
    .fill('banana strawberry smoothie');
  await page.getByRole('textbox', { name: /new recipe/ }).press('Enter');
  await page.getByRole('link', { name: 'banana strawberry smoothie' }).click();

  await expect(
    page.getByRole('textbox', { name: /new ingredient/ }),
  ).toBeVisible();
});
