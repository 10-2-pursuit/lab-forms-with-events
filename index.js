console.log("Code your solution!")

const result = document.getElementById("result");
const form = document.querySelector(".form");

form.addEventListener("submit", e => {
    e.preventDefault();
    let todo = e.target.todo.value;
    const result = document.getElementById("result");
    const err = document.getElementById("err");
    if(!todo){
       err.textContent = "Error! To do cannot be empty!";
    }
    else{
        err.textContent = "";
        const li=document.createElement("li");
        li.setAttribute("class", "todo_list");
        li.textContent = todo;
        li.addEventListener("click", event => {    
            if(li.style.textDecoration == "line-through"){
                li.style.textDecoration = null;
            }
            else{
                li.style.textDecoration = "line-through";
            }
        })
        result.appendChild(li);
    }
    
    form.reset();
});