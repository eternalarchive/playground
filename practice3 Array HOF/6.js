// 6. 특정 요소의 프로퍼티 값 반전
// todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function toggleCompletedById(id) {
  todos = todos.map(todo => {
    if (todo.id === id) todo.completed = !(todo.completed);
    return todo;
  });

  // todos = todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  // todos = todos.map(todo => (todo.id === id ? Object.assign(todo, { completed: !todo.completed }) : todo));

  return todos;
}

toggleCompletedById(2);

console.log(todos);
