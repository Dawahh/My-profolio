const navMenu = document.getElementById('nav-menu')
const navClose = document.getElementById('nav-close')
const navToggle = document.getElementById('nav-toggle')

// ===========SHOW MENU ==========
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
// ===========Remove MENU ==========
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// =============REMOVE MENU MOBLIE================//

const navLink =document.querySelectorAll('.nav__link')
const linkAction = () =>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(e => e.addEventListener('click',linkAction))



const blurHeader =()=>{
    const header = document.getElementById('header')

    if(scrollY>=50){
        header.classList.add("header1")
    }else{
        header.classList.remove('header1')
    }
    
}
window.addEventListener('scroll',blurHeader)


