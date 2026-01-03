import { Page } from '@playwright/test';
import { BasePageWD } from '../BasePage/BasePageWD';
import { SignUpPageWDLocators } from './SignUpPageWDLocators';

export class SignUpPageWD extends BasePageWD {
  readonly locators: SignUpPageWDLocators;
  //private readonly signInUrl = 'https://demo.learnwebdriverio.com/login';

  constructor(page: Page) {
    super(page);
    this.locators = new SignUpPageWDLocators(page.locator('#app'));
  }
  async navigateToSignUpPage() {
    await this.navigateTo('/');
    await this.locators.signUpHeading.waitFor({ state: 'visible' });
  }

  async fillInputFields(credentials: {
    userName: string;
    email: string;
    password: string;
  }) {
    await this.locators.userNameInput.fill(credentials.userName);
    await this.locators.emailInput.fill(credentials.email);
    await this.locators.passwordInput.fill(credentials.password);
  }

  async clickSignUpButton() {
    await this.locators.signUpButton.click();
  }
}
