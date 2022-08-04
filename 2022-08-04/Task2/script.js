
let val1 = prompt("enter first value");
let val2 = prompt("enter second value");
let val3 = prompt("enter third value");
let val4 = prompt("enter fourth value");
let val5 = prompt("enter fifth value");
let val6 = prompt("enter sixth value");


if (!isNaN(val1) || !isNaN(val2) || !isNaN(val3) || !isNaN(val4) || !isNaN(val5) || !isNaN(val6)) {
    const arr = [val1, val2, val3, val4, val5, val6];
    alert("Sorted array: " + arr.sort());
}
    else {
    alert("writte only numbers");
}



