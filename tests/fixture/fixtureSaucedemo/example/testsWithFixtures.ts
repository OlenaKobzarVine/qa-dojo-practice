// import { LoginPage } from '../fixture/fixtureSaucedemo/LoginPage';
// import { expect } from '@playwright/test';

// // базова авторизація але з інкапсуляцією в ПОМ
// test('auth via ui - pom scenario', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.navigateTo('/');
//   await loginPage.login({ email: '', password: '' });
//   await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
// });

// test('auth via ui - pom scenario - with fixture', async ({
//   loginPage,
//   page,
// }) => {
//   await loginPage.navigateTo('/');
//   await loginPage.login({ email: '', password: '' });
//   await expect(page.locator(`[href='/@qasenpai/']`)).toBeVisible();
// });
