import { TaskStatus } from "./task.js";
import LinkedList from "./linked-list.js";

export default class TaskList {
  constructor() {
    this.tasks = new LinkedList();
  }

  getTasks = () => {
    return this.tasks.toArray();
  };

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
      console.error(
        `The position ${index} is invalid. The task was not deleted.`
      );
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

  setTaskDataById = (id, task) => {
    const taskItem = this.getTaskById(id);
    if (taskItem) {
      taskItem.setDescription(task.description);
      taskItem.setStatus(task.status);
      taskItem.setTag(task.tag);
    }
    return taskItem;
  };
}
