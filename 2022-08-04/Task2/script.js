
let arr = [];

let val;

while (val != "END") {
    val = prompt("enter value");
    if (!isNaN(val)) {
    arr.push(val); }
}

alert("Your array: " + arr);

alert("Sorted array: " + arr.sort());



