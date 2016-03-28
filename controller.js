function Controller(todoList, view) {
  this.view = view;
  this.todoList = todoList;
}

Controller.prototype.create = function(params) {
  console.log(this);
  this.todoList.addTask(new Task(params));
  this.view.drawList(this.todoList);
}
