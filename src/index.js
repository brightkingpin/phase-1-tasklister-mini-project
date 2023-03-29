document.addEventListener("DOMContentLoaded", () => {
  // This is my TaskLister Mini-Project
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form submission behavior

    // create a new task list item

    const taskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = taskDescription.value;

    // add the new task to the task list
    taskList.appendChild(newTask);

    // reset the form input
    taskDescription.value = "";
  });
});
