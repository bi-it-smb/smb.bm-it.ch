/* Retrieves the HTML element with the ID "themeToggle" and assigns it to the variable "themeToggle" */
const themeToggle = document.getElementById('themeToggle');

/* Assigns the <body> element to the variable "body" */
const body = document.body;

/* Toggles the theme with a click */
themeToggle.addEventListener('click', () => {
    body.classList.toggle('future-mode');

/* Uses future-mode if it was the last used theme else default */
    if (body.classList.contains('future-mode')) {
        localStorage.setItem('theme', 'future-mode');
    } else {
         localStorage.setItem('theme', '');
    }
});

/* Remembers the last used theme */
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}