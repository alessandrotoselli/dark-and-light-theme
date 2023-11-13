const themeSwithBtn = document.getElementById('switch-btn');
const currentTheme = document.documentElement;

themeSwithBtn.innerHTML = "<i class='bx bx-sun' ></i>";

themeSwithBtn.addEventListener('click', () => {
    if(themeSwithBtn.classList.contains('day-time')){
        changeTheme('M');
    } else {
        changeTheme('S');
    }
})

function changeTheme(theme) {
    if (theme === 'M'){
        currentTheme.style.setProperty('--theme-background', '#272643');
        currentTheme.style.setProperty('--theme-text', '#e4eaff');
        currentTheme.style.setProperty('--theme-box', '#2c698d');
        themeSwithBtn.classList.remove('day-time');
        themeSwithBtn.classList.add('night-time');
        themeSwithBtn.innerHTML = "<i class='bx bx-moon' ></i>";
    } else if (theme === 'S'){
        currentTheme.style.setProperty('--theme-background', '#ffffdf');
        currentTheme.style.setProperty('--theme-text', '#000');
        currentTheme.style.setProperty('--theme-box', '#bae8e8');
        themeSwithBtn.classList.remove('night-time');
        themeSwithBtn.classList.add('day-time');
        themeSwithBtn.innerHTML = "<i class='bx bx-sun' ></i>";
    }
}