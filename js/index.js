const navToggle = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu ")
const main = document.querySelector(".main")
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("menu-bar_visible")
    if(main.classList.contains("main-behind")){
        main.classList.remove("main-behind")
        main.classList.add("main")
    }
    else{
        main.classList.add("main-behind")
    }

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

  