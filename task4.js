/*
Напишите функцию, которая принимает два числа.
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.
Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15
(всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
 */

//вариант 1 (в лоб)
const printIntRange1 = (num1, num2) => {
    for (let i = num1, multiplier = 0; i <= num2; i++, multiplier++) {
        setTimeout(num => console.log(num), 1000 * multiplier, i);
    }
};

//вариант 2
const printIntRange2 = (num1, num2) => {
    let currentNumber = num1;
    let timerId = setInterval(() => {
        console.log(currentNumber);
        currentNumber++;
        if (currentNumber > num2) {
            clearInterval(timerId);
        }
    }, 1000);
};

//printIntRange1(5, 8);
printIntRange2(1, 15);