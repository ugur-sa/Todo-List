class ToDo {
  constructor(title, description, dueDate, priority, isChecked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isChecked = isChecked;
  }

  getTitle = () => {
    return this.title;
  }
  setTitle = (title) => {
    this.title = title;
  }
  getDecription = () => {
    return this.description;
  }
  setDescription = (description) => {
    this.description = description;
  }
  getDueDate = () => {
    return this.dueDate;
  }
  setDueDate = (dueDate) => {
    this.dueDate = dueDate;
  }
  getPriority = () => {
    return this.priority;
  }
  setPriotiry = (priority) => {
    this.priority = priority;
  }
  getIsChecked = () => {
    return this.isChecked;
  }
  setIsChecked = (isChecked) => {
    this.isChecked = isChecked;
  }
}

export default ToDo;