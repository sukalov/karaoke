const songbook = document.querySelectorAll('.box');
const input = document.getElementById("search");
const randomButton = document.getElementById("button");
const checkboxes = document.querySelectorAll('label');
let checkboxesSelf = document.querySelectorAll('[type="checkbox"]');
const songs = document.getElementsByClassName('box');
input.addEventListener('keyup', () => {searchResults()});


function searchResults() {
    const filter0 = input.value.toLowerCase().replace('е', '(е|ё)');
    const filter = new RegExp(filter0)
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
        checkboxesSelf[i].checked = false;
        checkboxes[i].style = 'display: none'
    }
    for(let i = 0; i < songs.length; i++) {
        if (songs[i].classList.contains('selected')) {
            songs[i].classList.toggle('selected');
        }
    }
}

const notSearching = () => {
    // unSqueezeNavbar();
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style = 'display: ""'
    }
    randomButton.style = 'display: ""'
}

window.searchResults = searchResults;

input.addEventListener("focus", function() {
    this.setSelectionRange(0, this.value.length); // select all text in the text input
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
    document.activeElement.blur(); // remove focus from the text input
    }
});


