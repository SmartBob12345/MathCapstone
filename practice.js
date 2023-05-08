//Math.random(range (ex: 1, 2))
function start() {
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    console.log(num1, num2)
}
function back(){
    localStorage.removeItem("gamemode");
    localStorage.removeItem("sign");
    window.location = "choosepage.html";
}
start();
sign = localStorage.getItem("sign");
operation = localStorage.getItem("gamemode");
if (operation == "Division!") {
    if (num2 > num1) {
        start();
    }
}
score = 0;
console.log(sign, operation);
function everything() {
    document.getElementById("practice_welcome").innerHTML = "Practice " + operation;
    document.getElementById("question").innerHTML = num1 + " " + sign + " " + num2;
    if (operation == "Multiplication!") {
        answer = num1 * num2;
    }
    else if (operation == "Addition!") {
        answer = num1 + num2
    }
    else if (operation == "Subtraction!") {
        answer = num1 - num2;
    }
    else if (operation == "Division!") {
        answer = num1 / num2
        answer = Math.round(answer);
    }
    console.log(answer);
}
everything();

function check() {
    input = document.getElementById("answer").value;
    if (input == answer) {
        score = score + 1;
        document.getElementById("score").innerHTML = "Score:" + score;
        document.getElementById("answer").innerHTML = "";
        start();
        everything();
    }
    else{
        document.getElementById("answer").innerHTML = "";
    }
}

