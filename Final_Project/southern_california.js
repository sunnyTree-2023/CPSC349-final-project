const input = document.querySelector("#new-todo-input");
const form = document.querySelector("#new-todo-form");
const todoList = document.querySelector("#todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = input.value;

  if (!newTodoText) {
    alert("Please fill out the task!");
    return;
  }

  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  const newTodoContent = document.createElement("div");
  newTodoContent.classList.add("content");

  const newTodoInput = document.createElement("input");
  newTodoInput.type = "text";
  newTodoInput.value = newTodoText;
  newTodoInput.classList.add("text");
  newTodoInput.setAttribute("readonly", "readonly");

  const newActions = document.createElement("div");
  newActions.classList.add("actions");

  const newEditBtn = document.createElement("button");
  newEditBtn.classList.add("edit");
  newEditBtn.innerText = "Edit";

  const newDeleteBtn = document.createElement("button");
  newDeleteBtn.classList.add("delete");
  newDeleteBtn.innerText = "Delete";

  newTodo.append(newTodoContent);
  newTodoContent.append(newTodoInput);
  newTodo.append(newActions);
  newActions.append(newEditBtn);
  newActions.append(newDeleteBtn);
  todoList.append(newTodo);

  newEditBtn.addEventListener("click", () => {
    if (newEditBtn.innerText.toLowerCase() === "edit") {
      newTodoInput.removeAttribute("readonly");
      newTodoInput.focus();
      newEditBtn.innerText = "Save";
    } else {
      newTodoInput.setAttribute("readonly", "readonly");
      newEditBtn.innerText = "edit";
    }
  });

  newDeleteBtn.addEventListener("click", () => {
    todoList.removeChild(newTodo);
  });

  input.value = "";
});
