var inputlista = document.getElementById("input-lista");
var listcontainer = document.getElementById("list-container");

function Addlist(){
    if (inputlista.value === '') {
        alert("You must enter a list");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputlista.value;
        listcontainer?.appendChild(li);
        // delete button 
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputlista.value = "";
    Savinglist();
}

listcontainer.addEventListener(("click"), function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        Savinglist(); 
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        Savinglist();
    }
},false);

// To save Data in local storage

function Savinglist(){
    localStorage.setItem("ListData",listcontainer.innerHTML);
}
function Getlist(){
    listcontainer.innerHTML = localStorage.getItem("ListData");
}

Getlist();