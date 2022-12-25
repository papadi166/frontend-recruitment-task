import Image1 from '../img/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg' 

const modalClose = document.querySelector('#modal-nav-close');
const moduleButtons = document.querySelectorAll('.module-button');
const modalOverlay = document.querySelector('#modal-overlay');
const clickedCounterElement = document.querySelector('#clicked-counter');

let clickedCounter = null;
if(sessionStorage.getItem("clickedCounter") == null)
    sessionStorage.setItem("clickedCounter", 0);


modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('is-active');
    modalOverlay.classList.add('is-hidden');
});

modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('is-active');
    modalOverlay.classList.add('is-hidden');
});

moduleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clickedCounter = parseInt(sessionStorage.getItem("clickedCounter"));
        sessionStorage.setItem("clickedCounter", clickedCounter+1);
        clickedCounterElement.innerHTML = sessionStorage.getItem("clickedCounter");
        modalOverlay.classList.remove('is-hidden');
        modalOverlay.classList.add('is-active');
    });
});

console.log('Hello from main.js');