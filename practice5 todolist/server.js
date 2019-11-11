const express = require('express');
const app = express();

let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

todos.sort((todo1, todo2) => todo2.id - todo1.id);

app.use(express.static('v2'));
app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.get('/', (req, res) => {
//   res.send('hello world!');
// });

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  console.log(req.body);
  todos = [req.body, ...todos];
  res.send(todos);
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const completed = req.body.completed;
  todos = todos.map(todo => todo.id === +id ? { ...todo, completed } : todo);
  res.send(todos);
});

app.patch('/todos', (req, res) => {
  const completed = req.body.completed;
  todos = todos.map(todo => ({ ...todo, completed: true }));
  res.send(todos);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  todos = todos.filter(todo => todo.id !== +id);
  res.send(todos);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
