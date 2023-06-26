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

    const removeButton = document.createElement("button")
    removeButton.innerText = "remove"

    li.addEventListener("click", (e) => {
        if(li.getAttribute("style")) {
            li.toggleAttribute("style")
        } else {
            li.setAttribute("style","text-decoration: line-through")
        }
    })

    li.append(removeButton)

    removeButton.addEventListener("click", (e) => {
        li.remove()
    })

    return li
}

function createList(todo){
    const li = createListTemplate(todo)
    const ul = document.querySelector("ul")

    ul.append(li)

}
