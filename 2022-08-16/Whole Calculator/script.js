// kaip padaryt, kad rodytu virsuje visus skaicius, kuriuos paspaudzia?
// cia bus array? tsg pridedi elementus, kuriuos paspaudzia?

let array = [];

//kai paspaudzia bet koki td, ji pushina i string

let everyButton = document.getElementsByTagName("button");

for (let i = 0; i < everyButton.length; i++) {
if (everyButton.clicked == true) {
    array.push(everyButton.clicked.innerText)
}
}

document.getElementById("result").innerText = array.toString()


