/*
Задание 5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.
Удачи!
 */

const customPow = (x, n) => {
    //рука чесалась написать return Math.pow(x, n)

    if (x !== parseInt(x) || x < 1) {
        throw Error(`Wrong function parameter x (base should be integer greater than 0)`);
    }

    if (n !== parseInt(n) || n < 1) {
        throw Error(`Wrong function parameter n (power should be integer greater than 0)`);
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
};


console.log(customPow(1, 5));
console.log(customPow(5, 2));
console.log(customPow(3, 3));
console.log(customPow(5, -2));