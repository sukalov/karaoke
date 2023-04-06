let songbook = document.querySelectorAll('.box');

function searchResults() {
    const input = document.getElementById("search");
    const filter = input.value.toLowerCase();
    for (let i = 0; i < songbook.length; i++) {
        content = songbook[i].innerHTML.split(/<\S*>/)
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