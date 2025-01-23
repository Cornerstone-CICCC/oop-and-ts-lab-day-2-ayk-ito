import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor({ onComplete, onDelete } = {}) {
    super();
    this.todoListElement = document.createElement("ul");
    this.todoListElement.className = "todo-list-items";
    this.onComplete = onComplete;
    this.onDelete = onDelete;
  }

  addTodoItem(todo) {
    // const todoItem = new TodoItem(todoText);
    const todoItem = new TodoItem(todo, this.onComplete, this.onDelete);

    this.todoListElement.appendChild(todoItem.render());
    console.log(this.todoListElement);
  }

  toggleCompleted(id, isCompleted) {
    const li = this.todoListElement.querySelector(`[data-id="${id}"]`);
    if (li) {
      if (isCompleted) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    }
  }

  removeItem(id) {
    const li = this.todoListElement.querySelector(`[data-id="${id}"]`);
    if (li) {
      this.todoListElement.removeChild(li);
    }
  }
  render() {
    const todoListElement = document.createElement("div");
    todoListElement.className = "todo-list";
    todoListElement.appendChild(this.todoListElement);
    console.log(todoListElement);

    return todoListElement;
  }
}
