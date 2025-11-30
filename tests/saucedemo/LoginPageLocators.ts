import { Locator } from '@playwright/test';
import { BaseLocators } from './BaseLocators';

export class LoginPageLocators extends BaseLocators {
  readonly userNameInput: Locator = this.baseLocator.locator('#user-name');
  readonly passwordInput: Locator = this.baseLocator.locator('#password');
  readonly loginButton: Locator = this.baseLocator.locator('#login-button');
}
