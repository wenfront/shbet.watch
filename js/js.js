var bars = document.querySelector('.bars');
var navbarBottom = document.querySelector('.navbar-bottom');
bars.addEventListener('click', function() {
    navbarBottom.classList.toggle('active');
});