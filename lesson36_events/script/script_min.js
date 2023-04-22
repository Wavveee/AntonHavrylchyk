"use strict";

let textarea = document.querySelector(".textarea")
let tex = document.querySelector(".container")

textarea.hidden = true;

document.onkeydown = function (event) {
    if (event.ctrlKey && event.code == 'KeyE') {
        tex.hidden = true;
        textarea.innerHTML = tex.innerHTML;
        textarea.hidden = false;
        return false;
    }

    if (textarea.value != '') {
        if (event.ctrlKey && event.code == 'KeyS') {
            textarea.hidden = true;
            tex.innerHTML = textarea.value
            tex.hidden = false;
            return false
        }
    } else if (event.ctrlKey && event.code == 'KeyS') {
        return false
    }
}