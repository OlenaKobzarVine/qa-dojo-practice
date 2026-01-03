import { Page } from '@playwright/test';
import { BasePageWD } from '../BasePage/BasePageWD';
import { MainPageWDLocators } from './MainPageWDLocators';

export class MainPageWD extends BasePageWD {
  readonly locators: MainPageWDLocators;
  //private readonly signInUrl = 'https://demo.learnwebdriverio.com/login';

  constructor(page: Page) {
    super(page);
    this.locators = new MainPageWDLocators(page.locator('#app'));
  }

  //   async navigateToSignInPage() {
  //     await this.navigateTo('/');
  //     await this.locators.signInHeading.waitFor({ state: 'visible' });
  //   }

  //   async fillInputFields(credentials: { email: string; password: string }) {
  //     await this.locators.emailInput.fill(credentials.email);
  //     await this.locators.passwordInput.fill(credentials.password);
  //   }

  //   async clickSignInButton() {
  //     await this.locators.signInButton.click();
  //   }

  //   async login(email: string, password: string) {
  //     await this.fillInputFields({ email, password });
  //     await this.clickSignInButton();
  //   }

  //   async isErrorMessageVisible() {
  //     return await this.locators.errorMessages.isVisible();
  //   }

  //   async getErrorMessageText() {
  //     if (await this.isErrorMessageVisible()) {
  //       return await this.locators.errorMessages.textContent();
  //     }
  //     return null;
  //   }
}
