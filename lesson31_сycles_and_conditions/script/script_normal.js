"use strict";

//      1

// let numberToCheck = +prompt(`Задайте  число для перевірки на паліндром`, ``)

// let reverse = 0;

// while (numberToCheck >  reverse){
//     reverse *= 10;
//     reverse += numberToCheck % 10;
//     numberToCheck = Math.trunc (numberToCheck / 10);
// }

// if (numberToCheck === reverse || numberToCheck === Math.trunc(reverse / 10)){
    
//     alert(`Задане число це паліндром`)
// } else {

//     alert(`Задане число не є паліндромом`)
// }
 
//      2

// const amountOfPurchases = +prompt("На яку сумму ви набрали добра?", "");

// if (amountOfPurchases >= 200 && amountOfPurchases <= 300){

//     alert(`Сумма до сплати зі знижкою буде ${amountOfPurchases - (amountOfPurchases * 0.03)}`)

// } else if (amountOfPurchases > 300 && amountOfPurchases <= 500){

//     alert(`Сумма до сплати зі знижкою буде ${amountOfPurchases - (amountOfPurchases * 0.05)}`)

// } else if (amountOfPurchases > 500) {

//     alert(`Сумма до сплати зі знижкою буде ${amountOfPurchases - (amountOfPurchases * 0.07)}`)

// }else if (amountOfPurchases > 0 && amountOfPurchases < 200){

//     alert(`Немає тобі знижок, іди ще товар подивись може що знайдеш`)

// } else {

//     alert(`Введіть коректні данні`)

// }




//      3

// let numForAnalys

// let positiveNumbers = 0;

// let negativeNumbers = 0;

// let zero = 0;

// let evenNumbers = 0;

// let oddNumbers = 0;

// let incorrectData = 0;

// for (let i = 0; i < 10; i++){

//     numForAnalys = +prompt("Задайте будь яке число");

// if (numForAnalys > 0 ) {

//         ++positiveNumbers;
//     } else if (numForAnalys < 0){

//         ++negativeNumbers;
//     } else if (numForAnalys === 0){

//         ++zero;
//     } else {

//         ++incorrectData;
//     }

// if (numForAnalys % 2 === 0){

//         ++evenNumbers;
//     } else if (!numForAnalys % 2 === 0){

//         ++oddNumbers;
//     } 

// }

// alert(`Ви задали ${positiveNumbers} чисел вище нуля, ${negativeNumbers} чисел нижче нуля,
//       ${zero} нулів, ${evenNumbers} парних чисел, ${oddNumbers} не парних чисел 
//       та ${incorrectData} рази подали не вірні дані`)



//      4

// for (let i = 0; i < 8; i++){

//     switch (i) {
//         case 0:
//             alert("Понеділок. Хочеш побачити наступний день?");
//             break;

//         case 1:
//             alert("Вівторок. Хочеш побачити наступний день?");
//             break;

//         case 2:
//             alert("Середа. Хочеш побачити наступний день?");
//             break;

//         case 3:
//             alert("Четвер. Хочеш побачити наступний день?");
//             break;

//         case 4:
//             alert(`П'ятниця. Хочеш побачити наступний день?`);
//             break;

//         case 5:
//             alert("Субота. Хочеш побачити наступний день?");
//             break;

//         case 6:
//             alert("Неділя. Хочеш побачити наступний день?");
//             break;            
//     }

//    if (i == 7) {
        
//         i = -1
//    }
// }