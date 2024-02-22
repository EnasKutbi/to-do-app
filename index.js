//

const todosList = document.querySelector(".todos-list");
const addButton = document.querySelector("#add-btn");
const todoInput = document.querySelector("#todo-input");

let todos = [
];

function displayTodos(todos) {
  todosList.innerHTML = "";
  if (todos.length === 0) {
    console.log("No todos found");
  } else {
    /*for (const todo of todos) {
      console.log(todo.description);
    }*/
    for (let index = 0; index < todos.length; index++) {
      //creat a div todoItem
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo");

      //add checkbox to todoItem
      const todoCheckbox = document.createElement("input");
      todoCheckbox.type = "checkbox";
      todoCheckbox.checked = todos[index].completed;
      todoItem.appendChild(todoCheckbox);

      //creat and add description to todoItem
      const todoDescription = document.createElement("p");
      todoDescription.textContent = todos[index].description;
      todoItem.appendChild(todoDescription);

      //creat and add delete button to todoItem
      const todoDeleteButton = document.createElement("button");
      todoDeleteButton.textContent = "Delete";
      todoDeleteButton.addEventListener("click", () => deletToDO(index));
      todoItem.appendChild(todoDeleteButton);

      //creat and add edit button to todoItem
      const todoEditButton = document.createElement("button");
      todoEditButton.textContent = "Edit";
      todoEditButton.addEventListener("click", () => eidtToDO(index) )
      todoItem.appendChild(todoEditButton);

      todosList.appendChild(todoItem);
    }
  }
}

function addToDO() {
  const todoDescription = todoInput.value.trim();
  if (todoDescription.trim() == '') {
    alert("write a descriotion to add");
  } else {
    const newTodo = {
      description: todoDescription,
      completed: false,
    };
    todos.push(newTodo);
    displayTodos(todos);
  }
}

function eidtToDO(index) {
  if (todoInput.value.trim() == '') {
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
}

addButton.addEventListener("click", addToDO);

displayTodos(todos);

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
