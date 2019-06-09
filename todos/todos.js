const fs = require('fs')

let todoList = []

const save = () => {
    let data = JSON.stringify(todoList)
    fs.writeFile('database/data.json', data, (err) => {
        if (err) { throw new Error('cannot save data', err) }
    })
}

const getData = () => {
    try {
        todoList = require('../database/data.json')
    } catch (error) {
        todoList = []
    }
}

const create = (description) => {
    getData()
    let todo = {
        description,
        complete: false
    }
    todoList.push(todo)
    save()
    return todo
}

const getList = () => {
    getData()
    return todoList
}

const update = (description, complete = true) => {
    getData()
    let index = todoList.findIndex(task => task.description === description)
    if (index >= 0) {
        todoList[index].complete = complete
        save()
        return true
    } else {
        return false
    }
}

const deleteTodo = (description) => {
    getData()
    let newList = todoList.filter(task => task.description !== description)
    if (newList.length === todoList.length) {
        return false
    } else {
        todoList = newList
        save()
        return true
    }
}

module.exports = {
    create,
    getList,
    update,
    deleteTodo
}