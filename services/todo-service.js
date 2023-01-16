'use strict';
const db = require("../database/models")

class ToDoService {

    async addToDo(todo) {

        const todoObj = db.ToDo.findOrCreate({
            where: { title: todo.title },
            defaults: {
                id: todo.id,
                category: todo.category
            }
        })
        return todoObj;
    }

    async getToDo(title) {
        try {
            const todo = await db.ToDo.findOne({ where: { title: title } })
            return todo
        } catch (error) {
            return error.message
        }
    }

    async allToDo() {
        try {
            const todo = await db.ToDo.findAll()
            return todo
        } catch (error) {
            return error.message
        }
    }

}

module.exports = new ToDoService();