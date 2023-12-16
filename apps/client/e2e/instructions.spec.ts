/* eslint-disable jest/no-done-callback */
/* eslint-disable jest/expect-expect */
import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Recipe Box');
});

test('toggle instructions', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByText(/Click on a recipe name to view that recipe's ingredients/i),
  ).toBeVisible();

  await page.getByRole('button', { name: 'close instructions' }).click();

  await expect(
    page.getByText(/Click on a recipe name to view that recipe's ingredients/i),
  ).not.toBeVisible();
});
