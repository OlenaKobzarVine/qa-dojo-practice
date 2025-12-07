import { Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { CheckoutPageLocators } from './CheckoutPageLocators';

export class CheckoutPage extends BasePage {
  readonly locators: CheckoutPageLocators;

  // readonly firstName: Locator;
  // readonly lastName: Locator;
  // readonly postalCode: Locator;
  // readonly cancelBtn: Locator;
  // readonly continue: Locator;

  constructor(page: Page) {
    super(page);
    this.locators = new CheckoutPageLocators(page.locator('#contents_wrapper'));
    //   this.firstName = page.locator('#first-name');
    //   this.lastName = page.locator('#last-name');
    //   this.postalCode = page.locator('#postal-code');
    //   this.cancelBtn = page.locator('#cancel');
    //   this.continue = page.locator('#continue');
  }

  async fillInRequiredFields(requiredData: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }) {
    await this.locators.firstNameInput.fill(requiredData.firstName);
    await this.locators.lastNameInput.fill(requiredData.lastName);
    await this.locators.postalCodeInput.fill(requiredData.postalCode);
    await this.locators.continueBtn.click();
  }

  async cancelCheckoutPage() {}

  async continueCheckout() {}
}
