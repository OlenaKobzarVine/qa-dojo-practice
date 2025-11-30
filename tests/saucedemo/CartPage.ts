import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartList: Locator;
  readonly checkoutBtn: Locator;
  readonly continueShoppingBtn: Locator;
  // readonly AAA = Locator;
  // readonly AAA = Locator;

  constructor(page: Page) {
    super(page);
    this.cartList = page.locator('.cart_list');
    this.checkoutBtn = page.locator('#checkout');
    this.continueShoppingBtn = page.locator('#continue-shopping');
    // this.AAA = page.locator('');
    // this.AAA = page.locator('');
  }
  /*
  1) removeFromCartByTitle()
  2) getPriceByTitle()
  3) checkout()
  4) continueShopping()
  */

  async getProductByName(productName: string) {
    return this.page.locator(`.cart_item:has-text("${productName}")`);
  }

  async getPriceByTitle(productName: string) {
    const product = await this.getProductByName(productName);
    const priceText =
      (await product.locator('.inventory_item_price').textContent()) || '';
    return parseFloat(priceText.replace('$', '') || '0');
  }

  async checkout() {
    await this.checkoutBtn.click();
  }

  async removeFromCartByTitle(productName: string) {
    const product = await this.getProductByName(productName);
    await product.locator('button:has-text("Remove")').click();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }
}
