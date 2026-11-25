interface Task {
    id: number;
    name: string;
    completed: boolean;
}

const task1: Task = {
    id: 1,
    name: "Complete TypeScript project",
    completed: false,
};


const task2: Task = {
    id: 2,
    name: "Learn about TypeScript interfaces",
    completed: true,
};

const tasks: Task[] = [task1, task2];

function displayTasks() {
    tasks.forEach((task) => {
        console.log(`The task "${task.name}" is ${task.completed ? "completed" : "not completed"}.`);
    })
}

displayTasks();