import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

// export interface User {
//   username: string;
//   password: string;
// }

// export class BasePage {
//   readonly page: Page;

//   constructor(page: Page) {
//     this.page = page;
//   }
//   async navigateTo(url: string) {
//     await this.page.goto(url);
//   }
// }

// export class LoginPage extends BasePage {
//   readonly userNameInput: Locator;
//   readonly passwordInput: Locator;
//   readonly loginButton: Locator;

//   constructor(page: Page) {
//     super(page);
//     this.userNameInput = page.locator('#user-name');
//     this.passwordInput = page.locator('#password');
//     this.loginButton = page.locator('#login-button');
//   }

//   async open() {
//     await this.navigateTo('/');
//   }

//   async login(username: string, password: string) {
//     await this.userNameInput.fill(username);
//     await this.passwordInput.fill(password);
//     await this.loginButton.click();
//   }
// }

// export class InventoryPage extends BasePage {
//   readonly inventoryContainer: Locator;
//   readonly cartBadge: Locator;
//   readonly burgerMenu: Locator;
//   readonly logoutLink: Locator;

//   constructor(page: Page) {
//     super(page);
//     this.inventoryContainer = page.locator('.inventory_container');
//     this.cartBadge = page.locator('.shopping_cart_badge');
//     this.burgerMenu = page.locator('#react-burger-menu-btn');
//     this.logoutLink = page.locator('#logout_sidebar_link');
//   }

  /*
1) addToCartByTitle()
2) removeFromCartByTitle()
3) getPriceByTitle()
  */

//   async getProductByName(productName: string) {
//     return this.page.locator(`.inventory_item:has-text("${productName}")`);
//   }

//   async addProductToCart(productName: string) {
//     const product = await this.getProductByName(productName);
//     await product.locator('button:has-text("Add to cart")').click();
//   }

//   async removeProductFromCart(productName: string) {
//     const product = await this.getProductByName(productName);
//     await product.locator('button:has-text("Remove")').click();
//   }

//   async getCartProductsCount() {
//     const isVisible = await this.cartBadge.isVisible();
//     if (!isVisible) return 0;

//     const text = await this.cartBadge.textContent();
//     return parseInt(text || '0'); // falsy
//   }

//   async logout() {
//     await this.burgerMenu.click();
//     await this.logoutLink.click();
//   }
// }

// export class CartPage extends BasePage {
//   readonly AAA = Locator;
//   readonly AAA = Locator;
//   readonly AAA = Locator;
//   readonly AAA = Locator;
//   readonly AAA = Locator;

//   constructor(page: Page) {
//     super(page);
//     this.AAA = page.locator('');
//     this.AAA = page.locator('');
//     this.AAA = page.locator('');
//     this.AAA = page.locator('');
//     this.AAA = page.locator('');
//   }
  /*
  1) removeFromCartByTitle()
  2) getPriceByTitle()
  3) checkout()
  4) continueShopping()
  */
}

// export class TestData {
//   static readonly STANDARD_USER = 'standard_user';
//   static readonly LOCKED_OUT_USER = 'locked_out_user';
//   static readonly PROBLEM_USER = 'problem_user';
//   static readonly PERFORMANCE_GLITCH_USER = 'performance_glitch_user';
//   static readonly ERROR_USER = 'error_user';
//   static readonly VISUAL_USER = 'visual_user';

//   static readonly PASSWORD = 'secret_sauce';

//   static readonly PRODUCTS = {
//     BACKPACK: 'Sauce Labs Backpack',
//     BIKE_LIGHT: 'Sauce Labs Bike Light',
//     BOLT_TSHIRT: 'Sauce Labs Bolt T-Shirt',
//     FLEECE_JACKET: 'Sauce Labs Fleece Jacket',
//     ONESIE: 'Sauce Labs Onesie',
//     TSHIRT_RED: 'Test.allTheThings() T-Shirt (Red)',
//   };

//   static getValidUser() {
//     return {
//       username: this.STANDARD_USER,
//       password: this.PASSWORD,
//     };
//   }
// }
