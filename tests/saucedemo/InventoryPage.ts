import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly inventoryContainer: Locator;
  readonly cartBadge: Locator;
  readonly burgerMenu: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryContainer = page.locator('.inventory_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  /*
1) addToCartByTitle()
2) removeFromCartByTitle()
3) getPriceByTitle()
  */

  async getProductByName(productName: string) {
    return this.page.locator(`.inventory_item:has-text("${productName}")`);
  }

  async addProductToCart(productName: string) {
    const product = await this.getProductByName(productName);
    await product.locator('button:has-text("Add to cart")').click();
  }

  async removeProductFromCart(productName: string) {
    const product = await this.getProductByName(productName);
    await product.locator('button:has-text("Remove")').click();
  }

  async getCartProductsCount() {
    const isVisible = await this.cartBadge.isVisible();
    if (!isVisible) return 0;

    const text = await this.cartBadge.textContent();
    return parseInt(text || '0'); // falsy
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }
}
