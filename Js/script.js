const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 50,
})


sr.reveal('.text-block', {delay: 400, origin: 'bottom', interval: 100})
sr.reveal('.story-card-1', {origin: 'bottom'})


function drop_down(){
    document.getElementById("drop-down").style.display='block';
    document.getElementById("drop-down").style.height='150px';
    document.getElementById("menu-icon").style.display='none';
}

function drop_up(){
    document.getElementById("drop-down").style.height='0vh';
    document.getElementById("drop-down").style.display='none';
    document.getElementById("menu-icon").style.display='block';
}

function searchbox_open(){
    document.getElementById("search-container").style.display='block';
    document.getElementById("search-icon").style.display='none';
    document.getElementById("search-container-2").style.display='block';
    
}

function searchbox_close(){
    document.getElementById("search-container").style.display='none';
    document.getElementById("search-icon").style.display='block';
    document.getElementById("search-container-2").style.display='none';

}
