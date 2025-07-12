// Global List
let task = [];
let currentFilter = 'all'; // nilai default

//Function to add a task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date");

    // Validate input
    if (taskInput.value.trim() === "" || dueDateInput.value.trim() === "") {
        alert("Please fill in both task and due date.");
        return;
    }

    // Create a new task object
    const newTask = {
        id: Date.now(),
        name: taskInput.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    // Add the new task to the global task array
    task.push(newTask);
    taskInput.value = "";
    dueDateInput.value = "";
    displayTasks();
}

function displayTasks() {
    const tableBody = document.getElementById("task-table-body");
    tableBody.innerHTML = "";

    let filteredTasks = task;
    if (currentFilter === "completed") {
        filteredTasks = task.filter(item => item.completed);
    } else if (currentFilter === "pending") {
        filteredTasks = task.filter(item => !item.completed);
    }

    if (filteredTasks.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center text-gray-400 py-4">No task found</td>
            </tr>
        `;
        return;
    }

    filteredTasks.forEach((item) => {
        const row = document.createElement("tr");
        row.className = "border-b border-gray-700";

        row.innerHTML = `
            <td class="px-3 py-2 ${item.completed ? 'line-through text-gray-500' : ''}">${item.name}</td>
            <td class="px-3 py-2">${item.dueDate}</td>
            <td class="px-3 py-2">${item.completed ? "Completed" : "Pending"}</td>
            <td class="px-3 py-2">
                <button onclick="toggleTask(${item.id})" class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs">
                    ${item.completed ? "Undo" : "Done"}
                </button>
                <button onclick="deleteTask(${item.id})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs ml-1">
                    Delete
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteTask(id) {
    task = task.filter(item => item.id !== id);
    displayTasks();
}

// Function to delete all task
function deleteAllTasks() {
    tasks = []; // Clear the tasks array
    displayTasks(); // Refresh the displayed task list
}

function toggleTask(id) {
    task = task.map(item => {
        if (item.id === id) {
            return {
                ...item,
                completed: !item.completed
            };
        }
        return item;
    });
    displayTasks();
}

// Filter Tasks by Status
function filterTasks(type) {
    currentFilter = type;
    displayTasks();
}
