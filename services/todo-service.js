'use strict';
const db = require("../database/models")

class ToDoService {

    addToDo(todo) {
        const todoObj = db.ToDo.findOrCreate({
            where: { title: todo.title },
            defaults: {
                id: todo.id,
                category: todo.category
            }
        })
        return todoObj;
    }

    getToDo(title) {
        try {
            const todo = db.ToDo.findOne({ where: { title: title } })
            return todo
        } catch (error) {
            return error.message
        }
    }

    allToDo() {
        try {
            const todo = db.ToDo.findAll()
            return todo
        } catch (error) {
            return error.message
        }
    }

    updateToDo(todo) {
        try {
            const todo = db.ToDo.update(
                { title: todo.title, status: todo.status },
                { where: { id: todo.id } })
            return todo
        } catch (error) {
            return error.message
        }
    }

    removeToDo(title) {
        try {
            const todo = db.ToDo.destroy({ where: { title: title } })
            return todo
        } catch (error) {
            return error.message
        }
    }

}

module.exports = new ToDoService();