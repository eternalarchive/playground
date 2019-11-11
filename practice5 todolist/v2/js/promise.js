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

const ajax = (() => {
  const req = (method, url, payload) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });

  return {
    get(url) {
      req('GET', url)
        .then(res => todos = res)
        .then(render)
        .catch(err => console.error(err));
    },
    post(url, payload) {
      req('POST', url, payload)
        .then(res => todos = res)
        .then(render)
        .catch(err => console.error(err));
    },
    delete(url) {
      req('DELETE', url)
        .then(res => todos = res)
        .then(render)
        .catch(err => console.error(err));
    },
    patch(url, payload) {
      req('PATCH', url, payload)
        .then((res) => todos = res)
        .then(render)
        .catch(err => console.error(err));
    }
  };
})();

const getTodos = () => {
  ajax.get('./todos');
};

const addTodos = payload => {
  ajax.post('./todos', payload);
};

const patchTodos = check => {
  const { id } = check.parentNode;
  const completed = !todos.find((todo) => todo.id === +id).completed;
  ajax.patch(`/todos/${id}`, { completed });
};

const deleteTodos = list => {
  const { id } = list.parentNode;
  ajax.delete(`/todos/${id}`);
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