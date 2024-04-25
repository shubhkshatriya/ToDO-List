const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");

console.log(listContainer);

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        console.log(li);
        listContainer.appendChild(li)
    }
}