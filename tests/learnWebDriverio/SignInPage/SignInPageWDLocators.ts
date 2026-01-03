import { Page, Locator } from '@playwright/test';
import { BaseLocators } from '../BasePage/BaseLocatorsWD';

export class SignInPageWDLocators extends BaseLocators {
  readonly emailInput: Locator = this.baseLocator.locator(
    `input[placeholder='Email']`
  );
  readonly passwordInput: Locator = this.baseLocator.locator(
    `input[placeholder='Password']`
  );
  readonly signInButton: Locator = this.baseLocator.locator(
    `//button[normalize-space(text())='Sign in']`
  );
  readonly errorMessages: Locator = this.baseLocator.locator(`//ul[@class='error-messages']//li[1]`);
  readonly signInHeading: Locator = this.baseLocator.locator(
    `//h1[normalize-space(text())='Sign in']`
  );
}
