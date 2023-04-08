"use strict";

//          1

// const currentUserAge = +prompt("Укажіть ваш вік", "");

// if(currentUserAge > 0 && currentUserAge <= 11) {

//     alert("Ви ще дититна");

// } else if(currentUserAge >= 12 && currentUserAge <= 17) {

//     alert("Ви ще підліток");

// } else if(currentUserAge >= 18 && currentUserAge <= 59) {

//     alert("Ви уже дорослий");

// } else if(currentUserAge >= 60 && currentUserAge <= 122) {

//     alert("Настав час оформляти пенсійний");

// }else  {

//     alert("Будь ласка, введіть коректні данні");
// }



//          2

// const valueToConvert = +prompt("введіть число від 0 до 9", "");

// switch(valueToConvert) {
//     case 0:
//         alert(`Спецсимвол цього числа " ) "`);
//         break;

//     case 1:
//         alert(`Спецсимвол цього числа " ! "`);
//         break;

//     case 2:
//         alert(`Спецсимвол цього числа " @ "`);
//         break;

//     case 3:
//         alert(`Спецсимвол цього числа " # "`);
//         break;

//     case 4:
//         alert(`Спецсимвол цього числа " $ "`);
//         break;

//     case 5:
//         alert(`Спецсимвол цього числа " % "`);
//         break;

//     case 6:
//         alert(`Спецсимвол цього числа " ^ "`);
//         break;

//     case 7:
//         alert(`Спецсимвол цього числа " & "`);
//         break;

//     case 8:
//         alert(`Спецсимвол цього числа " * "`);
//         break;

//     case 9:
//         alert(`Спецсимвол цього числа " ( "`);
//         break;

//     default:
//         alert(`Повторюю ЧИСЛО від 0 до 9 !!!`);
// }



//          3

// alert("Задайте діапазон чисел для обчислення");

// const startOfRange = +prompt("Початок вибірки", "");

// const endOfRange = +prompt("Кінець вибірки", "");

// if (startOfRange < endOfRange) {

//     alert((startOfRange + endOfRange) * (endOfRange - startOfRange + 1) / 2);

// } else {

//     alert("Данні подано не вірно");
// }



//        4

// alert("Знайдемо найбільший спільний дільник (НСД) у двох чисел");

// let firstValue = +prompt("Задайте перше число", "");

// let Secondvalue = +prompt("Задайте друге число", "");

// if (firstValue > 0 && Secondvalue > 0) {

// while(firstValue != Secondvalue) {

//     if (firstValue > Secondvalue) {

//         firstValue -= Secondvalue;
//     } else {

//         Secondvalue -= firstValue;
//     }

// }

// } else {

//     alert("Данні подано не вірно");    
// }

// if (firstValue > 0 ) {

//     alert(`НСД заданих чисел це ${firstValue}`);
// } 



//        5

// const numberToCalculate = +prompt("Дільники якого числа ми шукаємо?", "");

// let dividers = `1, `;

// for (let i = 2; i <= numberToCalculate; i++){
//     if(numberToCalculate % i === 0 ){
//         dividers = dividers + `${i}, `;
//     }
// }

// alert(`Дільники числа  ${numberToCalculate} -- ${dividers}`);