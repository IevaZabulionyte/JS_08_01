let arr = [];


let val;



while (val != "END") {
    val = prompt("enter value");
    arr.push(val);
}
arr.pop(); //pasalinam "END"
alert("Your array: " + arr);



let arr2 = [];

//negative values:

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr2.push(arr[i]);
    }
}
alert("Negative values of the array: " + arr2);

//odd values

let arr3 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
        arr3.push(arr[i]);
    }
}
alert("Odd values of the array: " + arr3);

//how many odd elements
let oddelements = arr3.length
alert("Odd elements: " + oddelements);

//same value elements
let check = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
            if (arr[i] === arr[j]) {
                alert("There are elements with the same value");
                check++;
                break;
            } 
        } 
    }
    if (check == 1) {
        break;
    }
}
if (check == 0) {
    alert("There are no elements with the same value");
}

//Print out each second element.

let arr4 = [];

for (let i = 1; i < arr.length; i = i + 2) {
    arr4.push(arr[i]);
}
alert("Each second element printed out: " + arr4);

//Compute average value of the array.

 let sum = 0;
 for (let i = 1; i <= arr.length; i++) {
     sum += i;
 }
 alert("Sum of the array elements: " + sum);

 let average = sum / arr.length;
 alert("Average value of the array is: " + average);

 //how many elements are smaller than average value?

 let arr5 = [];

 for (let i = 0; i < arr.length; i++) {
     if (arr[i] < average) {
        arr5.push(arr[i]);
     }
 }
 alert("Elements smaller than average value:  " + arr5.length);
