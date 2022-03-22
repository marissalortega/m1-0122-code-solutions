function clickTaskList(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target && event.target.tagName === 'BUTTON') {
    var element = document.querySelector('li');
    var closestElement = element.closest('.task-list-item');
    console.log('closest .task-list-item:', closestElement);
    closestElement.remove();
  }
}

var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', clickTaskList);
