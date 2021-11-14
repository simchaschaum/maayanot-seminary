const navbar = document.querySelector('nav');
const brand = document.querySelector("#navbar-logo");
const navLink = document.querySelectorAll(".nav-link");

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

window.onscroll = function(){
        scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        if(width>975){
            navLink.forEach(item => {
                item.style.height = "30px"
            });
            brand.style.width = "2em";
            navbar.style.height = "60px";
            navbar.style.fontSize = "1.25em";
        } 
    } else {
        if(width>975){
            navLink.forEach(item => {
                item.style.height = "52px"
            });
            brand.style.width = "5em";
            navbar.style.height = "125px";
            navbar.style.fontSize = "1.50em";
        }
    }
}
