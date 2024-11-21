const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

hamburgerMenu.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', function() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});
