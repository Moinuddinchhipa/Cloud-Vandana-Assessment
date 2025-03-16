
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.className = 'taskItem';
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="removeTask">Remove</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';

        const removeButton = listItem.querySelector('.removeTask');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }
}