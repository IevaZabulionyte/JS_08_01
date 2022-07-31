let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

console.log(a == b);

let c = 10;
console.log(b == c);
// == to compare

let cstr = "10";
console.log(c == cstr);
console.log(c === cstr);

// to compare strictly === (f.e. different types of variables)

c = c + 2;
c += 2;

c = c * 2;
c *= 2;


console.log(c == Number(cstr));
//paverciau number

console.log(c != Number(cstr));

// != non equal?

console.log(c !== Number(cstr));

console.log(!(c > 100));

//raides taip pat gali but lyginamos alfabetine tvarka, arba upper case, lower case

console.log("ABC" < "GHJ");

c++;
//we add 1 to c

console.log(c);

c = c + 1;
console.log(c);
c++;
console.log(c);

console.log(c++);
// cia is pradziu parodo c, tada tik skaiciuoja, todel is kart neprideda

console.log(++c);
console.log(c);

45 ** 3;

a == 5 && c < 100; //and

a == 5 || c < 100; //or


true && true == true;
true && false == false;
false && false == false;

true || true == true;
true || false == true;
false || false == false;
//eiliskumas ner svarbu

// nemiksuot && ir ||, nes nesamone gaunas, galima nebent naudot kabutes ()

false || (true && true); // true

!(true && true); // false


!(true && true) == (!true || !true); //true

!(true && false) == (!true || !false); //true

!(true || true) == (!true && !true); //true



let k = b == c ? 5 : 9;
let result = (b == c) ? 5 : 9;

//typeof - paraso tipa kintamojo

let answer = confirm("Is everythin ok?");

let person5 = prompt("Please enter your name", "Harry potter");

history.forward(); // navigates to the previous page visited
history.forward(); // navigates to the next page visited

Math.abs(-2352); //teigiama padarys
Math.exp(232); //pakels 
Math

0.1 + 0.2 == 0.3;

(0.1 + 0.2 - 0.3) <= Number.EPSILON;

Number.EPSILON //very small number

let currentDate = new Date(); //parodo data kompo rodoma

let myStr = "Here is the string"; // skaito "e", nes Here antra raide yra "e", H - nuline
myStr.charAt(1);

myStr.replaceAll(" ", " ");

myStr.bold();

//if (age > 18) {


   // alert("You are too young")
//}
//else {

    //alert("hello")
//}

// a - logical statement (retuns true or false)

let a6 = true;
if (a6) {

alert("a6 is true");

}
else {

    alert("a6 is not true");

}
// if (!a6){ alert("haha") } - tas pats kas else

// jei statement tik 1, tai {} ner butini

// if gali but vienas kitame: if() { if(){}} ...

if(a6) {

}
else if(a62) {


} else {

}



