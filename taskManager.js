class Task {
    constructor(id, title, isCompleted) {
        Object.defineProperty(this, 'id', {
            value: id,
            writable: false,
            configurable: false,
            enumerable: true
        });

        this.title = title;
        this.completed = isCompleted;
    }

    toggle() {
        return new Task(this.id, this.title, !this.completed);
    }
}

class TaskManager {
    constructor() {
        this._tasks = [];
    }

    get tasks() {
        return this._tasks;
    }

    setAllTasks(taskList) {
        this._tasks = [...taskList];
    }

    addNewTask(item) {
        this._tasks = [...this._tasks, item];
    }

    deleteTask(targetId) {
        this._tasks = this._tasks.filter(t => t.id !== targetId);
    }

    switchTaskStatus(targetId) {
        this._tasks = this._tasks.map(t => {
            if (t.id === targetId) {
                return t.toggle();
            }
            return t;
        });
    }
}
