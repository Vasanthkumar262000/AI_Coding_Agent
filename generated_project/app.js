// TodoApp implementation
// Define Todo class
function Todo(id, text, completed) {
  this.id = id;
  this.text = text;
  this.completed = completed;
}

// TodoStore manages Todo instances and persistence
var TodoStore = (function () {
  var STORAGE_KEY = 'todos';
  var todos = [];

  // Load todos from localStorage
  function loadFromStorage() {
    var data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      try {
        var parsed = JSON.parse(data);
        // Recreate Todo objects
        todos = parsed.map(function (item) {
          return new Todo(item.id, item.text, item.completed);
        });
      } catch (e) {
        console.error('Failed to parse todos from storage', e);
        todos = [];
      }
    } else {
      todos = [];
    }
  }

  // Save current todos to localStorage
  function saveToStorage() {
    var data = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, data);
  }

  // Generate a simple unique id
  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  // Add a new todo
  function addTodo(text) {
    var todo = new Todo(generateId(), text, false);
    todos.push(todo);
    saveToStorage();
    return todo;
  }

  // Delete a todo by id
  function deleteTodo(id) {
    todos = todos.filter(function (t) { return t.id !== id; });
    saveToStorage();
  }

  // Toggle completed flag
  function toggleComplete(id) {
    var todo = todos.find(function (t) { return t.id === id; });
    if (todo) {
      todo.completed = !todo.completed;
      saveToStorage();
    }
  }

  // Get a copy of the todo list
  function getTodos() {
    // Return a shallow copy to prevent external mutation
    return todos.slice();
  }

  // Public API
  return {
    loadFromStorage: loadFromStorage,
    saveToStorage: saveToStorage,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    toggleComplete: toggleComplete,
    getTodos: getTodos,
  };
})();

// DOM utilities
function renderTodoItem(todo) {
  var li = document.createElement('li');
  li.setAttribute('data-id', todo.id);

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!todo.completed;
  checkbox.addEventListener('change', function () {
    TodoStore.toggleComplete(todo.id);
    renderTodoList();
  });

  var span = document.createElement('span');
  span.textContent = todo.text;
  if (todo.completed) {
    span.style.textDecoration = 'line-through';
  }

  var delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', function () {
    TodoStore.deleteTodo(todo.id);
    renderTodoList();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  return li;
}

function renderTodoList() {
  var listEl = document.getElementById('todo-list');
  if (!listEl) return;
  // Clear existing items
  listEl.innerHTML = '';
  var todos = TodoStore.getTodos();
  todos.forEach(function (todo) {
    var itemEl = renderTodoItem(todo);
    listEl.appendChild(itemEl);
  });
}

// Event listeners for adding todos
function setupAddTodo() {
  var input = document.getElementById('new-todo-input');
  var btn = document.getElementById('add-todo-btn');
  if (!input || !btn) return;

  function addFromInput() {
    var text = input.value.trim();
    if (text) {
      TodoStore.addTodo(text);
      input.value = '';
      renderTodoList();
    }
  }

  btn.addEventListener('click', addFromInput);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addFromInput();
    }
  });
}

// Initialize app on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  TodoStore.loadFromStorage();
  renderTodoList();
  setupAddTodo();
});

// Expose for debugging if needed
window.Todo = Todo;
window.TodoStore = TodoStore;
window.renderTodoList = renderTodoList;
