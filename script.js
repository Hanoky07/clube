// menu
const btnMobile = document.getElementById('btn-mob')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// beta piscando
var betaLabel = document.getElementById('beta');

setInterval(function() {
  betaLabel.style.visibility = betaLabel.style.visibility === 'hidden' ? 'visible' : 'hidden';
}, 500);
