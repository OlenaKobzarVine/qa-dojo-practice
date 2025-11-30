import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { TestData } from './TestData';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';

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

test('Login with valid user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const user = TestData.getValidUser();

  await loginPage.open();
  await loginPage.login(user.username, user.password);
  console.log(user.username, user.password);
  await expect(inventoryPage.inventoryContainer).toBeVisible();
  await inventoryPage.logout();
});

test('Add products to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const user = TestData.getValidUser();

  await loginPage.navigateTo('/');
  await loginPage.login(user.username, user.password);

  await inventoryPage.addProductToCart(TestData.PRODUCTS.BACKPACK);
  await inventoryPage.addProductToCart(TestData.PRODUCTS.BIKE_LIGHT);

  const cartCount = await inventoryPage.getCartProductsCount();
  expect(cartCount).toBe(2);
});

test('Delete products from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const user = TestData.getValidUser();
  const products = Object.values(TestData.PRODUCTS);

  await loginPage.navigateTo('/');
  await loginPage.login(user.username, user.password);

  for (const product of products) {
    await inventoryPage.addProductToCart(product);
  }

  const cartCount = await inventoryPage.getCartProductsCount();
  console.log(cartCount);
  expect(cartCount).toBe(products.length);

  for (const product of products) {
    await inventoryPage.removeProductFromCart(product);
  }

  const emptyCartCount = await inventoryPage.getCartProductsCount();
  console.log(emptyCartCount);
  expect(emptyCartCount).toBe(0);
});

test('Calculate the cost of the order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const user = TestData.getValidUser();
  const products = Object.values(TestData.PRODUCTS);

  await loginPage.navigateTo('/');
  await loginPage.login(user.username, user.password);

  for (const product of products) {
    await inventoryPage.addProductToCart(product);
  }

  const cartCount = await inventoryPage.getCartProductsCount();
  console.log(cartCount);
  expect(cartCount).toBe(products.length);

  await inventoryPage.openCart();

  let totalPrice = 0;
  for (const product of products) {
    let productPrice = await cartPage.getPriceByTitle(product);
    totalPrice = totalPrice + productPrice;
  }

  console.log(totalPrice);
  expect(totalPrice).toBe(129.94);
});
