import jQuery from 'jquery';
// import Typed from 'typed.js';
// import 'slick-carousel';
// import fullpage from "fullpage.js";
// import "font-awesome/css/font-awesome.min.css";
// import AOS from "aos";

document.addEventListener('DOMContentLoaded', function () {

    let hamburgerButton = document.getElementById("toggle");
    let menu__hamburger = document.getElementById("toggle");
    let html__hide = document.getElementById("html--hidden");

    hamburgerButton.addEventListener("click", function () {
        menu__hamburger.classList.toggle("open");
        menu__hamburger.classList.toggle("menu__show");
        html__hide.classList.toggle("html--hidden")
    });
});