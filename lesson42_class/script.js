//==   1   ======================================================================

// class Circle {
//     constructor (radius) {
//         this.radius = radius;
//     }

//     get radius() {
//         return this._radius
//     }

//     set radius(newRadius) {
//         this._radius = newRadius;
//     }

//     diameter() {
//         return this._radius * 2
//     }

//     circleArea() {
//         return Math.PI * (this.radius **2)
//     }

//     circleLength() {
//         return 2 * Math.PI * this.radius
//     }
//  }

// const cirle = new Circle (2)
// console.log(cirle);
// console.log(cirle.radius);
// cirle.radius = 4;
// console.log(cirle.radius);
// console.log(cirle.diameter());
// console.log(cirle.circleArea());
// console.log(cirle.circleLength());

//==   2   ======================================================================

// class StationeryMarker {
//     constructor(color = "red", ink = 100) {
//         this.color = color;
//         this.ink = ink
//     }

//     write(str) {
//         String(str)
//         let spaces = 0
//         findSpaces(str)
//         const p = document.createElement("p")
//         const length = (str.length  - spaces) / 2

//         if ((length) < this.ink) {
//             p.innerText = str
//             p.style.color = this.color
//             document.querySelector(".exerciseTwo").append(p)
//             this.ink -= length
//         } else {
//             alert(`Не вистачить чорнил (${this.ink}), підзарядіть маркер(.recharge)`)
//         }

//             function findSpaces(str) {
//                 for (let i = 0; i < str.length; i++) {
//                     if (str[i] === " ") spaces += 1   
//                 }
//                 return spaces
//             }
//     }

//     recharge(percents) {
//         this.ink += percents
//         console.log(`Поточний заряд маркера ${this.ink}`)
//     }
// }

// const marker = new StationeryMarker("green", 20)
// console.log(marker);
// marker.write("you know the rules and so do i");
// console.log(marker);
// marker.recharge(30);



//==   3   ======================================================================

// class Employee {
//     constructor(firstName, secondName, position, age) {
//         this.firstName = firstName
//         this.secondName = secondName
//         this.position = position
//         this.age = age
//     }
// }

// const consultant = new Employee("Benjamin", "Button", "consultant", "?");
// const cashier = new Employee("Jon", "Doe", "cashier", "19");
// const manager = new Employee("Rowan", "Viva", "manager", "40");
// const director = new Employee("Artoria", "Pendragon", "director", "20");

// const employees = [cashier, manager, consultant, director];



// class EmpTable {
//     constructor(arr) {
//         this.employeesArray = arr;
//         this.tableHead = ["#", "Name", "Surname", "Position", "Age"]
//     }

//     getHtml() {
//         const container = document.querySelector(".exerciseThree")
//         const table = document.createElement("table")
//         const thead = document.createElement("thead")
//         const tbody = document.createElement("tbody")


//         table.classList.add("table-striped", "table")
//         container.append(table)
//         table.append(thead)
//         table.append(tbody)
//         const tr = document.createElement('tr');

//         for (let i = 0; i < this.tableHead.length; i++) {
//             const th = document.createElement('th');
//             th.innerHTML = this.tableHead[i]
//             tr.append(th);
//         }

//         thead.append(tr);

//         for (let i = 1; i <= this.employeesArray.length; i++) {
//             const tr = document.createElement('tr');
//             tr.classList.add("trow")
//             const th = document.createElement("th")
//             th.innerHTML = i
//             tr.append(th)

//             for (let i = 0; i < this.tableHead.length - 1; i++) {
//                 let td = document.createElement('td');
//                 tr.append(td);
//             }
//             tbody.append(tr);
//         }

//         for (let i = 0; i < this.employeesArray.length; i++) {
//             const rows = document.getElementsByClassName("trow")
//             const bar = rows[i].childNodes
//             const employeeInfo = Object.values(this.employeesArray[i]);

//             for (let i = 1; i < this.tableHead.length; i++) {

//                 bar[i].innerHTML = employeeInfo[i - 1]
//             }
//         }

//     }
// }

// const empTable = new EmpTable(employees);
// empTable.getHtml()
