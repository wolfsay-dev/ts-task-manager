import type { Task } from './types.ts';


const task1:Task = {
    id: 1,
    name: 'Task 1',
    active: true
}

const task2:Task = {
    id: 2,
    name: 'Task 2',
    active: false
}

const task3:Task = {
    id: 3,
    name: 'Task 3',
    active: true
}

const task4:Task = {
    id: 4,
    name: 'Task 4',
    active: false
}

const tasks = [task1, task2, task3]


function displayTasks() {
    tasks.forEach(task => {
        console.log(`Tâche d'id ${task.id}, de nom ${task.name} est ${ task.active? 'active' : 'non active' }`);
        
    })
}

function addTask(newTask:Task) {
    console.log('Push en cours de ', newTask.name);
    tasks.push(newTask);
    console.log(`${newTask.name} pushed sucessfully`);
    
}
addTask(task4)
displayTasks()
