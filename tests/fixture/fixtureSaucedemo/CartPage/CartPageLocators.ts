import { Locator } from '@playwright/test';
import { BaseLocators } from '../BasePage/BaseLocators';

export class CartPageLocators extends BaseLocators {
  readonly cartList: Locator = this.baseLocator.locator('.cart_list');
  readonly checkoutBtn: Locator = this.baseLocator.locator('#checkout');
  readonly continueShoppingBtn: Locator =
    this.baseLocator.locator('#continue-shopping');
  readonly cartBadge: Locator = this.baseLocator.locator(
    '.shopping_cart_badge'
  );
}
