import { Locator } from '@playwright/test';
import { BaseLocators } from '../BasePage/BaseLocators';

export class CheckoutPageLocators extends BaseLocators {
  readonly firstNameInput: Locator = this.baseLocator.locator('#first-name');
  readonly lastNameInput: Locator = this.baseLocator.locator('#last-name');
  readonly postalCodeInput: Locator = this.baseLocator.locator('#postal-code');
  readonly cancelBtn: Locator = this.baseLocator.locator('#cancel');
  readonly continueBtn: Locator = this.baseLocator.locator('#continue');
}
