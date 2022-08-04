let month = prompt("enter your birth month");
let day = prompt("enter your birth day");


switch (month) {
    case "March":
        if (Number(day) > 0 && Number(day) < 21) {
            alert("Your zodiac sign is Pisces");
        }
        else if (Number(day) > 20 && Number(day) < 32) {
            alert("Your zodiac sign is Aries");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "April":
        if (Number(day) > 0 && Number(day) < 20) {
            alert("Your zodiac sign is Aries");
        }
        else if (Number(day) > 19 && Number(day) < 31) {
            alert("Your zodiac sign is Taurus");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "May":
        if (Number(day) > 0 && Number(day) < 21) {
            alert("Your zodiac sign is Taurus");
        }
        else if (Number(day) > 20 && Number(day) < 32) {
            alert("Your zodiac sign is Gemini");
        }
        else {
            alert("Date is not valid!")
        }
        break;

    case "June":
        if (Number(day) > 0 && Number(day) < 21) {
            alert("Your zodiac sign is Gemini");
        }
        else if (Number(day) > 20 && Number(day) < 31) {
            alert("Your zodiac sign is Cancer");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "July":
        if (Number(day) > 0 && Number(day) < 23) {
            alert("Your zodiac sign is Cancer");
        }
        else if (Number(day) > 22 && Number(day) < 32) {
            alert("Your zodiac sign is Leo");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "August":
        if (Number(day) > 0 && Number(day) < 23) {
            alert("Your zodiac sign is Leo");
        }
        else if (Number(day) > 22 && Number(day) < 32) {
            alert("Your zodiac sign is Virgo");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "September":
        if (Number(day) > 0 && Number(day) < 23) {
            alert("Your zodiac sign is Virgo");
        }
        else if (Number(day) > 22 && Number(day) < 31) {
            alert("Your zodiac sign is Libra");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "October":
        if (Number(day) > 0 && Number(day) < 23) {
            alert("Your zodiac sign is Libra");
        }
        else if (Number(day) > 22 && Number(day) < 32) {
            alert("Your zodiac sign is Scorpio");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "November":
        if (Number(day) > 0 && Number(day) < 22) {
            alert("Your zodiac sign is Scorpio");
        }
        else if (Number(day) > 21 && Number(day) < 31) {
            alert("Your zodiac sign is Sagittarius");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "December":
        if (Number(day) > 0 && Number(day) < 22) {
            alert("Your zodiac sign is Sagittarius");
        }
        else if (Number(day) > 21 && Number(day) < 32) {
            alert("Your zodiac sign is Capricorn");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "January":
        if (Number(day) > 0 && Number(day) < 20) {
            alert("Your zodiac sign is Capricorn");
        }
        else if (Number(day) > 19 && Number(day) < 32) {
            alert("Your zodiac sign is Aquarius");
        }
        else {
            alert("Date is not valid!");
        }
        break;

    case "February":
        if (Number(day) > 0 && Number(day) < 19) {
            alert("Your zodiac sign is Aquarius");
        }
        else if (Number(day) > 18 && Number(day) < 30) {
            alert("Your zodiac sign is Pisces");
        }
        else {
            alert("Date is not valid!");
        }
        break;
}





