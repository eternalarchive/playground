let todos = [];

// DOMs
const $todos = document.querySelector('.todos');
const $input = document.querySelector('.input-todo');
const $removeTodo = document.querySelector('.remove-todo');

const render = () => {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `
      <li id="${id}" class="todo-item">
        <input class="checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`;
  });
  $todos.innerHTML = html;
};

const getTodos = () => {
  fetch('/todos', { method: 'GET' })
    .then(res => res.json())
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const addTodos = content => {
  fetch('/todos', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(content)
  })
    .then(res => res.json())
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const patchTodos = check => {
  const { id } = check.parentNode;
  const completed = !todos.find((todo) => todo.id === +id).completed;
  fetch(`/todos/${id}`, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ completed })
  })
    .then(res => res.json())
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const deleteTodos = list => {
  const { id } = list.parentNode;
  fetch(`/todos/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(_todos => todos = _todos)
    .then(render)
    .catch(err => console.error(err));
};

const generateId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1);

window.onload = () => {
  getTodos();
};

$input.onkeyup = ({ target, keyCode }) => {
  const content = target.value.trim();
  if (keyCode !== 13 || content === '') return;
  const newTodo = { id: generateId(), content, completed: false };
  $input.value = '';
  addTodos(newTodo);
};

$todos.onchange = ({ target }) => {
  patchTodos(target);
};

$todos.onclick = ({ target }) => {
  if (!target.classList.contains('remove-todo')) return;
  deleteTodos(target);
};