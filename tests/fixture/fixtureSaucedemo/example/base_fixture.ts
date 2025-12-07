/**
 * base-fixture.ts
 * 
 * Базова фікстура для Playwright тестів.
 * Фікстури - це спосіб підготовки середовища для тестів (setup) та його очищення (teardown).
 * 
 * Переваги фікстур:
 * - Повторне використання коду
 * - Ізоляція тестів
 * - Автоматичне управління ресурсами
 * 
 * Використання:
 * import { test } from './base-fixture';
 * 
 * test('my test', async ({ start }) => {
 *   // тест автоматично виконає навігацію до сайту
 * });
 */

import { test as base, expect } from "@playwright/test";

// Визначаємо тип нашої фікстури
// void означає, що фікстура не повертає значення, а просто виконує дію
type MyFixture = {
  start: void;
};

/**
 * Розширюємо базовий test об'єкт Playwright новою фікстурою 'start'
 * 
 * base.extend<MyFixture> - додає нову фікстуру до тесту
 * 
 * Параметри фікстури:
 * - page: об'єкт сторінки Playwright (автоматично надається)
 * - use: функція, яка викликається після setup і перед teardown
 */
export const test = base.extend<MyFixture>({
  start: async ({ page }, use) => {
    // SETUP: виконується перед тестом
    // Навігація на сайт
    await page.goto("https://demo.learnwebdriverio.com");
    
    // Перевірка, що навігаційне меню видиме
    await expect(page.getByTestId("site-nav")).toBeVisible();
    
    // use() - сигналізує, що setup завершено і можна запускати тест
    // Все що після use() - це teardown (виконається після тесту)
    await use();
    
    // TEARDOWN: тут можна додати код очищення (якщо потрібно)
    // Наприклад: await page.close();
  },
});

/**
 * ПРИКЛАД ВИКОРИСТАННЯ:
 * 
 * import { test } from './base-fixture';
 * 
 * test('should display navigation', async ({ start }) => {
 *   // Сторінка вже завантажена завдяки фікстурі 'start'
 *   // Можна відразу працювати з елементами
 * });
 */