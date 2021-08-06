//import './sass/main.scss';
import jsonText from './menu.json';
import cardsTemplate from './templates/cards.hbs';

const menu = document.querySelector('.js-menu');

function resultMenu(arr) {
    const markup = arr.map(post => cardsTemplate(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

resultMenu(jsonText);

////переключение темы при клике на кнопку
// if(!localStorage.theme) localStorage.theme = Theme.LIGHT
// document.body.className = localStorage.theme
// toggleThemeBtn.onclick = () => {
// document.body.classList.toggle(Theme.DARK);
// localStorage.theme = document.body.className || Theme.LIGHT
// }

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchInput = document.querySelector(".theme-switch__toggle");  
const body = document.querySelector('body');

switchInput.addEventListener('click', () => changeTheme(switchInput, body, Theme));

loadTheme(switchInput, body, Theme);

function changeTheme(switchInput, body, Theme){ 
  if (switchInput.checked === true){
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
      localStorage.setItem('DarkDone', true);
      switchInput.setAttribute("checked" , true);
  } 
  else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
      localStorage.setItem('DarkDone', false);
      switchInput.setAttribute("checked" , false);
  }
};

function loadTheme(switchInput, body, Theme){
  if (localStorage.getItem('DarkDone') === "true"){
    switchInput.checked = true;
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
      } 
      else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
          switchInput.checked = false;
      }
}

