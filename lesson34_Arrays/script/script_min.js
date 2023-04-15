"use strict";

let shoppingList = [
    {
        name: `Яблука`,
        quantity: 2,
        acquired: true,
        priceForOne: 31,
        fullPrice: 62,
    },

    {
        name: `Яйця`,
        quantity: 20,
        acquired: false,
        priceForOne: 6,
        fullPrice: 120,
    },

    {
        name: `Рис`,
        quantity: 2,
        acquired: true,
        priceForOne: 100,
        fullPrice: 200,
    },

    {
        name: `Мінеральна вода`,
        quantity: 2,
        acquired: true,
        priceForOne: 20,
        fullPrice: 40,
    },

    {
        name: `Хліб`,
        quantity: 2,
        acquired: false,
        priceForOne: 25,
        fullPrice: 50,
    },
]

let alteredShoppingList
let filteredList

showShoppingList(shoppingList)
buyGoods(`Хліб`, shoppingList)
showShoppingList(shoppingList)
removeItem(`Яблука`, shoppingList)
showShoppingList(alteredShoppingList)
addItem(alteredShoppingList, `Яблука`, 1, true, 31)
showShoppingList(alteredShoppingList)

console.log(alteredShoppingList[0].name)
console.log(alteredShoppingList[0].quantity)
console.log(alteredShoppingList[0].acquired)
console.log(alteredShoppingList[0].priceForOne)
console.log(alteredShoppingList[0].fullPrice)


addItem(alteredShoppingList, `Яблука`, 2, true, 35)
showShoppingList(alteredShoppingList)

console.log(alteredShoppingList[0].name)
console.log(alteredShoppingList[0].quantity)
console.log(alteredShoppingList[0].acquired)
console.log(alteredShoppingList[0].priceForOne)
console.log(alteredShoppingList[0].fullPrice)

calcAmount(alteredShoppingList)
calcAmountNotPurchased(alteredShoppingList)



//      min 1

function showShoppingList(array) {

    let acquired = ``
    let notPurchased = ``
    let List = ``

    for (let item of array) {

        if (item.acquired === false) {

            notPurchased += `${item.name}, `
        } else {

            acquired += `${item.name}, `;
        }
    }

    if (notPurchased === ``) notPurchased = `---`
    if (acquired === ``) acquired = `---`

    List = `Не придбані товари: ${notPurchased} \nПридбано: ${acquired} `

    console.log(List)
}

//      min 2

function buyGoods(name, array) {
    for (let item of array) {

        if (item.name === name && item.acquired === false) {

            item.acquired = true;
            console.log(`Виконано, товар ${name} придбаний`);
        }
    }

}



//      normal 1

function removeItem(name, array) {
    let alteredArray;

    alteredArray = array.filter(item => item.name != name);

    return alteredShoppingList = alteredArray;

}



//      normal 2

function addItem(array, name, quantity, acquired, priceForOne) {
    let itemName;
    let index;

    index = array.findIndex(item => item.name === name)

    for (let item of array) {

        if (item.name === name) itemName = name
    }

    if (itemName === name) {

        array[index].quantity = array[index].quantity + quantity;
        array[index].acquired = acquired;
        array[index].priceForOne = priceForOne;
        array[index].fullPrice = array[index].quantity * array[index].priceForOne;

    } else {

        let newItem = {}
        newItem.name = name;
        newItem.quantity = quantity;
        newItem.acquired = acquired;
        newItem.priceForOne = priceForOne;
        newItem.fullPrice = priceForOne * quantity;
        array.splice(0, 0, newItem);
    }

}



//      max 1

function calcAmount(array) {

    let sumPurchasesf = 0

    array.forEach(item => { sumPurchasesf += item.fullPrice });

    console.log(`Сумма покупок складе ${sumPurchasesf} шекелів`)
}



//      max 2

function calcAmountNotPurchased(array) {

    let sumNotPurchased = 0

    for (let item of array) {

        if (item.acquired === false) {

            sumNotPurchased += item.fullPrice
        }
    }

    console.log(`Сумма ще не придбаного товару складає ${sumNotPurchased} шекелів`)
}



//      max 3

// ------------------------


