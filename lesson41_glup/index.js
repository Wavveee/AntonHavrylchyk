require("./styles.scss")

const lodash = require('lodash')
const arr = [
    {id: 0, name: 'Ranny'},
    {id: 1, name: 'Renala'},
    {id: 2, name: 'Marika'},
    {id: 3, name: 'Radan'},
    {id: 4, name: 'Radagon'},
    {id: 5, name: 'Godfrey'},
    {id: 7, name: 'Mog'},
    {id: 8, name: 'Magrid'},
    {id: 9, name: 'Melina'},
    {id: 6, name: 'Malenia'},
    {id: 235, name: 'Blaid'},
    {id: 25, name: 'Miquella'},
    {id: 236, name: 'Rykard'},
    {id: 61, name: 'Tanished'},
    {id: 66, name: 'Rya'},

]
console.log(lodash.sortBy(arr, ['name']));
 
