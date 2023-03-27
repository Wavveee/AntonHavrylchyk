"use strict";

let userFirstName = prompt("Ваше ім'я ?", "");

if (userFirstName == null || userFirstName == "") {

    userFirstName = "Anonim"
}

let userSecondName = prompt("Ваше прізвище ?", "");

if (userSecondName == null || userSecondName == "") {

    userSecondName = ""
}

alert(`Вітаю ${userFirstName} ${userSecondName}`);



// невірні

// const Name
// const user 