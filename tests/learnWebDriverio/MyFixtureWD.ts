import { test as base } from '@playwright/test';
import { SignInPageWD } from './SignInPage/SignInPageWD';
import { SignUpPageWD } from './SignUpPage/SignUpPageWD';
import { MainPageWD } from './MainPage/MainPageWD';

type MyFixtureWD = {
  //standardUserName: string;
  userEmail: string;
  signInPageWD: SignInPageWD;
  signUpPageWD: SignUpPageWD;
  mainPageWD: MainPageWD;
  before: void;
};

// lazy fixture
export const test = base.extend<MyFixtureWD>({
  //standardUserName: 'standard_user',
  userEmail: ['', { option: true }],

  signInPageWD: async ({ page }, use) => {
    const signInPageWD = new SignInPageWD(page);
    await use(signInPageWD);
  },
  signUpPageWD: async ({ page }, use) => {
    const signUpPageWD = new SignUpPageWD(page);
    await use(signUpPageWD);
  },
  mainPageWD: async ({ page }, use) => {
    const mainPageWD = new MainPageWD(page);
    await use(mainPageWD);
  },

  before: [
    async ({ signInPageWD, userEmail }, use) => {
      // beforeEach це все що до await use();
      await signInPageWD.navigateTo('/');
      await signInPageWD.login(userEmail, '1234');
      await use();
      // afterEach це все що після await use();
    },
    { auto: false, title: 'executing before test are finished' },
  ],
});
