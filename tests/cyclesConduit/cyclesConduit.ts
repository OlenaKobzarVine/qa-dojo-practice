import { expect, Page } from '@playwright/test';
import { TIMEOUT } from 'dns';

const currentDate = new Date();
const timestamp = currentDate.getTime();
const userName = `test`;
const emailValid = `${userName}+${timestamp}@example.com`;
const password = `123456qwert!`;

export async function registrationWithValidData(page: Page, baseURL: string) {
  const SignUpLocators = {
    UserName: `//input[@placeholder='Username']`,
    Email: `//input[@placeholder='Email']`,
    Password: `//input[@placeholder='Password']`,
    SignUpButton: `//button[normalize-space(text())='Sign up']`,
  };

  await page.goto(baseURL);

  await page.locator(SignUpLocators.UserName).fill(`${userName}${timestamp}`);
  await page.locator(SignUpLocators.Email).fill(emailValid);
  await page.locator(SignUpLocators.Password).fill(password);
  await page.locator(SignUpLocators.SignUpButton).click();
  console.log(`Email: ${emailValid}; Password: ${password}`);
  await page.waitForTimeout(500);
}

export async function loginToPortal(page: Page, baseURL: string) {
  const LoginLocators = {
    Email: `//input[@placeholder='Email']`,
    Password: `//input[@placeholder='Password']`,
    SignInButton: `//button[normalize-space(text())='Sign in']`,
  };
  await page.goto(baseURL);
  await page.locator(LoginLocators.Email).fill(emailValid);
  await page.locator(LoginLocators.Password).fill(password);
  await page.locator(LoginLocators.SignInButton).click();
  await page.waitForTimeout(250);
}

