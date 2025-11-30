import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly cancelBtn: Locator;
  readonly continue: Locator;

  constructor(page: Page) {
    super(page);
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.cancelBtn = page.locator('#cancel');
    this.continue = page.locator('#continue');
  }

  async fillInRequiredFields() {}
  async cancelCheckoutPage() {}
  async continueCheckout() {}
}
