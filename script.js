window.onscroll = function () {
	const header = document.querySelector("header");
	header.classList.toggle("navbar-fixed", window.scrollY > 0);
};

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});
