function changeMode(){
   changeClass();
   changeText();
}

function changeClass(){
   btn.classList.toggle(darkModeClass);
   h1Text.classList.toggle(darkModeClass);
   bodyDocument.classList.toggle(darkModeClass);
   footer.classList.toggle(darkModeClass);
}

function changeText(){
   const lightMode = 'Light Mode';
   const darkMode = 'Dark Mode';
   if(btn.classList.contains(darkModeClass)){
      btn.innerHTML = lightMode;
      h1Text.innerHTML = darkMode + ' ON';
      return;
   }

   btn.innerHTML = darkMode;
   h1Text.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const btn = document.querySelector('#mode-selector');
const h1Text = document.querySelector('#page-title');
const bodyDocument = document.querySelector('body');
const footer = document.querySelector('footer');

btn.addEventListener('click', changeMode);