import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { LoginPageLocators } from './LoginPageLocators';

export class LoginPage extends BasePage {
  readonly locators: LoginPageLocators;
  // readonly userNameInput: Locator;
  // readonly passwordInput: Locator;
  // readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginPageLocators(page);
    //   this.userNameInput = page.locator('#user-name');
    //   this.passwordInput = page.locator('#password');
    //   this.loginButton = page.locator('#login-button');
  }

  // async open() {
  //   await this.navigateTo('/');
  // }

  async login(username: string, password: string) {
    await this.locators.userNameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }
}
