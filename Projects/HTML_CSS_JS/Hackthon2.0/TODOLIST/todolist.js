
const btnClick = document.getElementById("btnadd");
document.getElementById('emptyList').style.display = "block";
document.getElementById('editContainer').style.display = "none";

let count = 1;
btnClick.addEventListener('click', function () {
    console.log("Function Trigger");
    let inputText = document.getElementById('inputText').value;
    let displayList = document.getElementById('displayList');


    if (inputText.trim() !== '') {
        document.getElementById('emptyList').style.display = "none";
        console.log(inputText);

        let createLiElement = document.createElement("li");
        createLiElement.classList.add("taskItem");
        createLiElement.id = `list-${count++}`;
        createLiElement.innerHTML = `<span>${inputText}</span>
        <i class="fa fa-check"></i>
        <button onclick="editTask(this)">EDIT</button>
        <button onclick="deleteTask(this)" id="deleteBtn"><i class="fa fa-close"></i></button>`;
        displayList.appendChild(createLiElement);
        document.getElementById('inputText').value = '';
    }
});
let count1 = count;

let editBtn = function editBtn() {
    let editinputText = document.getElementById('editinputText').value;
    let listId = document.getElementById('hdnValue').getAttribute("data-id");

    document.getElementById(`${listId}`).innerHTML = `<span>${editinputText}</span>
        <i class="fa fa-check"></i>
        <button onclick="editTask(this)" id="editBtn">EDIT</button>
        <button onclick="deleteTask(this)" id="deleteBtn"><i class="fa fa-close"></i></button>`;

    document.getElementById('editContainer').style.display = "none";
}

let editTask = function editTask(button) {

    document.getElementById('editContainer').style.display = "block";
    let fetchInputText = button.previousElementSibling.previousElementSibling.innerText;
    document.getElementById('editinputText').value = `${fetchInputText}`;
    // console.log(button.previousElementSibling.innerText);
    // console.log(button.previousElementSibling.previousElementSibling.innerText);
    let editinputText = document.getElementById('editinputText').value;
    document.getElementById('hdnValue').setAttribute('data-id', `list-${count1++}`);
    if (editinputText.trim() !== '' && editinputText != fetchInputText) {
        editBtn();
    }

}

function deleteTask(button) {
    let listItem = button.parentElement;
    console.log(listItem);
    listItem.remove();
}

const cancelBtn = document.getElementById("cancelBtn");
cancelBtn.addEventListener('click', function () { 
    document.getElementById('hdnValue').remove;
    document.getElementById('editContainer').style.display = "none";
});
