// 1. html 생성
// 아래 배열을 사용하여 html을 생성하는 함수를 작성하라.

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function render() {
  let html = '';

  todos.forEach(todo => {
    html += `<li id="${todo.id}">
  <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>
    ${todo.content}
  </label>
</li>
`;
  });

//   todos.forEach(function (todo) {
//     html += `<li id="${todo.id}">
//   <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>
//     ${todo.content}
//   </label>
// </li>
// `;
//   });

  return html;
}

console.log(render());
