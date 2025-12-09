import { expect } from '@playwright/test';
import { test } from './MyFixture';
import { TestData } from './TestData';
import { LoginPage } from './LoginPage/LoginPage';
import { InventoryPage } from './InventoryPage/InventoryPage';
import { CartPage } from './CartPage/CartPage';
import { CheckoutPage } from './CheckoutPage/CheckoutPage';

/*
домашня робота:
Створіть класи для сторінок сайту https://www.saucedemo.com/


+ сторінка логін повинна мати методи для того щоб зайти в сайт
https://www.saucedemo.com/

сторінка inventory повинна мати методи
https://www.saucedemo.com/inventory.html

+ 1) addToCartByTitle()
2) removeFromCartByTitle()
3) getPriceByTitle()
... подумайте що ще можна додати

сторінка cart
https://www.saucedemo.com/cart.html
методи

1) removeFromCartByTitle()
2) getPriceByTitle()
3) checkout()
4) continueShopping()

сторінка checkout-step-one
https://www.saucedemo.com/checkout-step-one.html

1) fillFirstName()
2) fillLastName()
3) fillZipCode()
4) continue()

сторінка checkout-step-two
методи

! придумайте самі

 -------------------
навколо цих класів напишіть 3-5 тестів на ваш вибір.
*/

test(
  'Login with valid user',
  { tag: ['@LoginPage'] },
  async ({ inventoryPage }) => {
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);

    // const user = TestData.getValidUserData();

    // await loginPage.navigateTo('/');
    // await loginPage.login(user.username, user.password);
    await expect(inventoryPage.locators.inventoryContainer).toBeVisible();
  }
);

test(
  'Add products to cart on Inventory Page',
  { tag: ['@LoginPage', '@InventoryPage'] },
  async ({ inventoryPage }) => {
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);

    // const user = TestData.getValidUser();

    // await loginPage.navigateTo('/');
    // await loginPage.login(user.username, user.password);

    await inventoryPage.addProductToCart(TestData.products.backpack);
    await inventoryPage.addProductToCart(TestData.products.bikeLight);

    const cartCount = await inventoryPage.getCartProductsCount(500);
    expect(cartCount).toBe(2);
  }
);

test(
  'Delete products from cart on Inventory Page',
  { tag: ['@LoginPage', '@InventoryPage'] },
  async ({ inventoryPage }) => {
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);

    // const user = TestData.getValidUserData();
    const products = Object.values(TestData.products);

    // await loginPage.navigateTo('/');
    // await loginPage.login(user.username, user.password);

    for (const product of products) {
      await inventoryPage.addProductToCart(product);
    }

    const cartCount = await inventoryPage.getCartProductsCount(500);
    console.log(cartCount);
    expect(cartCount).toBe(products.length);

    for (const product of products) {
      await inventoryPage.removeProductFromCart(product);
    }

    const emptyCartCount = await inventoryPage.getCartProductsCount(1000);
    console.log(emptyCartCount);
    expect(emptyCartCount).toBe(0);
  }
);

test(
  'Calculate the cost of the order on Cart Page',
  { tag: ['@LoginPage', '@InventoryPage', '@CartPage'] },
  async ({ inventoryPage, cartPage }) => {
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);
    // const cartPage = new CartPage(page);

    // const user = TestData.getValidUserData();
    const products = Object.values(TestData.products);

    // await loginPage.navigateTo('/');
    // await loginPage.login(user.username, user.password);

    for (const product of products) {
      await inventoryPage.addProductToCart(product);
    }

    const cartCount = await inventoryPage.getCartProductsCount(500);
    console.log(cartCount);
    expect(cartCount).toBe(products.length);

    await inventoryPage.openCart();

    let totalPrice = 0;
    for (const product of products) {
      let productPrice = await cartPage.getPriceByTitle(product);
      totalPrice += productPrice;
    }

    console.log(totalPrice);
    expect(totalPrice).toBe(129.94);
  }
);

test(
  'Delete products from cart on Cart Page',
  { tag: ['@LoginPage', '@InventoryPage', '@CartPage'] },
  async ({ inventoryPage, cartPage }) => {
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);
    // const cartPage = new CartPage(page);

    // const user = TestData.getValidUserData();
    const products = Object.values(TestData.products);

    // await loginPage.navigateTo('/');
    // await loginPage.login(user.username, user.password);

    for (const product of products) {
      await inventoryPage.addProductToCart(product);
    }

    const cartCount = await inventoryPage.getCartProductsCount(500);
    console.log(`cartCount: ${cartCount}`);
    expect(cartCount).toBe(products.length);

    await inventoryPage.openCart();

    for (const product of products) {
      await cartPage.removeFromCartByTitle(product);
    }

    const emptyCartCount = await cartPage.getCartProductsCount(500);
    console.log(`emptyCartCount: ${emptyCartCount}`);
    expect(emptyCartCount).toBe(0);
  }
);

test(
  'Fill in required checkout fields and continue',
  { tag: ['@LoginPage', '@InventoryPage', '@CartPage', '@CheckoutPage'] },
  async ({ inventoryPage, cartPage, checkoutPage, page }) => {
    // const loginPage = new LoginPage(page);
    // const inventoryPage = new InventoryPage(page);
    // const cartPage = new CartPage(page);
    // const checkoutPage = new CheckoutPage(page);

    // const user = TestData.getValidUserData();
    const products = Object.values(TestData.products);

    // await loginPage.navigateTo('/');
    // await loginPage.login(user.username, user.password);

    for (const product of products) {
      await inventoryPage.addProductToCart(product);
    }

    const cartCount = await inventoryPage.getCartProductsCount(500);
    console.log(`cartCount: ${cartCount}`);
    expect(cartCount).toBe(products.length);

    await inventoryPage.openCart();
    await cartPage.checkout();

    const requiredData = TestData.getRequiredData();
    await checkoutPage.fillInRequiredFields(requiredData);
    await expect(page).toHaveURL(/checkout-step-two.html/);
  }
);
