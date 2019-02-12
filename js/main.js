
  const nav = document.querySelector('#main');
  const topOfNav = nav.offsetTop;
  
  function fixNav() {
    if(window.scrollY >= topOfNav) {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      nav.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      nav.classList.remove('fixed-nav');
    }
  }
  
  window.addEventListener('scroll', fixNav);

  /* Toggle between adding and removing the 'responsive' class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('#main');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}