"use strict";

const timepiece = {
    hour: `00`,
    minute: `00`,
    second: `00`,

    showTime() {
        return `${this.hour}:${this.minute}:${this.second}`
    },

    plusSecond(seconds) {

        seconds += +this.second

        for (let i = 1; i <= seconds; i++) {

            if (i % 60 === 0) {
                this.minute++
            }

            this.second = seconds % 60

        }

        return `Додано ${seconds} секунд`

    },

    plusMinute(minutes) {

        minutes += +this.minute

        for (let i = 1; i <= minutes; i++) {

            if (i % 60 === 0) {
                this.hour++
            }

            this.minute = minutes % 60

        }

        return `Додано ${minutes} хвилин`
    },

    plusHour(hours) {

        this.hour += hours

        return `Додано ${hours} годин`
    }
}

console.log(timepiece.plusSecond(80))
console.log(timepiece.plusMinute(80))
console.log(timepiece.plusHour(45))
console.log(timepiece.showTime())
