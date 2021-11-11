const navbar = document.querySelector('.navbar');
const brand = document.querySelector(".navbar-brand");
const navLink = document.querySelectorAll(".nav-link");

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

window.onscroll = function(){
        scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navbar.style.fontSize = "1.25em";
        navbar.style.height = "60px";
        if(width>975){
            navLink.forEach(item => {
                item.style.height = "30px"
            });
            brand.style.width = "2em";
        } else {
            brand.style.width = "1.5em";
        }

    } else {
        navbar.style.fontSize = "1.50em";
        navbar.style.height = "125px";
        brand.style.width = "5em";
        navLink.forEach(item => {
            item.style.height = "52px"
        })
    }
}