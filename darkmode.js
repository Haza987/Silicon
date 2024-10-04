// För att det här scriptet ska fungera så behöver du lägga till en .dark klass i din css där du stylar dina färger
// du behöver också en checkbox med id="darkmode-switch" i din HTML


const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasDarkmode === 'on') {
  enableDarkMode()
} else if(hasDarkmode === 'off') {
  disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')

  // I used ChatGPT for help on how to switch images between dark mode
  // "document.querySelectorAll('.app').forEach(anchor" looks through the HTML for all anchor tags with the class of "app"
  // this is the same for "document.querySelectorAll('.app-dark').forEach(anchor" but instead looks for anchor tags with the class of "app-dark"
  // "anchor.style.display =" allows me to set the desired style depending on whether the website is in dark mode or light mode.

  document.querySelectorAll('.app').forEach(anchor => {
    anchor.style.display = 'none';
  });

  document.querySelectorAll('.app-dark').forEach(anchor => {
    anchor.style.display = 'flex';
  });

  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')

    document.querySelectorAll('.app').forEach(anchor => {
      anchor.style.display = 'flex';
  });

  document.querySelectorAll('.app-dark').forEach(anchor => {
      anchor.style.display = 'none';
  });
  }
})

function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}