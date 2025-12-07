import { Locator } from '@playwright/test';
import { BaseLocators } from '../BasePage/BaseLocators';

export class InventoryPageLocators extends BaseLocators {
  readonly inventoryContainer: Locator = this.baseLocator.locator(
    '.inventory_container'
  );
  readonly cartBadge: Locator = this.baseLocator.locator(
    '.shopping_cart_badge'
  );
  readonly burgerMenu: Locator = this.baseLocator.locator(
    '#react-burger-menu-btn'
  );
  readonly logoutLink: Locator = this.baseLocator.locator(
    '#logout_sidebar_link'
  );
  readonly shoppingCart: Locator = this.baseLocator.locator(
    '.shopping_cart_link'
  );
}
