const navbar = document.querySelector('.navbar');
const brand = document.querySelector(".navbar-brand");
const navLink = document.querySelectorAll(".nav-link");

window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navbar.style.fontSize = "1.25em";
        navbar.style.height = "50px";
        brand.style.width = "2em";
        navLink.forEach(item => {
            item.style.height = "30px"
        })
    } else {
        navbar.style.fontSize = "1.50em";
        navbar.style.height = "125px";
        brand.style.width = "5em";
        navLink.forEach(item => {
            item.style.height = "52px"
        })
    }
}