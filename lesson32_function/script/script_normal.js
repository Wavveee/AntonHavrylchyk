"use strict";

//      1

// const numToCheck = +prompt(`Задайте число для перевірки на досконале`, ``);

// checkPerfectNumber(numToCheck)

// if (checkPerfectNumber(numToCheck)){
    
//     alert(`Чиcло ${numToCheck} досконале!!!!!!!!!!!!!!!!!!!!!!!`)
// } else if (!numToCheck) {

//     alert(`Подано не коректна данні`)
// } else {

//     alert(`Чиcло ${numToCheck} не є досконалим`)
// }

// function checkPerfectNumber(num) {

//     let sum = 0;

//     for (let i = 1; i < num; i++) {

//         if (num % i === 0) {

//             sum += i
//         }
//     }

//     if (sum === num) {
        
//         return true;
//     }

//     return false;

// }



//      2

// alert (`Задйте діапазон пошуку досконалого числа`, ``);

// const startOfRage = +prompt (`Початок діапазону`, ``);

// const endOfRage = +prompt (`Кінець діапазону`, ``);

// if (findPerfectNumber(startOfRage, endOfRage)){

//     alert(`В заданому діапазоні занайдено ${findPerfectNumber(startOfRage, endOfRage)}`)
// } else {

//     alert (`В заданому діапазоні досконалі числа відсутні`)
// }



// function findPerfectNumber (start, end){

//     let perfectNumberList = ``;

//     for (let i = start; i <= end; i++) {

//         if (checkPerfectNumber(i)) {

//             perfectNumberList += `${i}, `;
//         }
//     }

//     if (!perfectNumberList) {

//         return false;
//     }

//     return perfectNumberList;

// }
