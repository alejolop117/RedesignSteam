const navToggle = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("menu-bar_visible")
})