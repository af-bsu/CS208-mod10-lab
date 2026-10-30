function domLoaded() {
    let button = document.getElementById("add-button");
    button.addEventListener("click", addBtnClick());
}

function addBtnClick(event) {
    let textfield = document.getElementById("text-field");
    addTask(textfield.value);
}

function addTask(string) {
    console.log("Works!");
}

addEventListener("DOMContentLoaded", domLoaded());