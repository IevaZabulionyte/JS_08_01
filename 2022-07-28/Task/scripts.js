let input1 = prompt("enter the value No. 1:");

let input2 = prompt("enter the value No. 2:");

let operation = prompt("enter operation +,-,*,/")



if (!isNaN(input1) && !isNaN(input2) && operation == "+") {

    let addition = Number.parseInt(input1) + Number.parseInt(input2);
    alert("The result is " + addition);

} else if (operation == "+") {

    let addition = input1 + input2;
    alert("The result is " + addition);

} else if (!isNaN(input1) && !isNaN(input2) && operation == "-") {

    let substraction = input1 - input2;
    alert("The result is " + substraction);

} else if (!isNaN(input1) && !isNaN(input2) && operation == "*") {

    let multiplication = input1 * input2;
    alert("The result is " + multiplication);

} else if (!isNaN(input1) && !isNaN(input2) && operation == "/") {

    let division = input1 / input2;
    alert("The result is " + division);

} else {

    alert("Error!")

}