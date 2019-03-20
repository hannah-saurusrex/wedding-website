var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('.menu');
var closeBtn = document.querySelector('.close');

mobileBtn.addEventListener('click', function() {
  menu.className += 'open';
})

closeBtn.addEventListener('click', function() {
  menu.className = 'menu';
})