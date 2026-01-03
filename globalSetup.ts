import { chromium, expect, request, type FullConfig } from '@playwright/test';
import { SignInPageWD } from './tests/learnWebDriverio/SignInPage/SignInPageWD';

async function globalSetup(config: FullConfig) {
  console.log('---starting global setup---');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    //baseURL: 'https://demo.learnwebdriverio.com/login',
  });
  const page = await context.newPage();

  const signInPageWD = new SignInPageWD(page);

  await signInPageWD.navigateToSignInPage();
  await signInPageWD.fillInputFields({
    email: 'vine@gm.com',
    password: '1234',
  });
  await signInPageWD.clickSignInButton();
  await expect(page.locator("[href='/']").first()).toBeVisible();

  await page.waitForTimeout(3000);
  await page.context().storageState({ path: './storageState.json' });
  console.log('---finishing global setup---');

  //await browser.close();
}

export default globalSetup;
