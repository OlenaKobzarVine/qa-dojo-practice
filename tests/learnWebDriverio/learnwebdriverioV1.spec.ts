import { expect } from '@playwright/test';
import { SignInPageWD } from './SignInPage/SignInPageWD';
import { SignUpPageWD } from './SignUpPage/SignUpPageWD';
import { MainPageWD } from './MainPage/MainPageWD';
import { test } from './MyFixtureWD';

const currentDate = new Date();
const timestamp = currentDate.getTime();
const userName = `test`;
const existingEmail = `test@gm.com`;
const emailValid = `${userName}${timestamp}@example.com`;
const emailInvalid = `${userName}${timestamp}@example.com+1`;
const password = `123456qwert!`;
const wrongPassword = `wrongPassword`;
// const domain1 = `@example.org`;
// const domain2 = `@example.net`;
// const domain3 = `@example.edu`;
const domains = [
  '@example.org',
  '@example.net',
  '@example.edu',
  '@example.gov',
  '@example.io',
];

const titleSignUp = `Sign up`;
const titleAboutCompany = `Tell us about your company`;
const linkAboutCompany = `Have an account?`;

test.describe(`@register Sign up. Negative`, { tag: ['@SignUpPage'] }, () => {
  test.beforeEach(async ({ signUpPageWD }) => {
    await signUpPageWD.navigateTo('/register');
    //await expect(page.getByRole("heading")).toContainText("Sign up");
    await expect(signUpPageWD.locators.signUpHeading).toBeVisible();
  });

  test(`Register with an existing email. LWD-001`, async ({ signUpPageWD }) => {
    // await page.getByRole("textbox", { name: "Username" }).fill(emailValid); //input[placeholder='Username']
    // await page.getByRole('textbox', { name: 'Email' }).fill(userName); // input[placeholder='Email']

    await signUpPageWD.locators.userNameInput.fill(userName);
    await signUpPageWD.locators.emailInput.fill(existingEmail);
    await signUpPageWD.locators.passwordInput.fill(password);

    //await page.getByRole('button', { name: 'Sign up' }).click(); // .button.btn.btn-lg
    await signUpPageWD.locators.signUpButton.click();
    //await expect(page.getByRole("heading")).toContainText("Sign up"); //
    await expect(signUpPageWD.locators.signUpHeading).toBeVisible();
    await expect(signUpPageWD.locators.errorMessages).toBeVisible();
    await expect(signUpPageWD.locators.errorMessages).toContainText(
      `username is already taken.`
    );
    // await expect(signUpPageWD.locator(`.error-messages`)).toContainText(
    //   `email is already taken.`
    // );
  });

  test(`Empty fields. LWD-002`, async ({ signUpPageWD }) => {
    //await page.getByRole("button", { name: "Sign up" }).click();
    await signUpPageWD.locators.signUpButton.click();
    await expect(signUpPageWD.locators.errorMessages).toContainText(
      `username can't be blank`
    );
    await expect(signUpPageWD.locators.errorMessages).toContainText(
      `email can't be blank`
    );
    await expect(signUpPageWD.locators.signUpHeading).toBeVisible();
  });

  test(`Invalid email. LWD-003`, async ({ signUpPageWD }) => {
    await signUpPageWD.locators.userNameInput.fill(
      `${userName}'+'${timestamp}`
    );
    await signUpPageWD.locators.emailInput.fill(emailInvalid);
    await signUpPageWD.locators.passwordInput.fill(password);
    await expect(signUpPageWD.locators.signUpHeading).toBeVisible();
  });
});

