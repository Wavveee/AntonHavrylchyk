// "use strict";

// // 1

// const currentMoneySum = +prompt("На яку суму бажаєте придбати шоладу ?", "")

// const chocolatePrise = +prompt("Шоколад в яку ціни ви шукаєте ?", "")

// const remainder = currentMoneySum % chocolatePrise

// alert(`На цю суму ви зможете придбати ${Math.floor(currentMoneySum / chocolatePrise)} плиток шоколаду`)

// alert(`Ваша решта ${remainder} гривнів`)

// //2

// const value = +prompt("Маю фокус, введіть тризначне число", "")

// if (value > 999 || value < 100 || value == null || !value) {

//     alert("Повторюю  введіть ТРИЗНАЧНЕ ЧИСЛО")

// } else {

// const valuePart1 = value % 10

// const valuePart2 = ((value % 100) - valuePart1 ) / 10

// const valuePart3 = (value - (value % 100)) / 100

// alert(`${valuePart1}${valuePart2}${valuePart3}`)

// }