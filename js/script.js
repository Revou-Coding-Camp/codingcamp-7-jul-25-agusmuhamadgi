
//  Global List
let task =[];
// Function to add a task
function addTask(){
    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date-input");

    //validate input
    if(taskInput.value.trim() === "" || dueDateInput.value.trim() === ""){
        alert("Please fill in both task and due date.");
        return;
    } else {
        // Create a new task object
        const newTask = {
            id: Date.now(),
            name: taskInput.value,
            dueDate: dueDateInput.value,
            completed: false
        };

        // Add the new task to the task array
        task.push(newTask);

        // Clear the input fields
        taskInput.value = "";
        dueDateInput.value = "";

        // Log the new task (for demonstration purposes)
        displayTasks();
    }

function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear the current list


    }
}