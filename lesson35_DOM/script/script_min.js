"use strict";

let playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    },

    {
        author: "RICK ASTLEY",
        song: "NEVER GONNA GIVE YOU UP"
    },

];

createlist (playList)

function createlist (array) {

    let newEltment
    let list

    for (let song of array) {

        newEltment = document.createElement("li");
        newEltment.innerHTML = `${song.author} --- ${song.song}`;

        list = document.querySelector(`.playlist`);
        list.appendChild(newEltment);

    }
}
