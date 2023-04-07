const songbook = document.querySelectorAll('.box');
const input = document.getElementById("search");
const randomButton = document.getElementById("random");
const checkboxes = document.querySelectorAll('label');
const songs = document.getElementsByClassName('box');
input.addEventListener('keyup', () => {searchResults()});

import {squeezeNavbar, unSqueezeNavbar} from '/js/navbar_change.js'

export function searchResults() {
    const filter = input.value.toLowerCase();
    for (let i = 0; i < songbook.length; i++) {
        let content = songbook[i].innerHTML.split(/<\S*>/)
        content = content.filter(el => el != '').join(' ')
        if (songbook[i].innerHTML.match(filter) && 
            !songbook[i].classList.contains('found'))  {
            songbook[i].classList.toggle('found')
        }
        if (!songbook[i].innerHTML.match(filter) && 
            songbook[i].classList.contains('found'))  {
            songbook[i].classList.toggle('found')
        }
        if (filter == '' && songbook[i].classList.contains('found')) {
            songbook[i].classList.toggle('found')
        }
        if (filter != '' && songbook[i].classList.contains('selected')) {
            songbook[i].classList.toggle('found')
        } 
    }
}

input.addEventListener('focus', () =>{searching()});
input.addEventListener('blur', () =>{notSearching()});

const searching = () => {
    randomButton.style = 'display: none; margin-top: 35px;'
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style = 'display: none'
    }
    for(let i = 0; i < songs.length; i++) {
        if (songs[i].classList.contains('selected')) {
            songs[i].classList.toggle('selected');
        }
    }
}

const notSearching = () => {
    unSqueezeNavbar();
    randomButton.style = 'display: ""'
}

window.searchResults = searchResults;