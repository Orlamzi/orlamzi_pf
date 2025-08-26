const randomInt = (min, max) => 
    Math.floor(Math.random() * (max - min +1) + min);

const randomColor = () => 
    `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

const header = document.querySelector('header');
header.addEventListener('mouseenter', (e) => {
        header.style.background = randomColor();
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
});

// TABS SECTION////////////////////////////////////////
const tabs = document.querySelectorAll('.tabs');
const tabsContainer = document.querySelector('.tab_container');
const tabsContent = document.querySelectorAll('.tabs_content');

tabsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.tabs');
    tabs.forEach(tab => tab.classList.remove('tab-active'));
    if (!clicked) return;
    clicked.classList.add('tab-active');

    tabsContent.forEach(content => content.classList.remove('tabs_content-active'));
    document.querySelector(`.tabs_content-${clicked.dataset.tab}`).classList.add('tabs_content-active');
});

