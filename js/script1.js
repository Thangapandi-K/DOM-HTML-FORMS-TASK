// hHeading & Description

const container = document.createElement("div");
container.setAttribute("class", "container p-4");


const head = document.createElement("div");
head.setAttribute("id", "head");

const title = document.createElement("h1");
title.innerHTML = "FORM TASK";
title.setAttribute("id", "title");

const description = document.createElement("p");
description.innerHTML = "DOM MANIPULATION WITH FORMS";
description.setAttribute("id", "description");

// Form

const form = document.createElement("form");
form.setAttribute("id", "form");
form.setAttribute("class", "p-5");

let fName = createFormElement("First Name : ", "first-name", "First Name", "text");
let lName = createFormElement("Last Name : ", "last-name", "Last Name", "text");
let email = createFormElement("E-Mail : ", "email", "E-Mail", "email");
let address = createAddressElement("Address : ", "address", "Address", "text");
let pincode = createFormElement("Pincode : ", "pincode", "Pincode", " ");
let gender = createRadio();
let foods = createFoodChoices();
let state = createFormElement("State : ", "state", "State", "text");
let country = createFormElement("Country : ", "country", "Country", "text");
let submit = createButton();

const tableDiv = document.createElement("div");
tableDiv.setAttribute("class", "row");

const table = document.createElement("table");
table.setAttribute("class", "table table-responsive");

const thead = document.createElement("thead");

const tbody = document.createElement("tbody");

const tr1 = document.createElement("tr");

const th1 = document.createElement("th");
th1.innerHTML = "First Name";

const th2 = document.createElement("th");
th2.innerHTML = "Last Name";

const th3 = document.createElement("th");
th3.innerHTML = "E-Mail";

const th4 = document.createElement("th");
th4.innerHTML = "Address";

const th5 = document.createElement("th");
th5.innerHTML = "Pincode";

const th6 = document.createElement("th");
th6.innerHTML = "Gender";

const th7 = document.createElement("th");
th7.innerHTML = "Favourite Foods";

const th8 = document.createElement("th");
th8.innerHTML = "State";

const th9 = document.createElement("th");
th9.innerHTML = "Country";

document.body.appendChild(container);
container.append(head, form, tableDiv);
head.append(title, description);
form.append(fName, lName, email, address, pincode, gender, foods, state, country, submit);
tableDiv.appendChild(table);
table.append(thead, tbody);
thead.appendChild(tr1);
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);

function createButton() {
    const formDiv = document.createElement("div");
    formDiv.setAttribute("class", "row");

    const btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.setAttribute("class", "btn btn-primary");
    btn.setAttribute("id", "submit");
    btn.innerHTML = "Submit";
    btn.onclick = action;

    formDiv.appendChild(btn);

    return formDiv;
}


function createFormElement(inText, idName, placeholder, inType) {

    const formDiv = document.createElement("div");
    formDiv.setAttribute("class", "form-group row");

    let formLabel = document.createElement("label");
    formLabel.innerHTML = inText;
    formLabel.setAttribute("class", "col-form-label col-4 label");
    formLabel.setAttribute("for", idName);
    
    let formInput = document.createElement("input");
    formInput.setAttribute("placeholder", placeholder);
    formInput.setAttribute("id", idName);
    formInput.setAttribute("type", inType);
    formInput.setAttribute("class", "form-control col-6");
    formInput.required = true;

    formDiv.append(formLabel, formInput);

    return formDiv;
}

function createAddressElement(inText, idName, placeholder, inType) {

    const formDiv = document.createElement("div");
    formDiv.setAttribute("class", "form-group");

    let addressLabel = document.createElement("label");
    addressLabel.innerHTML = inText;
    addressLabel.setAttribute("class", "form-label");
    addressLabel.setAttribute("for", idName);
    
    let addressInput = document.createElement("textarea");
    addressInput.setAttribute("placeholder", placeholder);
    addressInput.setAttribute("id", idName);
    addressInput.setAttribute("type", inType);
    addressInput.setAttribute("class", "form-control");
    addressInput.required = true;

    formDiv.append(addressLabel, addressInput);

    return formDiv;
}

