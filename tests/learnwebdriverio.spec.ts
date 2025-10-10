import { test, expect } from "@playwright/test";

const currentDate = new Date();
const timestamp = currentDate.getTime();
const userName = `alyonkavine`;
const existingEmail = `alyonkavine@gmail.com`;
const emailValid = userName + `'+'${timestamp}'@example.com'`;
const emailInvalid = userName + `'+'${timestamp}'@example.com+1'`;
const password = `123456qwert!`;
const domain1 = `@example.org`;
const domain2 = `@example.net`;
const domain3 = `@example.edu`;
const domain4 = `@example.gov`;
const domain5 = `@example.io`;

const titleSignUp = `Sign up`;
const titleAboutCompany = `Tell us about your company`;
const linkAboutCompany = `Have an account?`;

test.describe(`@register Sign up. Negative`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/register");
    //await expect(page.getByRole("heading")).toContainText("Sign up");
    await expect(page.locator(`h1.text-xs-center`)).toBeVisible();
  });

  test(`Register with an existing email. LWD-001`, async ({ page }) => {
    // await page.getByRole("textbox", { name: "Username" }).fill(emailValid); //input[placeholder='Username']
    // await page.getByRole('textbox', { name: 'Email' }).fill(userName); // input[placeholder='Email']

    await page.locator(`input[placeholder='Username']`).fill(userName);
    await page.locator(`input[placeholder='Email']`).fill(existingEmail);
    await page.locator(`input[placeholder='Password']`).fill(password);

    //await page.getByRole('button', { name: 'Sign up' }).click(); // .button.btn.btn-lg
    await page.locator(`.button.btn.btn-lg`).click();
    //await expect(page.getByRole("heading")).toContainText("Sign up"); //
    await expect(page.locator(`h1.text-xs-center`)).toBeVisible();
    await expect(page.locator(`.error-messages`)).toBeVisible();
    await expect(page.locator(`.error-messages`)).toContainText(
      `username is already taken.`
    );
    await expect(page.locator(`.error-messages`)).toContainText(
      `email is already taken.`
    );
  });

  test(`Empty fields. LWD-002`, async ({ page }) => {
    await page.getByRole("button", { name: "Sign up" }).click();
    await expect(page.locator(`.error-messages`)).toContainText(
      `username can't be blank`
    );
    await expect(page.locator(`.error-messages`)).toContainText(
      `email can't be blank`
    );
    await expect(page.locator(`h1.text-xs-center`)).toBeVisible();
  });

  test(`Invalid email. LWD-003`, async ({ page }) => {
    await page
      .locator(`input[placeholder='Username']`)
      .fill(`${userName}'+'${timestamp}`);
    await page.locator(`input[placeholder='Email']`).fill(emailInvalid);
    await page.locator(`input[placeholder='Password']`).fill(password);
    await expect(page.locator(`h1.text-xs-center`)).toBeVisible();
  });
});

test.describe(`@register Sign up. Positive`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/register");
    //await expect(page.getByRole("heading")).toContainText("Sign up");
    await expect(page.locator(`h1.text-xs-center`)).toBeVisible();
  });

  test(`Successful registration with valid data. LWD-004`, async ({ page }) => {
    await page
      .locator(`input[placeholder='Username']`)
      .fill(`${userName}'+'${timestamp}`);
    await page.locator(`input[placeholder='Email']`).fill(emailInvalid);
    await page.locator(`input[placeholder='Password']`).fill(password);
    await expect(page.locator(`.logo-font`)).toBeVisible();
  });

  test(`Registration with trimmed spaces. LWD-005`, async ({ page }) => {
    await page
      .locator(`input[placeholder='Username']`)
      .fill(` ${userName}'+'${timestamp} `);
    await page.locator(`input[placeholder='Email']`).fill(` ${emailInvalid} `);
    await page.locator(`input[placeholder='Password']`).fill(password);
    await expect(page.locator(`.logo-font`)).toBeVisible();
  });

  test(`Registration with valid email domain variations. LWD-006`, async ({
    page,
  }) => {
    /*
    const domain1 = `.org`;
    const domain2 = `.net`;
    const domain3 = `.edu`;
    const domain4 = `.gov`;
    const domain5 = `.io`;
    */
    await page
      .locator(`input[placeholder='Username']`)
      .fill(`${userName}'+'${timestamp}`);
    await page
      .locator(`input[placeholder='Email']`)
      .fill(`${userName}${domain1}`);
    await page.locator(`input[placeholder='Password']`).fill(password);
    await expect(page.locator(`.logo-font`)).toBeVisible();

    await page
      .locator(`input[placeholder='Username']`)
      .fill(`${userName}'+'${timestamp}`);
    await page
      .locator(`input[placeholder='Email']`)
      .fill(`${userName}${domain2}`);
    await page.locator(`input[placeholder='Password']`).fill(password);
    await expect(page.locator(`.logo-font`)).toBeVisible();

    await page
      .locator(`input[placeholder='Username']`)
      .fill(`${userName}'+'${timestamp}`);
    await page
      .locator(`input[placeholder='Email']`)
      .fill(`${userName}${domain3}`);
    await page.locator(`input[placeholder='Password']`).fill(password);
    await expect(page.locator(`.logo-font`)).toBeVisible();
  });
});
//});

//test.describe(`login`, () => {
test.describe(`@login Create an org. Negative`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/login");
    await expect(page.getByRole("heading")).toContainText("Sign in");
  });

  test(``, async () => {});
});

test.describe(`@login Create an org. Positive`, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.learnwebdriverio.com/login");
    await expect(page.getByRole("heading")).toContainText("Sign in");
  });

  test(`Login after successful Sign Up`, async (page) => {
    // await page.getByRole("textbox", { name: "Email" }).click();
    // await page
    //   .getByRole("textbox", { name: "Email" })
    //   .fill("alyonkavine@gmail.com");
    // await page.getByRole("textbox", { name: "Email" }).press("Tab");
    // await page.getByRole("textbox", { name: "Password" }).fill("123456qwerty!");
    // await page.getByRole("textbox", { name: "Password" }).press("Enter");
    // await page.getByRole("textbox", { name: "Password" }).click();
    // await page.getByRole("button", { name: "Sign in" }).click();
    // await page.getByRole("textbox", { name: "Password" }).click();
    // await page.getByRole("textbox", { name: "Password" }).fill("123456qwerty");
    // await page.getByRole("button", { name: "Sign in" }).click();
  });
  test(`Successful login with valid credentials`, async () => {});
  test(`Login after logout`, async () => {});
  test(`Home page is not displayed to user after logging out`, async () => {});
});
//});
