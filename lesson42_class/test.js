let str = "Чиї ж це очі?"
console.log(str.length)

console.log(str.indexOf(" "))

let spaces = 0
for (let i = 0; i < str.length; i++) {
    
    if (str[i] === " ") spaces += 1
    
}

console.log(spaces);