import { test, expect } from '@playwright/test';
import {
  isPositive,
  greetingsByTime,
  passingScore,
  comparingNumbers,
} from './functions';

test.describe('Even or odd number', () => {
  /*
  1. Парне чи непарне число
  Напишіть програму, яка визначає, чи число парне або непарне.
  Вхід: Число (наприклад, 4)
  Вихід:
  - "Число парне."
  - "Число непарне."
  */
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
});

test.describe('Greetings on time', () => {
  /*
  2. Привітання за часом
  Залежно від часу доби, виведіть привітання: "Доброго ранку!", "Доброго дня!" або "Доброго вечора!".
  Вхід: Година (наприклад, 15)
  Вихід:
  - If hour < 12: "Good morning!"
  - If hour 12–18: "Good afternoon!"
  - If hour > 18: "Good evening!"
  */

  test('is morning', async () => {
    const result = greetingsByTime(6);
    expect(result === 'Good morning!').toBeTruthy();
  });

  test('is afternoon', async () => {
    const result = greetingsByTime(12);
    expect(result === 'Good afternoon!').toBeTruthy();
  });

  test('is evening', async () => {
    const result = greetingsByTime(21);
    expect(result === 'Good evening!').toBeTruthy();
  });

  test('is night', async () => {
    const result = greetingsByTime(24);
    expect(result === 'Good night!').toBeTruthy();
  });

  test('is night (00:00:00)', async () => {
    const result = greetingsByTime(0);
    expect(result === 'Good night!').toBeTruthy();
  });

  test('is negative - min time', async () => {
    const result = greetingsByTime(-1);
    expect(result === 'Incorrect time!').toBeTruthy();
  });

  test('is negative - max time', async () => {
    const result = greetingsByTime(25);
    console.log(result);
    expect(result === 'Incorrect time!').toBeTruthy();
  });
});

test.describe('Exam score', () => {
  /*
3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)
*/

  test('Pass', async () => {
    const result = passingScore(50);
    expect(result).toBeTruthy();
  });

  test('Pass - max value', async () => {
    const result = passingScore(100);
    expect(result).toBeTruthy();
  });

  test('Failed', async () => {
    const result = passingScore(49);
    expect(result).toBeFalsy();
  });

  test('Zero value', async () => {
    const result = passingScore(0);
    expect(result).toBeFalsy();
  });

  test('Negative value', async () => {
    const result = passingScore(-1);
    expect(result).toBeFalsy();
  });

  test('Score higher than maximum', async () => {
    const result = passingScore(101);
    expect(result).toBeFalsy();
  });
});

test.describe('Voting age', () => {
  /*
4. Вік для голосування
Напишіть програму, яка перевіряє, чи можна користувачу голосувати.
Вхід: Вік (наприклад, 17)
Вихід:
- Якщо >= 18: "Ви можете голосувати."
- Інакше: "Ви ще не можете голосувати."

*/
});

/*
5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."
*/

test.describe('Comparing numbers', () => {
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 3;
  test('The first number is bigger. @positive', async () => {
    const result = comparingNumbers(b, a);
    expect(result === b);
  });

  test('The second number is bigger. @positive', async () => {
    const result = comparingNumbers(a, b);
    expect(result === b);
  });

  test('The numbers are equal. @positive', async () => {
    const result = comparingNumbers(c, d);
    expect(result === c && result === d);
  });

  test('The first number is bigger. @negative', async () => {
    const result = comparingNumbers(a, b);
    expect(result === a).toBeFalsy();
  });

  test('The second number is bigger. @negative', async () => {
    const result = comparingNumbers(b, a);
    expect(result === a).toBeFalsy();
  });

  test('The numbers are equal. @negative', async () => {
    const result = comparingNumbers(a, b);
    expect(result === a || result === b).toBeFalsy();
  });
});

/*
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
