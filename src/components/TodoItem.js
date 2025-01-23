import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(todo, onComplete, onDelete) {
    super();
    this.todo = todo;
    this.onComplete = onComplete;
    this.onDelete = onDelete;
  }
  // render() {
  //   const todoElement = document.createElement("li");
  //   todoElement.className = "todo-item";
  //   todoElement.textContent = this.todoText;
  //   return todoElement;
  // }

  render() {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = this.todo.id;
    console.log(this.todo);

    li.textContent = this.todo.description;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Mark Complete";
    completeBtn.addEventListener("click", () => {
      if (this.onComplete) {
        this.onComplete(this.todo.id);
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      if (this.onDelete) {
        this.onDelete(this.todo.id);
      }
    });

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    if (this.todo.completed) {
      li.classList.add("completed");
    }

    return li;
  }
}
