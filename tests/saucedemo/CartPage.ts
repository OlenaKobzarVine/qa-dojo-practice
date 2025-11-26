import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly AAA = Locator;
  readonly AAA = Locator;
  readonly AAA = Locator;
  readonly AAA = Locator;
  readonly AAA = Locator;

  constructor(page: Page) {
    super(page);
    this.AAA = page.locator('');
    this.AAA = page.locator('');
    this.AAA = page.locator('');
    this.AAA = page.locator('');
    this.AAA = page.locator('');
  }
  /*
  1) removeFromCartByTitle()
  2) getPriceByTitle()
  3) checkout()
  4) continueShopping()
  */
}
