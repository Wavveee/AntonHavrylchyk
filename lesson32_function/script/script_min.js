"use strict";

//      1

// function variant1 () {}

// let variant2 = function() {};



//      2  Не дуже зрозумів умову

// function counter(value1, value2, value3, value4) {

//     let argumentsSum = 0

//     if (value1) argumentsSum += 1

//     if (value2) argumentsSum += 1

//     if (value3) argumentsSum += 1

//     if (value4) argumentsSum += 1

//     return `Кількість переданих аргументів ${argumentsSum}` 
// }

// console.log(counter())



//      3

// alert(`Задайте числа для порівняння на більше менше`);

// const firstNumber = +prompt(`Перше число`, ``);

// const secondNumber = +prompt(`Друге число`, ``);

// alert(comparison(firstNumber, secondNumber));

// function comparison(a, b) {
//     if (a === b) {
//         return 0;
//     }

//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// }



//      4

// const num = +prompt('Факторіал якого числа вам потрібен?', '');

// calculateFactorial(num)

// function calculateFactorial(x) {

//     let factorial = 1

//     for (let i = 1; i <= x; i++) {

//         factorial *= i
//     }

//     alert(`Факторіал вашого числа ${factorial}`);

// }



//      5

// alert(`Задайте три числа`)

// const firstValue = prompt(`Перше число`, ``)

// const secondValue = prompt(`Друге число`, ``)

// const thirdValue = prompt(`Третє число`, ``)

// constructNumber (firstValue, secondValue, thirdValue)

// function constructNumber (firstNum, secondNum, thirdNum) {

//     let newNumber

//     newNumber = firstNum + secondNum + thirdNum

//     if (+newNumber) {

//         alert(`Створене число ${+newNumber}`)
//     } else {

//         alert(`Подано некоректні дані`)
//     }
// }



//      6

// alert(`Знайдемо площу прямокутника`)

// const rectangleLength = +prompt(`Яка його довжина? (см)`, ``)

// const rectangleWidth = +prompt(`Яка його ширина? (см)`, ``)

// areaRectangleSquare (rectangleLength, rectangleWidth)

// function areaRectangleSquare(length, width) {

//     if (!length && !width) {
        
//         alert(`Подано некоректні дані`)

//     } else if (length === width || !length) {

//         alert(`Площа такого квадрату ${width ** 2} см квадратних`)

//     } else if (length === width || !width) {

//         alert(`Площа такого квадрату ${length ** 2} см квадратних`)

//     } else {

//         alert(`Площа такого прямокутника ${length * width} (см квадратних)`)

//     }
// }