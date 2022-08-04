
// if funkcija gali but rasoma taip: result = notnumbers ? value1 + value2 : (Number(value1) + Number(value2));

//if(cond)
//val = val1;
// else val = val2;

//yra tas pats, kas:

//val = cond ? val1 : val2;

/*let userLevel = prompt("Enter your user's level");

switch (userLevel) {

    case "Admin":
    case "Golden":
        console.log("user level has all the rights");
        break;
    case "Regular":
        console.log("the user is regular");
    default:
        console.log("the user is nothing");

}*/

//break - jei jo nera, tai jis tikrina visus, nesustoja ties tinkamu variantu
//

//switch gali buti kartu su if

/*  switch (opertor){
  case "+":
   if(notNumbers){
   alert("kazka")}
  else
   result = value1 + value2}*/


/*let value1 = prompt("enter value 1")
let value2 = prompt("enter value 2")
let result;

const notNumbers = isNaN(value1) || isNaN(value2)

// for ( ; ; ) { // kartotu begalybe kartu, jei nebutu breaks
//while (result === undefined) { //bet tada turim nuimti breaks, kartos tol, kol nebus rezultato
// for (i = 0, i < 3; i++) { //kartos 3 kartus, bet yra break, tai nekartos
do {
 switch (operation) {
    case "+":
        result = notNumbers ? (value1 + value2) : (Number(value1) + Number(value2));
        break; // goes out of the loop
        case "-":
        if (notNumbers)
        alert("Substracion can only be applied to the numbers");
        else 
        result = Number(value1) - Number(value2)
        break;
        case "*":
        if (notNumbers)
        alert("Multiplication can only be applied to the numbers");
        else 
        result = Number(value1) * Number(value2)
        break;
        case "/":
        if (notNumbers)
        alert("Division can only be applied to the numbers");
        else
        result = Number(value1) / Number(value2);
        break;
        default:
            alert("operation is not correct") 
 }
}
while (result === undefined) 
 if (result != undefined)
 alert("Result is " + result)*/

/*let sum = 0;
for (let i  = 0; i <= 300; i++){ // minimali reiksme - 0; ji bus iki 300, nuo 0 ims visas reiksmes iki 300 ir sudes

    sum += i;
}
alert("The sum is " + sum)*/

// endles loop: for ( ; ; )
//toks loop gali but sustabdytas idedant "break;"
// jeigu kintamasis nustatomas inside the block, tai jis nebus prieinamas outside the block. reikia visada nustatyti aotside the block

/*let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i == 7) //skippins 7
        continue;
    sum += i;
}
alert("result is " + sum);*/



/*let sum = 0;
let i = 0;
 while(++i != 10)
 sum += i;
 alert("Resut is " + sum)

 do { // do while padaro taip, kad butu ivykdytas bent karta
    alert(sum);
    sum++;
}
while (sum < 30)*/


/*const arr = [434, 565, 5464, 56, 56]; // isvardins visus variantus, esancius gardeleje
arr[2] = 55585; //jei norim pakeist 2 indexo reiksme
for (let i = 0; i < arr.length; i++)
alert(arr[i]);

arr = [656262,51515] // not possible, because arr is defined as constant

arr[5] = 56626; //pridedam papildoma elementa

arr.push(999); //prides papildoma reiksme)

arr[arr.length] = 101; //prides papildoma reiksme)

arr.sort() //isrikiuos 

arr.reverse() //pakeis eiliskuma

arr.join(); //sudes visus i viena string

let arr2 = [6565,56,656,54,545,54];
arr.concat(arr2); // sujungs abu

arr.indexof(56); //parasys kokioje pozicijoje yra reiksme*/

/*let arrMixed = [];
arrMixed["element1"] = 1234;
arrMixed["element2"] = 12354;
//taip galima sukurt elementus, bet indexai ir lenght neveiks tada*/


const myarr = [];
myarr["element1"] = 6555;
myarr["element2"] = 6554;
myarr["element3"] = 6559;

