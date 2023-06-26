const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let todo = event.target.todo.value;
    const li = document.createElement("li");
    li.textContent = todo;
    const p = document.createElement("p");
    const ul = document.querySelector("ul");

    if (!todo) {
        p.textContent = "Error! Todo can not be empty";
        ul.prepend(p);
    } else {
        ul.append(li);
    }
    
    form.reset();

    let lis = document.querySelectorAll("li");
    for (let li of lis) {
        li.addEventListener("click", (event) => {
            event.target.style.textDecoration = "line-through";
        });
    }
});