function changeMode() {
    changeClass();
    changeText();
  }
  
  function changeClass() {
    bodyElement.classList.toggle(classDarkMode);
    buttonElement.classList.toggle(classDarkMode);
    footerElement.classList.toggle(classDarkMode);
  }
  
  function changeText() {
    if(buttonElement.innerHTML === 'Dark Mode') {
      buttonElement.innerHTML = 'Light Mode';
      titleElement.innerHTML = 'Dark Mode ON';
    } else {
      buttonElement.innerHTML = 'Dark Mode';
      titleElement.innerHTML = 'Light Mode ON';
    }
  }
  
  const classDarkMode = 'dark-mode';
  const bodyElement = document.querySelector('body');
  const titleElement = document.querySelector('h1');
  const buttonElement = document.querySelector('#mode-selector');
  const footerElement = document.querySelector('footer');
  
  buttonElement.addEventListener('click', changeMode);