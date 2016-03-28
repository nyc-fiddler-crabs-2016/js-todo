function Task(args) {
  args = args || {};
  this.description = args.description;
  this.done = args.done;
  this.dueDate = args.dueDate;
}

Task.prototype.ynDone = function() {
  return this.done ? "Yes" : "No";
}

function TodoList(args) {
  args = args || {};
  this.listName = args.listName;
  this.tasks = args.tasks || [];
}

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}
