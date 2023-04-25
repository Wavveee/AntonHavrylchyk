"use strict";
const lat = 50.4333;
const lon = 30.5167;
const exclude = "current";
const API_KEY = "a7382434ae4d2031296b2002b53f9662";
const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
const text = document.querySelector('.text')

showTenperature ()
setInterval(showTenperature, 7200000);

text.innerHTML = text.innerHTML + ` ${localStorage.getItem(`Current temperature`)} градусів цельсію`

async function showTenperature () {
    const res = await fetch(`${API}`);
    const resData = await res.json();
    const currentTemperature = Math.floor(resData.main.temp - 273);
    localStorage.setItem(`Current temperature`, currentTemperature);
}