export async function createNArticles(
  page: Page,
  articleURL: string,
  n: number
) {
  const ArticleLocators = {
    newArticleBtn: `//a[contains(text(),'New Article')]`,
    articleTitle: `//input[@placeholder='Article Title']`,
    description: `//input[@data-qa-id='editor-description']`,
    article: `//textarea[@placeholder='Write your article (in markdown)']`,
    tags: `//input[@placeholder='Enter tags']`,
    publishArticleBtn: `//button[@data-qa-id='editor-publish']`,
  };

  const ArticleValues = {
    articleTitle: `Article title`,
    description: `Description`,
    article: `Article`,
    tags: `Tags`,
  };

  // 1 while -----------------------

  let i = 1;

  while (i <= n) {
    let ArticleTitle = ArticleValues.articleTitle + i;

    await page.goto(articleURL);
    await page
      .locator(ArticleLocators.articleTitle)
      .fill(ArticleValues.articleTitle + i);
    await page
      .locator(ArticleLocators.description)
      .fill(ArticleValues.description + i);
    await page.locator(ArticleLocators.article).fill(ArticleValues.article + i);
    await page.locator(ArticleLocators.tags).fill(`${userName}${timestamp}`);
    await page.locator(ArticleLocators.publishArticleBtn).click();
    i++;
  }

  // 2 do while -----------------------

  do {
    let ArticleTitle = ArticleValues.articleTitle + i;

    await page.locator(ArticleLocators.newArticleBtn).click();

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.articleTitle)
      .fill(ArticleValues.articleTitle + i);

    await page.locator(ArticleLocators.description).clear();
    await page
      .locator(ArticleLocators.description)
      .fill(ArticleValues.description + i);

    await page.locator(ArticleLocators.article).clear();
    await page.locator(ArticleLocators.article).fill(ArticleValues.article + i);

    await page.locator(ArticleLocators.tags).clear();
    await page.locator(ArticleLocators.tags).fill(`${userName}${timestamp}`);

    await page.locator(ArticleLocators.publishArticleBtn).click();
    i++;
  } while (i <= n * 2);

  // 3 forEach -----------------------

  [n * 2 + 1, n * 2 + 2].forEach(async (value, index, arr) => {
    let ArticleTitle = ArticleValues.articleTitle + value;

    await page.locator(ArticleLocators.newArticleBtn).click();

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.articleTitle)
      .fill(ArticleValues.articleTitle + value);

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.description)
      .fill(ArticleValues.description + value);

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.article)
      .fill(ArticleValues.article + value);

    await page.locator(ArticleLocators.articleTitle).clear();
    await page.locator(ArticleLocators.tags).fill(`${userName}${timestamp}`);

    await page.locator(ArticleLocators.publishArticleBtn).click();
    await page.waitForTimeout(500);
  });

  // 4 for of -----------------------

  const arr = [n * 3 + 1, n * 3 + 2];

  for (const element of arr) {
    let ArticleTitle = ArticleValues.articleTitle + i;

    await page.locator(ArticleLocators.newArticleBtn).click();

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.articleTitle)
      .fill(ArticleValues.articleTitle + element);

    await page.locator(ArticleLocators.description).clear();
    await page
      .locator(ArticleLocators.description)
      .fill(ArticleValues.description + element);

    await page.locator(ArticleLocators.article).clear();
    await page
      .locator(ArticleLocators.article)
      .fill(ArticleValues.article + element);

    await page.locator(ArticleLocators.tags).clear();
    await page.locator(ArticleLocators.tags).fill(`${userName}${timestamp}`);

    await page.locator(ArticleLocators.publishArticleBtn).click();
    await page.waitForTimeout(250);
  }

  // 5 for in -----------------------

  const obj: { [key: string]: number } = {
    a: n * 4 + 1,
    b: n * 4 + 2,
  };

  for (const key in obj) {
    let ArticleTitle = ArticleValues.articleTitle + i;

    await page.locator(ArticleLocators.newArticleBtn).click();

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.articleTitle)
      .fill(ArticleValues.articleTitle + obj[key]);

    await page.locator(ArticleLocators.description).clear();
    await page
      .locator(ArticleLocators.description)
      .fill(ArticleValues.description + obj[key]);

    await page.locator(ArticleLocators.article).clear();
    await page
      .locator(ArticleLocators.article)
      .fill(ArticleValues.article + obj[key]);

    await page.locator(ArticleLocators.tags).clear();
    await page.locator(ArticleLocators.tags).fill(`${userName}${timestamp}`);

    await page.locator(ArticleLocators.publishArticleBtn).click();
    await page.waitForTimeout(250);
  }

  // 6 for -----------------------

  for (let qa = n * 5 + 1; qa <= n * 5 + 2; qa++) {
    let ArticleTitle = ArticleValues.articleTitle + qa;

    await page.locator(ArticleLocators.newArticleBtn).click();

    await page.locator(ArticleLocators.articleTitle).clear();
    await page
      .locator(ArticleLocators.articleTitle)
      .fill(ArticleValues.articleTitle + qa);

    await page.locator(ArticleLocators.description).clear();
    await page
      .locator(ArticleLocators.description)
      .fill(ArticleValues.description + qa);

    await page.locator(ArticleLocators.article).clear();
    await page
      .locator(ArticleLocators.article)
      .fill(ArticleValues.article + qa);

    await page.locator(ArticleLocators.tags).clear();
    await page.locator(ArticleLocators.tags).fill(`${userName}${timestamp}`);

    await page.locator(ArticleLocators.publishArticleBtn).click();
    await page.waitForTimeout(250);
  }
}

export async function findCreatedArticlesByNavigatingPagination(
  page: Page,
  baseURL: string,
  n: number
) {
  await page.locator(`//a[@class='navbar-brand router-link-active']`).click();
  await page.waitForTimeout(250);

  for (let el = 1; el <= n; el++) {
    let elementToFind = `Article title${el}`;
    //console.log(`Try to find: Article title${el}`);
    let isVisible = false;

    for (let i = 1; i <= 10; i++) {
      if (isVisible) {
        break;
      }

      await page
        .locator(`[data-test="page-link-${i}"]`)
        .getByRole('link', { name: `${i}` })
        .click();
      await page.waitForTimeout(250);

      try {
        await expect(
          page.getByRole('heading', { name: elementToFind })
        ).toBeVisible({ timeout: 2000 });
        await page.waitForTimeout(250);
        isVisible = true;
        console.log(`${elementToFind}: on page ${i}`);
      } catch (error) {}
    }
  }
}
