const inputBox = document.getElementById("input-box");
const listBucket = document.getElementById("list-bucket");

function addTask(){
    if(inputBox.value === ''){
        alert("you want to write something!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBucket.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listBucket.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);

function saveData(){
    localStorage.setItem("data",listBucket.innerHTML);
}
function showTask(){
    listBucket.innerHTML = localStorage.getItem("data");
}
showTask();
