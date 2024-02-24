//

const todosList = document.querySelector(".todos-list");
const addButton = document.querySelector("#add-btn");
const todoInput = document.querySelector("#todo-input");
const todoCountEleement = document.querySelector(".todo-count");

const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector(".search");

let todos = [];

function displayTodos(todos) {
  todosList.innerHTML = "";
  if (todos.length === 0) {
    todoCountEleement.textContent = `Total Number of todos: ${todos.length}`;
    console.log("No todos found");
  } else {
    /*for (const todo of todos) {
      console.log(todo.description);
    }*/
    todos.forEach(function (todo, index) {
      //creat a div todoItem
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo");

      //add checkbox to todoItem
      const todoCheckbox = document.createElement("input");
      todoCheckbox.type = "checkbox";
      todoCheckbox.checked = todo.completed;
      todoCheckbox.addEventListener("change", () => check(index));
      todoItem.appendChild(todoCheckbox);

      //creat and add description to todoItem
      const todoDescription = document.createElement("p");
      todoDescription.textContent = todo.description;
      todoItem.appendChild(todoDescription);

      //creat and add delete button to todoItem
      const todoDeleteButton = document.createElement("button");
      todoDeleteButton.textContent = "Delete";
      todoDeleteButton.addEventListener("click", () => deletToDO(index));
      todoItem.appendChild(todoDeleteButton);

      //creat and add edit button to todoItem
      const todoEditButton = document.createElement("button");
      todoEditButton.textContent = "Edit";
      todoEditButton.addEventListener("click", () => eidtToDO(index));

      todoEditButton.addEventListener("mouseover", () => {
        todoEditButton.textContent = "Hello world";
      });
      todoEditButton.addEventListener("mouseout", () => {
        todoEditButton.textContent = "Edit";
      });
      todoItem.appendChild(todoEditButton);

      todoCountEleement.textContent = `Total Number of todos: ${todos.length}`;
      todosList.appendChild(todoItem);
    })
  }
}

function addToDO() {
  const todoDescription = todoInput.value.trim();
  if (todoDescription.trim() == "") {
    alert("write a descriotion to add");
  } else {
    const newTodo = {
      description: todoDescription,
      completed: false,
    };
    todos.push(newTodo);
    displayTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
  }
}

function check(checkbox) {
  if (checkbox.check) {
    checkbox.style.textDecoration = "line-through";
  } else {
    checkbox.style.textDecoration = "none";
  }
}

function pirntNoTodo(todos) {
  const todoItem = document.createElement("p");

  while (todos.length === 0) {
    todosList.appendChild(todoItem);
  }
}

function eidtToDO(index) {
  if (todoInput.value.trim() == "") {
    alert("write your edit in the field");
  } else {
    const todoDescription = todoInput.value.trim();
    const newTodo = {
      description: todoDescription,
      completed: false,
    };
    todos[index] = newTodo;
    displayTodos(todos);
  }
}

function deletToDO(index) {
  todos.splice(index, 1);
  displayTodos(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//load data from the localstorage when the window is loaded
function loadDataFromLokalStorage() {
  try {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      todos = storedTodos;
      displayTodos(todos);
    }
  } catch (error) {
    console.log(error);
    console.log("An error occured while fetching the todos from localstorage");
  }
}

window.addEventListener("DOMContentLoaded", loadDataFromLokalStorage)

addButton.addEventListener("click", addToDO);

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

//displayTodos(todos);

/*
function download() {
    alert('downloaded');
}
const downloadButton = document.getElementById('download-btn');
downloadButton.addEventListener("click", download);
*/

/*
const heading1 = document.getElementsByTagName("h1") [0];
console.log(heading1);
heading1.textContent = "My List";
heading1.style.color = "red";
*/
//heading1.classList.remove("title");
/*
const heading1 = document.getElementById('add-button');
heading1.textContent = "Add";
*/

/* 
const heading1 = document.querySelector("#id");
const heading1 = document.querySelector(".class");
getElementsByClassName();
getElementsByTagName();
getElementById();
*/

//localStorage.setItem('usernsme', 'Enas Kutbi');
//localStorage.getItem('username');
//localStorage.removeItem('username');
