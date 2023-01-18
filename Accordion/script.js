const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function(e) {
    if (e.target.matches('.question')) {
        e.target.classList.toggle('active');
        e.target.nextElementSibling.classList.toggle('active');
    };
});