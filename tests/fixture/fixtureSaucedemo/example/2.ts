import { test as base, expect } from '@playwright/test';

type MyFixture = {
  start: void;
};

export const test = base.extend<MyFixture>({
  start: async ({ page }, use) => {
    await page.goto('https://demo.learnwebdriverio.com');
    await expect(page.getByTestId('site-nav')).toBeVisible();

    await use();
  },
});
