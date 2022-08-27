class Project {
  constructor(name, todos) {
    this.name = name;
    this.todos = todos;
  }

  getName = () => {
    return this.name;
  }
  setName = (name) => {
    this.name = name;
  }
  getTodo = (index) => {
    return this.todos[index];
  }
  setTodo = (index, todo) => {
    this.todos[index] = todo;
  }
}

export default Project;