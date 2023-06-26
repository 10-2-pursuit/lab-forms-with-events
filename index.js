const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let todo = event.target.todo.value

    createList(todo)

    form.reset()   
});

function createListTemplate(todo){
    const li = document.createElement("li")
    li.textContent = todo

    return li
}

function createList(todo){
    const li = createListTemplate(todo)
    const ul = document.querySelector("ul")

    ul.append(li)

}
