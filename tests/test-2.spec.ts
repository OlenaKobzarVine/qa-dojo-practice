import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/register');
  await expect(page.getByRole('heading')).toContainText('Sign up');
});