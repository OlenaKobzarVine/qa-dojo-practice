export function isPositive(number: number): boolean {
  if (typeof number === 'number') {
    if (number > 0) {
      return true;
    } else if (number === 0) {
      return false;
    } else {
      return false;
    }
  } else {
    throw Error('pls use number to check if it positive');
  }
}

export function greetingsByTime(number: number) {
  if (typeof number === 'number') {
    if (number >= 6 && number < 12) {
      return 'Good morning!';
    } else if (number >= 12 && number <= 18) {
      return 'Good afternoon!';
    } else if (number > 18 && number < 22) {
      return 'Good evening!';
    } else if ((number >= 22 && number <= 24) || (number >= 0 && number < 6)) {
      return 'Good night!';
    } else if (number < 0 || number > 24) {
      return 'Incorrect time!';
    }
  } else {
    throw Error('Enter a numeric value');
  }
}

/*
3. Перевірка оцінки
Якщо бал >= 50 — "Тест складено".
Якщо < 50 — "Тест не складено".
Вхід: Бал (наприклад, 42)
*/
export function passingScore(number: number) {
  if (typeof number === 'number') {
    if (number >= 50 && number <= 100) {
      return true;
    } else if (number < 50 && number >= 0) {
      return false;
    } else if (number < 0 || number > 100) {
      return false;
    }
  } else {
    throw Error('Enter a numeric value');
  }
}

/*
5. Порівняння чисел
Порівняйте два числа: виведіть більше, або повідомте, що числа рівні.
Вхід: Два числа (наприклад, 8 і 10)
Вихід:
- "Перше число більше."
- "Друге число більше."
- "Числа рівні."
*/

export function comparingNumbers(number1: number, number2: number) {
  if (typeof number1 === 'number' && typeof number2 === 'number') {
    if (number1 > number2) {
      return number1;
    } else if (number1 < number2) {
      return number2;
    } else {
      return number1;
    }
  }
}
