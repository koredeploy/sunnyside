let toggleBtn = document.querySelector('.menu');
let navLinks =document.querySelector('.nav-links')

toggleBtn.addEventListener('click', ()=>{
   // if (navLinks.classList.contains('active')) {
   //  navLinks.classList.remove('active')
   // } else {
   //  navLinks.classList.add('active')
   // }

   navLinks.classList.toggle('active')

})
