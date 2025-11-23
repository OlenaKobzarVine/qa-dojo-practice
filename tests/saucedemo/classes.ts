import { Page, Locator, expect } from '@playwright/test';

export interface User {
  username: string;
  password: string;
}

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}

export class LoginPage extends BasePage {
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly credentialsContainer: Locator;
  readonly passwordContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.credentialsContainer = page.locator('#login_credentials');
    this.passwordContainer = page.locator('.login_password');
  }

  async open() {
    await this.navigateTo('/');
  }

  async login(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isErrorDisplayed(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }

  async getErrorText(): Promise<string> {
    return (await this.errorMessage.textContent()) || '';
  }

  async clearInputs() {
    await this.userNameInput.clear();
    await this.passwordInput.clear();
  }
}

export class InventoryPage extends BasePage {
  readonly inventoryContainer: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCart: Locator;
  readonly cartBadge: Locator;
  readonly burgerMenu: Locator;
  readonly logoutLink: Locator;
  readonly sortDropdown: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryContainer = page.locator('.inventory_container');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.pageTitle = page.locator('.title');
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }
}

export class TestData {
  static readonly STANDARD_USER = 'standard_user';
  static readonly LOCKED_OUT_USER = 'locked_out_user';
  static readonly PROBLEM_USER = 'problem_user';
  static readonly PERFORMANCE_GLITCH_USER = 'performance_glitch_user';
  static readonly ERROR_USER = 'error_user';
  static readonly VISUAL_USER = 'visual_user';

  static readonly PASSWORD = 'secret_sauce';

  static getValidUser() {
    return {
      username: this.STANDARD_USER,
      password: this.PASSWORD,
    };
  }
}
