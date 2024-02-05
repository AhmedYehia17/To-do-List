const input = document.getElementById('input-box');
const list = document.getElementById('list-container');
const add = document.getElementById('btn')

function addTask(){
    if(input.value === ''){
        alert("You Must write Something")
    }else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }

    input.value = "";
    saveData();

}

list.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data" , list.innerHTML);
}
function getData(){
    list.innerHTML=localStorage.getItem("data");
}
getData()
// add.addEventListener('click' , addTask());


