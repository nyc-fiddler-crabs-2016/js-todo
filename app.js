function Controller(todoList, view) {
  this.view = view;
  this.todoList = todoList;
}

Controller.prototype.create = function(params) {
  console.log(this);
  this.todoList.addTask(new Task(params));
  this.view.drawList(this.todoList);
}

//Driver code below

document.addEventListener('DOMContentLoaded', function(){
  var model = new TodoList({listName: 'My main list', tasks: [] });
  var view = new View(document.getElementById('list'), document.getElementById('new_task_form'));  
  var controller = new Controller(model, view);
  view.controller = controller;
  view.drawList(model);
});

