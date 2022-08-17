//jQuery to shorten our code with DOM

//$ 


//create small table kuri tures colors ir abiem sukurt filtrus, kur galima filtruot pagal vardus dropdown
//button, when selected filter by elements
// filter out - hide elements



//let color = document.getElementById("Color").value;

function getResult() {
let color = document.getElementById("Color").value;
let table = document.getElementById("myTable");
let tr = table.getElementsByTagName("tr");
    switch (color) {
        case "red":
               for (let i = 0; i < tr.length; i++) {
                    if (tr[i].textContent == "red") {
                        tr[i].style.display = "block";
                    }
                    else {
                    tr[i].style.display = "none"; }
                }
            break;

        case "blue":
            for (let i = 0; i < color.length; i++) {
                if (color[i].value !== "blue") {
                    color[i].value = "";
                }
            }
            break;

        case "green":
            for (let i = 0; i < color.length; i++) {
                if (color[i].value !== "green") {
                    color[i].value = "";
                }
            }
            break;

        case "black":
            for (let i = 0; i < color.length; i++) {
                if (color[i].value !== "black") {
                    color[i].value = "";
                }
            }
            break;

        case "pink":
            for (let i = 0; i < color.length; i++) {
                if (color[i].value !== "pink") {
                    color[i].value = "";
                }
            }
            break;

    }
    }