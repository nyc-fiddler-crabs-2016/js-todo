document.addEventListener('DOMContentLoaded', function(){
  var model = new TodoList({listName: 'My main list', tasks: [] });
  var view = new View(document.getElementById('list'), document.getElementById('new_task_form'));  
  var controller = new Controller(model, view);
  view.controller = controller;
  view.drawList(model);
});

