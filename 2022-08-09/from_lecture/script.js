let person = {
    name: "Arturs",
    lastname: "Olekss"
}

let person1 = {
    name: "Arturs",
    lastname: "Olekss"
}

person.getFullName = function() {
    return this.name + " " + this.lastname;
}


function makeCounter() {
    let currentCount = 1;
    alert(currentCount);
    return function() {
        return currentCount++;
    };
}
// creating a new counter  
let counter = makeCounter();
alert(counter()); // 1  
alert(counter()); // 2  
alert(counter()); // 3
// another independent counter  
let counter2 = makeCounter();
alert(counter2()); // 1



let stopCount = true;

function welcomeUser() {
    const firstname = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const welcomeElement =
        document.getElementById("welcome");
    welcomeElement.innerText =
        "Welcome " + firstname + " " + lastname;
    welcomeElement.style.border = "1px solid red";
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function hideDisplayInputSection(hidden) {
    const inputSec = document.getElementById("inputsection");
    inputSec.hidden = hidden;
}

function changeColor() {
    document.body.style.color = "red";
}

function timer() {
    stopCount = false;
    setCounterElement(10);
}

function stopCounter() {
    stopCount = true;
}

function setCounterElement(i) {
    if (i < 0 || stopCount)
        return;
    else {
        document.getElementById("count").innerText = i;
        setTimeout(setCounterElement, 1000, i - 1);
    }
}
//5! = 5 * 4 * 3 * 2 * 1
function calculateFactorial(n) {
    if (n === 1)
        return 1;
    else
        return n * calculateFactorial(n - 1);
}

function setFactorial() {
    const value = Number(document.getElementById("factorialN").value);
    const factResult = calculateFactorial(value);
    document.getElementById("factorialValue").innerText = factResult;
}