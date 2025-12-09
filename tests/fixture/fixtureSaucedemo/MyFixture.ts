import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage/LoginPage';
import { InventoryPage } from './InventoryPage/InventoryPage';
import { CartPage } from './CartPage/CartPage';
import { CheckoutPage } from './CheckoutPage/CheckoutPage';

type MyFixture = {
  standardUserName: string;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  token: string;
  before: void;
  after: void;
};

// lazy fixture
export const test = base.extend<MyFixture>({
  standardUserName: 'standard_user',
  //password: 'secret_sauce',
/*
  page: async ({ page }, use) => {
    console.log('page');
    await use(page);
  },
  context: async ({ context }, use) => {
    console.log('context');
    await use(context);
  },
  browser: async ({ browser }, use) => {
    console.log('browser');
    await use(browser);
  },*/
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
/*
  token: async ({}, use) => {
    const tokens = {
      access_token: 'rerererer',
      refresh_token: 'nvnvnnvnv',
      expiration: 900,
    };

    await use(tokens.access_token);
  },
*/
  before: [
    async ({ loginPage, standardUserName }, use) => {
      // beforeEach це все що до await use();
      await loginPage.navigateTo('/');
      await loginPage.login(standardUserName, 'secret_sauce');
      await use();
      // afterEach це все що після await use();
    },
    { auto: true, title: 'executing before test are finished' },
  ],

  after: [
    async ({ inventoryPage, page }, use) => {
      await use();

      console.log('test_inventoryPage');
      await inventoryPage.logout();

      // afterEach це все що після await use();
    },
    { auto: true, title: 'executing after test are finished' },
  ],
});
