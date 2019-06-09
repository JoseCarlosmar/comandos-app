const description = {
    demand: true,
    alias: 'd',
    desc: 'description todo'
}
const complete = {
    alias: 'c',
    default: true,
    desc: 'flag to complete or not'
}

const argv = require('yargs')
    .command('create', 'create todo', {
        description
    })
    .command('list', 'list todo')
    .command('update', 'update todo', {
        description,
        complete
    })
    .command('delete', 'delete todo', {
        description
    })
    .help()
    .argv

module.exports = {
    argv
}