function createRadio() {

    const fieldset = document.createElement("fieldset");
    fieldset.setAttribute("class", "form-group");

    let fieldDiv = document.createElement("div");
    fieldDiv.setAttribute("class", "row");

    let legend = document.createElement("legend");
    legend.setAttribute("class", "col-form-label col-4")
    legend.innerHTML = "Gender : "

    let radioDiv = document.createElement("div");
    radioDiv.setAttribute("class", "col-6 pl-1");

    let r1 = document.createElement("div");
    r1.setAttribute("class", "form-check");

    let male = document.createElement("label");
    male.setAttribute("for", "male");
    male.setAttribute("class", "form-check-label");
    male.innerHTML = "Male";

    let radio1 = document.createElement("input");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("class", "form-check-input");
    radio1.checked = true;
    radio1.setAttribute("id", "male");
    radio1.setAttribute("value", "Male");
    radio1.name = "gender";

    let r2 = document.createElement("div");
    r2.setAttribute("class", "form-check");

    let female = document.createElement("label");
    female.setAttribute("for", "female");
    female.innerHTML = "Female";
    let radio2 = document.createElement("input");
    radio2.setAttribute("class", "form-check-input");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("id", "female");
    radio2.setAttribute("value", "Female");
    radio2.name = "gender";

    fieldset.appendChild(fieldDiv);
    fieldDiv.append(legend, radioDiv);
    radioDiv.append(r1, r2);
    r1.append(radio1, male);
    r2.append(radio2, female);

    return fieldset;
}

function createFoodChoices() {
    const formDiv = document.createElement("div");
    formDiv.setAttribute("class", "form-group row")

    let foodLabel = document.createElement("label");
    foodLabel.setAttribute("class", "col-form-label col-4");
    foodLabel.innerHTML = "Favourite Food : ";

    let foodSelect = document.createElement("select");
    foodSelect.setAttribute("class", "form-control col-6");
    foodSelect.setAttribute("id", "food");
    foodSelect.multiple = true;
    foodSelect.required = true;

    foodSelect.add(new Option("Idly", "Idly"));
    foodSelect.add(new Option("Dosa", "Dosa"));
    foodSelect.add(new Option("Pongal", "Pongal"));
    foodSelect.add(new Option("Chappathi", "Chappathi"));
    foodSelect.add(new Option("Biriyani", "Biriyani"));

    formDiv.append(foodLabel, foodSelect);
    return formDiv;
}

function action() {
    let fn = document.getElementById("first-name").value;
    let ln = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let add = document.getElementById("address").value;
    let picode = document.getElementById("pincode").value;
    let gen = document.querySelector('input[name="gender"]:checked').value;
    let food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    let st = document.getElementById("state").value;
    let ct = document.getElementById("country").value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert("Please Enter Last Name");
    } else if (!email) {
        alert('Please Enter Email');
    } else if (!add) {
        alert('Please Enter Address');
    } else if (!picode) {
        alert('Please Enter Pincode');
    } else if (!st) {
        alert('Please Enter State');
    } else if (!ct) {
        alert('Please Enter Country');
    } else {

    let tableBody = document.querySelector("tbody");
    let tr2 = tableBody.insertRow(0);
    let cell1 = tr2.insertCell(0);
    let cell2 = tr2.insertCell(1);
    let cell3 = tr2.insertCell(2);
    let cell4 = tr2.insertCell(3);
    let cell5 = tr2.insertCell(4);
    let cell6 = tr2.insertCell(5);
    let cell7 = tr2.insertCell(6);
    let cell8 = tr2.insertCell(7);
    let cell9 = tr2.insertCell(8);

    cell1.innerHTML = fn;
    cell2.innerHTML = ln;
    cell3.innerHTML = email;
    cell4.innerHTML = add;
    cell5.innerHTML = picode;
    cell6.innerHTML = gen;
    cell7.innerHTML = food;
    cell8.innerHTML = st;
    cell9.innerHTML = ct;

    alert("Thanks for submitting the form!!")

    document.getElementById("form").reset();
}
}



