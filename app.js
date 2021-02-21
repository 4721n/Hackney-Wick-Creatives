const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

const contact = document.getElementsByClassName('contact-popup')[0];
const contactButton = document.getElementsByClassName('contact-button')[0];

contactButton.addEventListener('click', () => {
    contact.classList.toggle('active')
});

const x = document.getElementsByClassName('x')[0];
const pageContainer = document.getElementsByClassName('page-container')[0];

pageContainer.addEventListener('click', () => {
    if(contact.classList.contains('active')){
        contact.classList.toggle('active')
    }
});

x.addEventListener('click', () => {
    if(contact.classList.contains('active')){
        contact.classList.toggle('active')
    }
});

//volume

const video = document.getElementsByClassName('video');
const button = document.getElementById('volume');
    button.onclick = function (){

    if (video.muted === false) {    
           video.muted = true;
    }

    else {
        video.muted = false;
    }

    };