function sum() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    document.getElementById("result").innerText = "= " + (Number(value1) + Number(value2));
}

function substraction() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    document.getElementById("result").innerText = "= " + (Number(value1) - Number(value2));
}

function multiplication() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    document.getElementById("result").innerText = "= " + (Number(value1) * Number(value2));

}

function division() {
    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    document.getElementById("result").innerText = "= " + (Number(value1) / Number(value2));

}

