const argv = require('./config/yargs').argv
const todo = require('./todos/todos')
const colors = require('colors')

let command = argv._[0]

switch (command) {
    case 'create':
        let task = todo.create(argv.description)
        console.log(task);
        break;
    case 'list':
        let todoList = todo.getList()
        for (const todo of todoList) {
            console.log('============================'.green)
            console.log(todo.description)
            console.log(todo.complete)
            console.log('============================'.green)
        }
        break;
    case 'update':
        let updated = todo.update(argv.description, argv.complete)
        console.log(updated);
        break;
    case 'delete':
        let deleted = todo.deleteTodo(argv.description)
        console.log(deleted);
        break;
    default:
        console.log('Command unrecognized');
        break;


}