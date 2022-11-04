const navToggle = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("menu-bar_visible")
})

const chattoggle = document.querySelector(".chat-toggle")
const chathidden =document.querySelector(".chat-hidden")
chattoggle.addEventListener("click",() =>{
    if(chathidden.classList.replace("chat-shown","chat-hidden")){
        chathidden.classList.replace("chat-shown","chat-hidden")
    }
    else{
        chathidden.classList.replace("chat-hidden","chat-shown")
    }

})

  