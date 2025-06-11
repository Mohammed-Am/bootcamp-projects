import { TodoList } from './todo.js';

const myTodoList = new TodoList();

console.log(myTodoList.addTask('Buy groceries'));
console.log(myTodoList.addTask('Do laundry'));
console.log(myTodoList.addTask('Call mom'));

console.log(myTodoList.markTaskComplete(1));
console.log(myTodoList.markTaskComplete(3));

myTodoList.listTasks();