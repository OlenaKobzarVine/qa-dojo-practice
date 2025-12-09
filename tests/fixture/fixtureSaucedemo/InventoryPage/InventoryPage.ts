import { Page } from '@playwright/test';
import { BasePage } from '../BasePage/BasePage';
import { InventoryPageLocators } from './InventoryPageLocators';

export class InventoryPage extends BasePage {
  readonly locators: InventoryPageLocators;

  // readonly inventoryContainer: Locator;
  // readonly cartBadge: Locator;
  // readonly burgerMenu: Locator;
  // readonly logoutLink: Locator;
  // readonly shoppingCart: Locator;

  constructor(page: Page) {
    super(page);
    this.locators = new InventoryPageLocators(page.locator('#page_wrapper'));
    // this.inventoryContainer = page.locator('.inventory_container');
    // this.cartBadge = page.locator('.shopping_cart_badge');
    // this.burgerMenu = page.locator('#react-burger-menu-btn');
    // this.logoutLink = page.locator('#logout_sidebar_link');
    // this.shoppingCart = page.locator('.shopping_cart_link');
  }

  /*
1) addToCartByTitle()
2) removeFromCartByTitle()
3) getPriceByTitle()
  */
  async openCart() {
    await this.locators.shoppingCart.click();
  }

  private async getProductByName(productName: string) {
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

  async getCartProductsCount(timeout: number) {
    /*
    let isVisible = false;
    try {
      await this.locators.cartBadge.isVisible({ timeout });
      isVisible = true;
    } catch (e) {
      return 0;
    }
    */

    const count = await this.locators.cartBadge.count();

    if (count === 0) {
      return 0;
    }

    const text = await this.locators.cartBadge.textContent();
    return parseInt(text || '0'); // falsy
  }

  async logout() {
    await this.locators.burgerMenu.click({ delay: 1000 });
    await this.locators.logoutLink.click({ delay: 1000 });
  }
}
