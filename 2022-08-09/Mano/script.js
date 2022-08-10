/*function functionname(koks nors parametras, kuris bus naudojamas funkcijoje) {
//koks nors taskas
}
function reikalingas tam, kad butu galima bet kada ji iskviest, tai i kode rasant tiesiog "functionaname"*/

/*function makeCounter() {
    let currentCount = 1;
    alert(currentCount);
    return function () {
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

//Objects: match name to the value:

let person = { 
    name: "Arturs",
    lastname: "Olekss"
}
//objekts negali but lyginami tarpusavyje, net jei jie vienodi

let person1 = { 
    name: "Arturs",
    lastname: "Olekss"
}

person1 == person; //false

person.getFullName = function () {
    return this.name + " " + this.lastname; // "this" padeda paimti elementus is objekts
}*/


/*window.document; //DOM stores the page as the object

window.document.body;

document.getElementsByTagName("h1")[0]; // parodo pirmaji h1 elementa puslapio


let HeaderText = document.getElementsByTagName("h1")[0];

HeaderText.innerText; // parodo teksta

HeaderText.innerText = "Heeeelo"; //pakeis elementa i heeelo*/

//-----------------------------------------

function welcomeUser() {
    const firstname = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const welcomeElement = document.getElementById("welcome");
    document.getElementById("welcome").innerText = "welcome " + firstname + " " + lastname;
    welcomeElement.style.border = "1px solid red";
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = " ";
    }
}

function hideInputSection() {
    const inputSec = document.getElementById("inputsection");
    inputSec.hidden = true;
}

function displayInputSection() {
    const inputSec = document.getElementById("inputsection");
}

function changeColor() {
    document.body.color = "red";
}


function timer() {
    for (let i = 10; i > -1; i--)
        document.getElementById("count").innerText = i;
    setTimeout(setElements, 1000);
}

function setCounterElements(i) {
    if (i < 0) 
        return;
    else {
            document.getElementById("count");
            setTimeout(setCounterElement, 1000, i - 1);
        }
    }

    function calculateFactorial(n) {
        if (n === 1)
            return 1;
        else
            return n * calculateFactorial(n - 1);
    }

    function setFactorial() {
        const value = Number(document.getElementById("factorialN").value);
        const factResult = calculateFactorial(factResult);
        document.getElementById("factorialValue").innerText = factResult;
    }
