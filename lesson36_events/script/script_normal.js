"use strict";

let table = document.querySelector('.table')
let userName = document.querySelector('.name')
let userAge = document.querySelector('.age')
let sortButton = document.querySelectorAll('th')
let tableName

userName.addEventListener('click', sortNameRows)
userAge.addEventListener('click', sortAgeRows)

function sortNameRows() {
    let sortedRows = Array.from(table.tBodies[0].rows)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));
    table.tBodies[0].append(...sortedRows);
}

function sortAgeRows() {
    let sortedRows = Array.from(table.tBodies[0].rows)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML.localeCompare(rowB.cells[1].innerHTML));
    sortedRows.splice(-1, 1)
    table.tBodies[0].append(...sortedRows);
}
