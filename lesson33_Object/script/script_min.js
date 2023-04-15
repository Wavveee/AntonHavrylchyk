"use strict";

const workingCar = {
    producer: `Mitsubishi`,
    model: `Lancer X`,
    driver: ``,
    productionYear: 2015,
    averageSpeed: 100,
    fuelTank: 59,
    fuelConsumption: 11.7,
    carInfo() {
        for (let key in workingCar) {
            console.log(workingCar[key]);
        }
    },

    appointDriver(driverName) {

        workingCar.driver = driverName;
    },

    driverChek() {

        if (workingCar.driver == ``) {

            return console.log(`Водія не назначено`);
        }

        return console.log(`Водій  ${workingCar.driver}`);
    },

    calcTime(distance) {

        let time = distance / this.averageSpeed;

        let timeWithRest = 0;

        for (let i = 0; i < time; i++) {

            if (i % 4 === 0) {

                timeWithRest++;
            }
        }

        time += timeWithRest;

        let fuelNeeds = (this.fuelConsumption / 100) * distance;

        return console.log(`Для такої поїздки потрібно ${Math.ceil(time)} годин та ${fuelNeeds.toFixed(2)}л палива`);
    },

}


workingCar.appointDriver(`Tarnished`);
workingCar.carInfo();
workingCar.driverChek();
workingCar.calcTime(1200);

