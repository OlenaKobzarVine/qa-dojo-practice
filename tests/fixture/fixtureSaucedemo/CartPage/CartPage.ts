import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { CartPageLocators } from './CartPageLocators';

export class CartPage extends BasePage {
  private cartList = this.page.locator('.cart_list');
  private checkoutBtn = this.page.locator('#checkout');
  private continueShoppingBtn = this.page.locator('#continue-shopping');
  private cartBadge = this.page.locator('.shopping_cart_badge');
  public locators: CartPageLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new CartPageLocators(page.locator('#contents_wrapper'));

    //   super(page);
    //   this.cartList = page.locator('.cart_list');
    //   this.checkoutBtn = page.locator('#checkout');
    //   this.continueShoppingBtn = page.locator('#continue-shopping');
  }

  /*
  1) removeFromCartByTitle()
  2) getPriceByTitle()
  3) checkout()
  4) continueShopping()
  */

  private async getProductByName(productName: string) {
    return this.page.locator(`.cart_item:has-text("${productName}")`);
  }

  async getPriceByTitle(productName: string) {
    const product = await this.getProductByName(productName);
    const priceText =
      (await product.locator('.inventory_item_price').textContent()) || '';
    return parseFloat(priceText.replace('$', '') || '0');
  }

  async getCartProductsCount(timeout: number) {
    /*
    let isVisible = false;
    try {
      await this.cartBadge.isVisible({ timeout });
      isVisible = true;
    } catch (e) {
      return 0;
    }
    */

    const count = await this.locators.cartBadge.count();

    if (count === 0) {
      return 0;
    }


    const text = await this.cartBadge.textContent();
    return parseInt(text || '0'); // falsy
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
