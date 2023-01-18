const openBtn = document.querySelector('.finder-btn');
const modal = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) modal.style.display = 'none';
});