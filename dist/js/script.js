addEventListener("DOMContentLoaded", domLoaded);

let button = document.getElementById("add-button");
let listElement = document.getElementById("todo-list");
let textfield = document.getElementById("text-field");

function domLoaded() {
    button.addEventListener("click", addBtnClick);
    textfield.addEventListener("keyup", function(event) { if (event.key == "Enter") { addBtnClick() } });
}

function addBtnClick(event) {
    let task = textfield.value.trim();
    if (task != "") {
        addTask(task);
        textfield.value = "";
        textfield.focus();
    }
}

function addTask(string) {
    let newEntry = document.createElement("li");
    newEntry.innerHTML = '<div class="task-row"><span class="task-text">' + string + '</span><button class="done-btn">&#10006;</button></div>';
    listElement.appendChild(newEntry);
    let doneButtonQuery = document.querySelectorAll(".done-btn");
    doneButtonQuery[doneButtonQuery.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
    let li = event.target.parentElement;
    li.remove();
}