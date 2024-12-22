/*
Задание 1.

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

Удачи!
 */

const calcEvenOddArrElems = arr => {
    if (!Array.isArray(arr)) {
        throw Error('Array should be an array');
    }

    let [ even, odd, zeros] = [0, 0, 0];

    for (let elem of arr) {
        if (typeof elem == 'string') {
           elem = parseInt(elem);
        }

        if (isNaN(elem) || typeof elem !== "number") {
            continue;
        }

        if (elem === 0) {
            zeros++;
        } else if (elem % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    console.log(`Четных: ${even}, нечетных: ${odd}, нулевых: ${zeros}`);
};

calcEvenOddArrElems(['16', ()=>{}, [], 5, undefined, NaN, 4, null, 0, '2', 'qqqq123']);