test.describe(`@register Sign up. Positive`, () => {
  test.beforeEach(async ({ signUpPageWD }) => {
    await signUpPageWD.navigateTo('/register');
    //await expect(page.getByRole("heading")).toContainText("Sign up");
    await expect(signUpPageWD.locators.signUpHeading).toBeVisible();
  });

  test(`Successful registration with valid data. LWD-004`, async ({
    signUpPageWD,
    mainPageWD,
  }) => {
    await signUpPageWD.locators.userNameInput.fill(`${userName}${timestamp}`);
    await signUpPageWD.locators.emailInput.fill(emailValid);
    await signUpPageWD.locators.passwordInput.fill(password);
    await signUpPageWD.locators.signUpButton.click();
    await expect(mainPageWD.locators.newArticleLink).toBeVisible();
  });

  test(`Registration with trimmed spaces. LWD-005`, async ({
    signUpPageWD,
    mainPageWD,
  }) => {
    await signUpPageWD.locators.userNameInput.fill(`${userName}${timestamp}`);
    await signUpPageWD.locators.emailInput.fill(` ${emailValid} `);
    await signUpPageWD.locators.passwordInput.fill(password);
    await signUpPageWD.locators.signUpButton.click();
    await expect(mainPageWD.locators.newArticleLink).toBeVisible();
  });

  for (const domain of domains) {
    test(`Registration with ${domain} domain. LWD-006`, async ({
      signUpPageWD,
      mainPageWD,
    }) => {
      await signUpPageWD.locators.userNameInput.fill(`${userName}${timestamp}`);
      await signUpPageWD.locators.emailInput.fill(
        `${userName}${timestamp}${domain}`
      );
      await signUpPageWD.locators.passwordInput.fill(password);
      await signUpPageWD.locators.signUpButton.click();
      await expect(mainPageWD.locators.newArticleLink).toBeVisible();
    });
  }
});

test.describe(`@login Create an org. Negative`, () => {
  test.beforeEach(async ({ signInPageWD }) => {
    // const signInPageWD = new SignInPageWD(page);

    await signInPageWD.navigateTo('/login');
    //await page.goto('https://demo.learnwebdriverio.com/login');
    await expect(signInPageWD.locators.signInHeading).toBeVisible();
    //await expect(page.getByRole('heading')).toContainText('Sign in');
  });

  test(`Empty fields. LWD-007`, async ({ signInPageWD }) => {
    // const signInPageWD = new SignInPageWD(page);
    await signInPageWD.clickSignInButton();
    //await page.locator(`button.btn.btn-lg`).click();
    await expect(signInPageWD.locators.errorMessages).toBeVisible();
    // await expect(page.locator(`.error-messages`)).toBeVisible();
  });

  test(`Invalid credentials. LWD-008`, async ({ signInPageWD }) => {
    await signInPageWD.locators.emailInput.fill(
      `nonexistent${timestamp}@example.com`
    );
    await signInPageWD.locators.passwordInput.fill(`${wrongPassword}`);
    await signInPageWD.locators.signInButton.click();
    await expect(signInPageWD.locators.errorMessages).toBeVisible();
  });

  test(`Incorrect password. LWD-009`, async ({ signInPageWD }) => {
    await signInPageWD.locators.emailInput.fill(existingEmail);
    await signInPageWD.locators.passwordInput.fill(`${wrongPassword}`);
    await signInPageWD.locators.signInButton.click();
    await expect(signInPageWD.locators.errorMessages).toBeVisible();
  });
});

test.describe(`@login Create an org. Positive`, () => {
  test.use({ storageState: './storageState.json' });

  // test.beforeEach(async ({ signInPageWD }) => {
  //   await signInPageWD.navigateTo('/login');
  //   await expect(signInPageWD.locators.signInHeading).toBeVisible();
  // });

  test(`Login after globalSetup. LWD-010`, async ({ mainPageWD }) => {
    //await expect(mainPageWD.locators.newArticleLink).toBeVisible();
    //await expect(mainPageWD.locators.mainPage.first()).toBeVisible();
  });

  test(`Logout works and shows sign-in page. LWD-011`, async ({ page }) => {
    await page.getByRole('link', { name: 'Sign out' }).click();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  });

  test(`Home page is not displayed after logout. LWD-012`, async ({ page }) => {
    await expect(page.locator(`.logo-font`)).toBeVisible();
    await page.getByRole('link', { name: 'Sign out' }).click();
    await expect(page.locator(`.logo-font`)).not.toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
  });
});
//});
