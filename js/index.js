// Your code goes here
const navItems = document.querySelectorAll(".nav-link");
const header = document.querySelector(".main-navigation");
const logoHeading = document.querySelector(".logo-heading");
const introImage  = document.querySelector(".intro img");
const imageContent = document.querySelectorAll(".img-content img");
const signupButton = document.querySelectorAll(".btn");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const destinationImage  = document.querySelector(".content-destination img");
const text = document.querySelectorAll("p");

navItems.forEach(navItem => navItem.addEventListener('mouseover', (event) => {event.target.style.color = 'red'}));
// .addEventListener('keydown', )
// .addEventListener('wheel', )
// .addEventListener('load', )
signupButton.forEach(button => button.addEventListener('click', (event) => event.target.textContent = "Are you sure?"));
// .addEventListener('resize', )
document.addEventListener('scroll', (event) => {header.style.backgroundColor = "yellow"});
// .addEventListener('select', )
text.forEach(paragraph => paragraph.addEventListener('dblclick', (event) => event.target.style.fontFamily = 'Indie Flower'));
