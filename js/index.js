// Your code goes here
const navItems = document.querySelectorAll(".nav-link");
const header = document.querySelector(".main-navigation");
const logoHeading = document.querySelector(".logo-heading");
const introImage  = document.querySelector(".intro img");
const imageContent = document.querySelector(".img-content img");
const signupButton = document.querySelector("btn");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const destinationImage  = document.querySelector(".content-destination img");
const text = document.querySelectorAll("p");

navItems.forEach(element => element.addEventListener('mouseover', (event) => {event.target.style.color = 'red'}));
// .addEventListener('keydown', )
// .addEventListener('wheel', )
// .addEventListener('drag / drop', )
// .addEventListener('load', )
// .addEventListener('click', )
// .addEventListener('resize', )
document.addEventListener('scroll', (event) => {header.style.backgroundColor = "yellow"});
// .addEventListener('select', )
// .addEventListener('dblclick', )
