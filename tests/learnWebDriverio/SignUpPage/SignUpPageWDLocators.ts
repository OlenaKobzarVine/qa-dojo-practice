import { Locator } from '@playwright/test';
import { BaseLocators } from '../BasePage/BaseLocatorsWD';

export class SignUpPageWDLocators extends BaseLocators {
  readonly userNameInput: Locator = this.baseLocator.locator(
    `input[placeholder='Username']`
  );

  readonly emailInput: Locator = this.baseLocator.locator(
    `input[placeholder='Email']`
  );
  readonly passwordInput: Locator = this.baseLocator.locator(
    `input[placeholder='Password']`
  );
  readonly signUpButton: Locator = this.baseLocator.locator(
    `//button[normalize-space(text())='Sign up']`
  );

  readonly signUpHeading: Locator = this.baseLocator.locator(
    `//h1[normalize-space(text())='Sign up']`
  );

  readonly errorMessages: Locator = this.baseLocator.locator(
    `//ul[@class='error-messages']//li[1]`
  );
  // readonly userNameErrorMessages: Locator = this.baseLocator.locator(
  //   'xpath=//ul[@class="error-messages"]/li[text()="username can\'t be blank"]'
  // );
  // readonly emailErrorMessages: Locator = this.baseLocator.locator(
  //   'xpath=//ul[@class="error-messages"]/li[text()="email can\'t be blank"]'
  // );
}
