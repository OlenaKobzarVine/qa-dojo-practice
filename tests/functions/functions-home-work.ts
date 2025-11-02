import { test, expect } from '@playwright/test';

/*
1. Парне чи непарне число
Напишіть програму, яка визначає, чи число парне або непарне.
Вхід: Число (наприклад, 4)
Вихід:
- "Число парне."
- "Число непарне."
*/
function isPositive(number: number) {
  if (typeof number === 'number') {
    if (number > 0) {
      console.log('number is positive');
      return true;
    } else if (number === 0) {
      console.log('number is negative');
      return false;
    } else {
      console.log('number is negative');
      return false;
    }
  } else {
    throw Error('pls use number to check if it positive');
  }
}
// Класи еквівалентності
// positive
// negative
// zero
// Граничні значення
// 1
// 0
// -1
// + бескінечність
// - бескінечність
test('is positive', async () => {
  const result = isPositive(1);
  expect(result).toBeTruthy();
});

test('is positive - max value', async () => {
  const result = isPositive(1.7976931348623157e308);
  expect(result).toBeTruthy();
});

test('is negative', async () => {
  const result = isPositive(-1);
  expect(result).toBeFalsy();
});

test('is negative - min value', async () => {
  const result = isPositive(-1.7976931348623157e308);
  expect(result).toBeFalsy();
});

test('zero should trow exception', () => {
  try {
    isPositive(0);
  } catch (error) {
    expect((error as Error).message).toMatch('number is zero');
  }
});

/*
2. Привітання за часом
Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
Вхід: Година (наприклад, 15)
Вихід:
- If hour < 12: "Good morning!"
- If hour 12–18: "Good afternoon!"
- If hour > 18: "Good evening!"
*/

function greetingsByTime(number: number) {
  if (typeof number === 'number') {
    if (number >= 6 && number < 12) {
      console.log('Good morning!');
      return 'Good morning!';
    } else if (number >= 12 && number <= 18) {
      console.log('Good afternoon!');
      return 'Good afternoon!';
    } else if (number > 18 && number < 22) {
      console.log('Good evening!');
      return 'Good evening!';
    } else if (number >= 22 && number <= 24 && number >= 0 && number < 6) {
      console.log('Good night!');
      return 'Good night!';
    } else if (number < 0 || number > 24) {
      console.log('Incorrect time!');
      return 'Incorrect time!';
    }
  } else {
    throw Error('Enter a numeric value');
  }
}

test('is morning', async () => {
  const result = greetingsByTime(6);
  expect(result).toBeTruthy();
});

test('is afternoon', async () => {
  const result = greetingsByTime(12);
  expect(result).toBeTruthy();
});

test('is evening', async () => {
  const result = greetingsByTime(21);
  expect(result).toBeTruthy();
});

test('is night', async () => {
  const result = greetingsByTime(24);
  expect(result).toBeTruthy();
});

test('is negative - min value', async () => {
  const result = greetingsByTime(-1);
  expect(result).toBeFalsy();
});

test('is negative - max value', async () => {
  const result = greetingsByTime(25);
  expect(result).toBeFalsy();
});

/*

3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)

4. Вік для голосування
Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
Вхід: Вік (наприклад, 17)
Вихід:
- Якщо >= 18: "Ви можете голосувати."
- Інакше: "Ви ще не можете голосувати."

5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."

6. Дорога і світлофор
Якщо зелений — переходьте.
Якщо жовтий — підготуйтеся.
Якщо червоний — зачекайте.
Вхід: Колір світлофора (наприклад, "жовтий")

7. Визначення типу числа
Напишіть програму, яка визначає, чи число додатнє, від’ємне або дорівнює нулю.
Вхід: Число (наприклад, -5)
Вихід:
- "Число додатнє."
- "Число від’ємне."
- "Число дорівнює нулю."


⛏ просунутий рівень 
Написати 1, 2 та 4 програми Unit тести => приклад виконання
*/
