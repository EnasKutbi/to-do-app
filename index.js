//

const todosList = document.querySelector(".todos-list");
const addButton = document.querySelector("#add-btn");
const todoInput = document.querySelector("#todo-input");
const todoCountElement = document.querySelector(".todo-count");
const searchButton = document.querySelector("#search-btn");

const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector(".search");

let todos = [];

function displayTodos(todos) {
  todosList.innerHTML = "";
  if (todos.length === 0) {
    todoCountElement.textContent = `Total Number of todos: ${todos.length}`;
  } else {
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
      todoDescription.style.width = "200px";
      todoItem.appendChild(todoDescription);

      //creat and add edit button to todoItem
      const todoEditButton = document.createElement("button");
      todoEditButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
      todoEditButton.addEventListener("click", () => eidtTodo(index));
      mouse(
        todoEditButton,
        "Edit",
        `<i class="fa-solid fa-pen-to-square"></i>`
      );
      todoItem.appendChild(todoEditButton);

      //creat and add delete button to todoItem
      const todoDeleteButton = document.createElement("button");
      todoDeleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      todoDeleteButton.addEventListener("click", () => deletToDO(index));
      mouse(todoDeleteButton, "Delete", `<i class="fa-solid fa-trash"></i>`);
      todoItem.appendChild(todoDeleteButton);

      todoCountElement.textContent = `Total Number of todos: ${todos.length}`;
      todosList.appendChild(todoItem);
    });
    //search
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      searchTodo(searchInput);
    });
  }
}

function addToDO() {
  const todoDescription = todoInput.value.trim();
  if (todoDescription) {
    const newTodo = {
      description: todoDescription,
      completed: false,
    };
    todos.push(newTodo);
    displayTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
  } else {
    alert("write a descriotion to add");
  }
}

function eidtTodo(index) {
  const newDescription = prompt("Edit Todo: ", todos[index].description);
  if (newDescription) {
    todos[index].description = newDescription;
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos(todos);
  } else {
    alert("write your edit for todo");
  }
}

function deletToDO(index) {
  todos.splice(index, 1);
  displayTodos(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function searchTodo(input) {
  if (input) {
    const searchItem = input.value.trim().toLowerCase();
    const filterdTodos = [];
    todos.forEach((todo) => {
      if (todo.description.toLowerCase().includes(searchItem)) {
        filterdTodos.push(todo);
      }
    });
    displayTodos(filterdTodos);
  } else {
    displayTodos(todos);
    alert("enter a valid input");
  }
}

//this function for hovor
function mouse(button, mouseover, mouseout) {
  button.addEventListener("mouseover", () => {
    button.textContent = mouseover;
  });
  button.addEventListener("mouseout", () => {
    button.innerHTML = mouseout;
  });
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

window.addEventListener("DOMContentLoaded", loadDataFromLokalStorage);

addButton.addEventListener("click", addToDO);
mouse(addButton, "add", `<i class="fa-solid fa-plus"></i>`);
mouse(searchButton, "Search", `<i class="fa-solid fa-magnifying-glass"></i>`);
searchForm.addEventListener("submit", () => searchTodo(searchInput));
