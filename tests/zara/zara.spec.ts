import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Work with cookie', () => {
  let cookies = [];
  let cookiesLength = 0;
  let newCookiesLength = 0;
  const newCookie = {
    name: 'zara',
    value: 'testCookie',
    domain: '.zara.com',
    path: '/some/path',
  };

  test.beforeEach('Navigate to zara.com.uk', async ({ page }) => {
    await page.goto('https://www.zara.com/uk/');
    await page.getByRole('button', { name: 'Accept All Cookies' }).click();
    await page.getByRole('button', { name: 'Yes, continue on United' }).click();
  });

  test('Get all cookie', async ({ context }) => {
    cookies = await context.cookies();
    cookiesLength = cookies.length;

    expect(cookies).toBeTruthy();
    expect(cookiesLength).toBeGreaterThan(0);

    await context.addCookies([newCookie]);

    expect(cookiesLength).toBe(cookiesLength + 1);
  });

  test.fixme('Add cookie', async ({ page, context }) => {
    cookies = await context.cookies();
    cookiesLength = cookies.length;
    await page.context().addCookies([newCookie]);

    newCookiesLength = cookies.length;

    expect(newCookiesLength).toBe(cookiesLength + 1);
  });

  test('Clear cookie', async ({ context }) => {
    cookies = await context.cookies();
    cookiesLength = cookies.length;
    await context.clearCookies({ name: 'CookiesConsent' });

    newCookiesLength = cookies.length;

    expect(newCookiesLength).toBe(cookiesLength - 1);
  });
});
