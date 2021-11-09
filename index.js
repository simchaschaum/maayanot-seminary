const navbar = document.querySelector('.navbar');
const brand = document.querySelector(".navbar-brand");

window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75){
        navbar.style.fontSize = "1.25em";
        navbar.style.height = "50px";
        brand.style.width = "3em";

    } else {
        navbar.style.fontSize = "1.50em";
        navbar.style.height = "125px";
        brand.style.width = "5em"
    }
}