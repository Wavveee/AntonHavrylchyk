"use strict";

let redLight = document.querySelector('.red_light');
let greenLight = document.querySelector('.green_light');
let yellowLight = document.querySelector('.yellow_light');
let switchButton = document.querySelector('.switch')


function switchLight() {

    if (redLight.classList.contains('red')) {

        redLight.classList.toggle('red');
        yellowLight.classList.toggle('yellow');

    } else if (yellowLight.classList.contains('yellow')) {

        yellowLight.classList.toggle('yellow');
        greenLight.classList.toggle('green');

    } else if ( greenLight.classList.contains('green')){

        greenLight.classList.toggle('green');
        redLight.classList.toggle('red');

    }
}