const randomInt = (min, max) => 
    Math.floor(Math.random() * (max - min +1) + min);

const randomColor = () => 
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

const header = document.querySelector('header');
header.addEventListener('mouseenter', (e) => {
        header.style.background = randomColor();
        console.log('mouse entered, new color: ', header.style.background);
});

const body = document.body;
const themeBtn = document.querySelector('.theme-btn');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.textContent = '🌛';
}

themeBtn.addEventListener('click', (e) => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = '🌛';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌚';
        localStorage.setItem('theme', 'light');
    }
})