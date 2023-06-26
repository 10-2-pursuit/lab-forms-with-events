console.log("Code your solution!")
const form = document.querySelector('#form');
const input = document.querySelector('#todo');
const errorPara = document.querySelector('#err');
const ul = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value;

  const todos = todoText.split('\n');
  todos.forEach((todo) => {
    if (todo.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = todo.trim();
      
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      li.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        li.remove();
      });

      li.addEventListener('click', (event) => {
        const clickedLi = event.target;
        clickedLi.classList.toggle('completed');
      });

      ul.appendChild(li);
    }
  });

  input.value = '';
  errorPara.textContent = '';
  form.reset();
});