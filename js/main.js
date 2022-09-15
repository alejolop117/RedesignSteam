
function init () {
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");

    btn1.addEventListener("click",fun1);
    btn2.addEventListener("click",fun1);
    btn3.addEventListener("click",fun1);
    btn4.addEventListener("click",fun1);
}

function fun1(event){
    alert("Esta función no está disponible en esta versión");
}
