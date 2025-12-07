import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { LoginPageLocators } from './LoginPageLocators';

export class LoginPage extends BasePage {
  readonly locators: LoginPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginPageLocators(page.locator('.login_wrapper'));
  }

  async login(username: string, password: string) {
    await this.locators.userNameInput.fill(username);
    
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }
}
