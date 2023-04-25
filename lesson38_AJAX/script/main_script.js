"use strict";

const searchString = document.querySelector('.search')
const searchButton = document.querySelector('.search-btn')
const detailsButton = document.querySelector('.details-btn')
const wrapper = document.querySelector('.wrapper')
const resultContainer = document.querySelector('.result')
const API = 'http://www.omdbapi.com/?apikey=dfafa46e&s='


searchButton.addEventListener('click', () => resultContainer.innerHTML = null)
searchButton.addEventListener('click', search)
searchButton.addEventListener('click', () => wrapper.classList.add('wrapper_after_searching'))

async function search() {
    const respons = await fetch(`${API}${searchString.value}`)
    const respData = await respons.json();
    if (respData.Response === 'False') alert(respData.Error)
    showMovies(respData)
}

function showMovies(movies) {
    let result = document.querySelector(".result")
    movies.Search.forEach(movie => {
        result.innerHTML = result.innerHTML + `<div class="movie_card">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p>${movie.Title}</p>
        <p>${movie.Type}</p>
        <p>${movie.Year}</p>
        </div>`
    });
}
