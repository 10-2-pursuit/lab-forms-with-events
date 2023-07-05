console.log("Code your solution!")

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const errorMessage = document.getElementById('error-message');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do
function addTodo() {
  const todoText = todoInput.value.trim();

  // Check if the input is empty
  if (todoText === '') {
    errorMessage.textContent = 'upss Todo cannot be empty';
    return;
  }

  errorMessage.textContent = '';

  // Create a new list item
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;

  // Add event listener to cross out the to-do item when clicked
  todoItem.addEventListener('click', function() {
    todoItem.classList.toggle('completed');
  });

  // Add the new list item to the todo list
  todoList.appendChild(todoItem);

  // Clear the input
  todoInput.value = '';
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh
  addTodo(); // Add the new to-do
});
