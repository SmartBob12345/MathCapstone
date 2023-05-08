username = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = username;


function plus(){
    localStorage.setItem("gamemode", "Addition!");
    localStorage.setItem("sign", "+")
    window.location = "practice.html";
}
function subtract(){
    localStorage.setItem("gamemode", "Subtraction!");
    localStorage.setItem("sign", "-")
    window.location = "practice.html";
}
function multiply(){
    localStorage.setItem("gamemode", "Multiplication!");
    localStorage.setItem("sign", "x")
    window.location = "practice.html";
}
function divide(){
    localStorage.setItem("gamemode", "Division!");
    localStorage.setItem("sign", "/")
    window.location = "practice.html";
}
