/*$($.getJSON("http://localhost:5000/get-allCustormer",function(data){
    
const customers = data.response.customers;
const customersTabElement = $("#customersTab");
for(let i = 0; i<customers.length; i++){
const customer = customers[i];
    const row = document.createElement("tr");

    const firstName = document.createElement("td");
    firstName.innerHTML = customers.firstname;
    row.append(firstName);

    const lastName = document.createElement("td");
    lastName.innerHTML = customers.lastname;
    row.append(lastName);

    //const firstName = document.createElement("td");

    //const firstName = document.createElement("td");
}
//console.log(data.response)
}));*/

$($.getJSON("http://localhost:5000/get-allCustomer",
    function(data) {

        const customers = data.response.customers;
        const customersTabElement = $("#customersTab");
        for (let i = 0; i < customers.length; i++) {
            const customer = customers[i];

            const row = document.createElement("tr");

            const firstName = document.createElement("td");
            firstName.innerHTML = customer.firstname;
            row.append(firstName);

            const lastName = document.createElement("td");
            lastName.innerHTML = customer.lastname;
            row.append(lastName);

            const email = document.createElement("td");
            email.innerHTML = customer.email;
            row.append(email);

            const phone = document.createElement("td");
            phone.innerHTML = customer.phone;
            row.append(phone);

            customersTabElement.append(row);
        }
    }))