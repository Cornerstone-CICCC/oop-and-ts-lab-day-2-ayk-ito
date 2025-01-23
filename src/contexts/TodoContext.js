export class TodoContext {
  constructor() {
    super();
    this.todos = [];
  }

  addTodo(description) {
    const newTodo = {
      id: Math.random().toString(36).substr(2, 9),
      description,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  completeTodo(id) {
    const target = this.todos.find((todo) => todo.id === id);
    if (target) {
      target.completed = !target.completed;
    }
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
