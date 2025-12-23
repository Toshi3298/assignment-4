const appManager = new TaskManager();

const btnLoad = document.querySelector('#loadTasksBtn');
const msgDisplay = document.querySelector('#statusMessage');
const listContainer = document.querySelector('#taskList');

async function loadDataFromServer() {
    try {
        msgDisplay.textContent = "Loading tasks...";
        msgDisplay.classList.remove('error');
        listContainer.innerHTML = "";

        const response = await Server.getAll();

        const asString = JSON.stringify(response);
        const asObjects = JSON.parse(asString);

        const taskObjects = asObjects.map(obj =>
            new Task(obj.id, obj.title, obj.completed)
        );

        appManager.setAllTasks(taskObjects);

        refreshList();

        msgDisplay.textContent = "";

    } catch (err) {
        console.error(err);
        msgDisplay.textContent = "Failed to load tasks.";
        msgDisplay.classList.add('error');
    }
}

function refreshList() {
    listContainer.innerHTML = "";

    const currentTasks = appManager.tasks;

    currentTasks.forEach(task => {
        const row = document.createElement('div');
        row.className = 'task';

        if (task.completed) {
            row.classList.add('completed');
        }

        const txt = document.createElement('span');
        txt.textContent = task.title;

        const btnGroup = document.createElement('div');
        btnGroup.className = 'task-actions';

        const btnToggle = document.createElement('button');
        btnToggle.className = 'toggle-btn';
        btnToggle.textContent = task.completed ? "Undo" : "Complete";

        const btnDelete = document.createElement('button');
        btnDelete.className = 'delete-btn';
        btnDelete.textContent = "Delete";

        btnToggle.addEventListener('click', () => {
            appManager.switchTaskStatus(task.id);
            refreshList();
        });

        btnDelete.addEventListener('click', () => {
            appManager.deleteTask(task.id);
            refreshList();
        });

        btnGroup.appendChild(btnToggle);
        btnGroup.appendChild(btnDelete);

        row.appendChild(txt);
        row.appendChild(btnGroup);

        listContainer.appendChild(row);
    });
}

btnLoad.addEventListener('click', loadDataFromServer);
