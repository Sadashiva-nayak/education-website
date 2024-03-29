burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nalist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener("click", ()=>{
    rightnav.classList.toggle('v-class-resp');
    nalist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
