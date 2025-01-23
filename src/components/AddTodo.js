import { Component } from "../common/Component.js";
import { TodoList } from "./TodoList.js";

export class AddTodo extends Component {
  constructor() {
    super();
    this.todos = [];
    this.listeners = [];
    this.todoList = new TodoList();
  }

  addTodo(todo) {
    const newTodo = {
      id: Math.random() * (9000 - 1000) + 1000,
      description: todo,
      completed: false,
    };
    this.todos.push(newTodo);
    this.todoList.addTodoItem(newTodo);

    this.notifyListeners();
  }

  completeTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todoList.toggleCompleted(id, todo.completed);
    }
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
    this.todoList.removeItem(id);
  }
  subscribe(listener) {}
  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todos));
  }
  render() {
    const addElement = document.createElement("div");
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;

    addElement.querySelector("#todo-add-btn").addEventListener("click", () => {
      const todoInput = addElement.querySelector("#todo-input");
      const todoText = todoInput.value.trim();
      if (todoText) {
        this.addTodo(todoText);
        todoInput.value = "";
      }
      console.log(this.todos);
    });

    return addElement;
  }
}
