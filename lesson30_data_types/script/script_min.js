"use strict";

// 1
console.log((0.1 * 10 + 0.2 * 10) / 10)

// 2

const value1 = "1"

const value2 = 2

const sum = +value1 + value2

console.log(sum)

// 3

const flashDriveСapacity = +prompt("На скільки ГБ маєш флешку ?", "")

if(flashDriveСapacity > 0) {

alert(`Сюди поміститься ${Math.floor((flashDriveСapacity * 1024) / 820)} файлфів по 820МБ`) 

} else {

    alert("введіть число")

}