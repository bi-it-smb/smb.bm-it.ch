const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('future-mode');
    
    if (body.classList.contains('future-mode')) {
        localStorage.setItem('theme', 'future-mode');
    } else {
         localStorage.setItem('theme', '');
    }
});

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}