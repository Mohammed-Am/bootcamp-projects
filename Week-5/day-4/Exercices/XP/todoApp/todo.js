// todo.js
export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskDescription) {
        this.tasks.push({
            id: this.tasks.length + 1,
            description: taskDescription,
            completed: false
        });
        return `Task "${taskDescription}" added successfully.`;
    }

    markTaskComplete(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = true;
            return `Task ${taskId} marked as complete.`;
        }
        return `Task ${taskId} not found.`;
    }

    listTasks() {
        console.log('\nTodo List:');
        this.tasks.forEach(task => {
            const status = task.completed ? '[x]' : '[ ]';
            console.log(`${status} ${task.id}. ${task.description}`);
        });
        return this.tasks;
    }
}