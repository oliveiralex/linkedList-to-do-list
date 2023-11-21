const { LinkedList } = require('./linked_list');

const TaskStatus = {
    PENDING: "Pending",
    COMPLETED: "Completed",
};

class Task {
    constructor(id, description, tag, status = TaskStatus.PENDING) {
        this.id = id;
        this.description = description;
        this.tag = tag;
        this.status = status;
    }

    getId = () => {
        return this.id;
    };

    getDescription = () => {
        return this.description;
    };

    setDescription = (description) => {
        this.description = description;
    };

    getTag = () => {
        return this.tag;
    };

    setTag = (tag) => {
        this.tag = tag;
    };

    getStatus = () => {
        return this.tag;
    };

    setStatus = (status) => {
        this.status = status;
    };
    
    toString() {
        return `Task: ${this.description} | Tag: ${this.tag} | Status: ${this.status}`;
    }
}

class TaskList {
    constructor() {
        this.tasks = new LinkedList();
    }

    addTask = (task, index = null) => {
        if (index === null) {
            this.tasks.addAtEnd(task);
            // console.log(`Task "${task.description}" added to the list.`);
            return;
        }
        if (!this.tasks.get(index)) {
            // console.error(`The position ${index} is invalid. The task was not added.`);
            return;
        }
        this.tasks.addAtPosition(index, task);
        // console.log(`Task "${task.description}" added at position "${index}".`);
    };

    getTasksByTag = (tag) => {
        let current = this.tasks.head;
        const tasksByTag = [];

        while (current) {
            if (current.value.tag === tag) {
                tasksByTag.push(current.value);
            }
            current = current.next;
        }

        return tasksByTag;
    };

    getTaskById = (id) => {
        let current = this.tasks.head;
        while (current) {
            if (current.value.id === id) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    };

    removeTaskById = (id) => {
        const taskItem = this.getTaskById(id);
        if (taskItem) {
            return this.tasks.remove(taskItem);
        }
        return null;
    };

    removeTaskByIndex = (index) => {
        const item = this.tasks.removeAtPosition(index);
        if (item === null) {
            console.error(`The position ${index} is invalid. The task was not deleted.`);
            return;
        }
        console.log(`Task "${item.description}" deleted.`);
    };

    setTaskToCompleted = (id) => {
        const taskItem = this.getTaskById(id);
        if (taskItem) {
            taskItem.setStatus(TaskStatus.COMPLETED);
        }
        return taskItem;
    };

    setTaskDescriptionById = (id, description) => {
        const taskItem = this.getTaskById(id);
        if (taskItem) {
            taskItem.setDescription(description);
        }
        return taskItem;
    };

    setTaskTagById = (id, tag) => {
        const taskItem = this.getTaskById(id);
        if (taskItem) {
            taskItem.setTag(tag);
        }
        return taskItem;
    };

    showTasks = () => {
        let current = this.tasks.head;
        while (current) {
            console.log(`
                Id: ${current.value.id} | 
                Description: ${current.value.description} | 
                Tag: ${current.value.tag} |
                Status: ${current.value.status}
            `);
            current = current.next;
        }
    };
}

const task1 = new Task(100, "Daily with the team", "meeting");
const task2 = new Task(104, "Implement some feature", "job");
const task3 = new Task(125, "Reeding a book", "study", TaskStatus.COMPLETED);
const task4 = new Task(142, "Review a documentation", "job");
const task5 = new Task(152, "Review a project", "meeting");
const task6 = new Task(163, "Deploy a project", "job");
const task7 = new Task(172, "Reeding article", "study");


const taskList = new TaskList();
taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3, 0);
taskList.addTask(task4, 10);
taskList.addTask(task4);
taskList.addTask(task5, 2);
taskList.addTask(task6);
taskList.addTask(task7);

// 1 - Get all tasks
// taskList.showTasks();

// 2 - Get tasks by tag
// console.log(taskList.getTasksByTag("job"));

// 3 - Get tasks by Id
// console.log(taskList.getTaskById(142));
// console.log(taskList.getTaskById(120));

// 4 - Remove tasks by Id
// let id = 163;
// console.log(`Remove task ${id}...`);
// taskList.removeTaskById(id);

// 5 - Marcar uma tarefa como concluída por id
// let id = 100;
// console.log(`Set task ${id} to completed...`);
// taskList.setTaskToCompleted(id);

// id = 152;
// console.log(`Set task ${id} to completed...`);
// taskList.setTaskToCompleted(id);

// id = 1;
// console.log(`Set task ${id} to completed...`);
// taskList.setTaskToCompleted(id);

// 6 - Atualizar descrição e tag de uma task
// let itemTask;
// itemTask = taskList.setTaskDescriptionById(172, "Reading working article");
// itemTask = taskList.setTaskTagById(172, "job");
// console.log(itemTask);









