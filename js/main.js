import { Task, TaskStatus } from "./task.js";
import TaskList from './task-list.js';

/* funcao que interage com UI nao deve estar na classe de dominio */
const showTasks = (taskList) => {
  let current = taskList.tasks;
  if (current) {
    current.array.forEach((element) => {
      console.log(`
      Id: ${element.id} | 
      Description: ${element.description} | 
      Tag: ${element.tag} |
      Status: ${element.status}`);
    });
  }
};

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
showTasks(taskList);

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
