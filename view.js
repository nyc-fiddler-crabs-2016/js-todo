function View(displayElement, form) {
  this.displayElement = displayElement;
  this.form = form;
  this.setupHandlers();
}

View.prototype.setupHandlers = function() {
  this.form.addEventListener('submit', function(event){
     event.preventDefault();
     console.log(event);
     params = {
        description: document.getElementById('task_description').value,
        dueDate: document.getElementById('task_due').value,
        done: document.getElementById('task_done').checked
     }
     this.controller.create(params);
  }.bind(this));
}

View.prototype.drawList = function(todoList) {
  var html = '<ul>';
  todoList.tasks.forEach(function(task) {
    html += '<li>';
    html += task.description;
    html += ' Done? ';
    html += task.ynDone();
    html += ' due: ';
    html += task.dueDate;
    html += '</li>';
  });
  html + '</ul>';
  this.displayElement.innerHTML = html;
}


