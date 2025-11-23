import { test, expect } from '@playwright/test';
import { LoginPage, TestData, InventoryPage } from './classes';
/*
домашня робота:
Створіть класи для сторінок сайту https://www.saucedemo.com/


сторінка логін повинна мати методи для того щоб зайти в сайт
https://www.saucedemo.com/

сторінка inventory повинна мати методи
https://www.saucedemo.com/inventory.html

1) addToCartByTitle()
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
