var responsiveNav = document.getElementById('#main');
var responsiveNavBreakpoint = 560;

responsiveNav.addEventListener('click', function() {
    if(window.innerWidth < responsiveNavBreakpoint){
      
      responsiveNav.classList.toggle("responsive-nav__open");
    }
});



