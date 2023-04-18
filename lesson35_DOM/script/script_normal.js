"use strict";

let alertWindow = document.querySelector('.alert')
let openButton =  document.querySelector('.open_alert')
let closeButton = document.querySelector('.close_alert')

openButton.addEventListener('click', () => {
    alertWindow.classList.toggle('moda_window--action');
});

closeButton.addEventListener('click', () => {
    alertWindow.classList.toggle('moda_window--action');
});