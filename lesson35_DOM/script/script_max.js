"use strict";

let redLight = document.querySelector('.red_light');
let greenLight = document.querySelector('.green_light');
let yellowLight = document.querySelector('.yellow_light');
let switchButton = document.querySelector('.switch')
let previous 

function switchLight() {

    if (redLight.classList.contains('red')) {

        redLight.classList.toggle('red');
        yellowLight.classList.toggle('yellow');
        previous = 'red'

    } else if (yellowLight.classList.contains('yellow')) {

        yellowLight.classList.toggle('yellow');

        (previous === 'red') ? greenLight.classList.toggle('green') : redLight.classList.toggle('red');

    } else if ( greenLight.classList.contains('green')){

        greenLight.classList.toggle('green');
        yellowLight.classList.toggle('yellow');
        previous = 'green'
    }

    
}
