document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById('create-task-form');
  const tasksElement = document.getElementById('tasks');

  createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = event.target.elements['new-task-description'].value;
    console.log(userInput)
    
    const listItem = document.createElement('li');
    listItem.innerText = userInput;

    tasksElement.appendChild(listItem);
    createTaskForm.reset()
  });
});