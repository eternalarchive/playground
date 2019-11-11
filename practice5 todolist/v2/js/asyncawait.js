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

const getTodos = async () => {
  try {
    const res = await axios.get('/todos');
    todos = res.data;
    render();
  } catch(e) {
    console.error('Error');
  }
};

const addTodos = async (content) => {
  try {
    const res = await axios.post('/todos', content);
    todos = res.data;
    render();
  } catch(e) {
    console.error('Error');
  }
};

const patchTodos = async (check) => {
  const { id } = check.parentNode;
  const completed = !todos.find(todo => todo.id === +id).completed;
  try {
    const res = await axios.patch(`/todos/${id}`, { completed })
    todos = res.data;
    render();
  } catch(e) {
    console.error('Error');
  }
};

const deleteTodos = async (list) => {
  const { id } = list.parentNode;
  try{
    const res = await axios.delete(`/todos/${id}`)
    todos = res.data;
    render();
  } catch(e) {
    console.error('Error');
  }
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