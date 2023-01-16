'use strict';

const toDoService = require('../services/todo-service');

class ToDoController {

    async addToDo(req, res) {
        const todo = req.body
        try {
            const todo = await toDoService.addToDo(todo)
            return res.status(200).send(todo)
        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: error.message
            })
        }
    }

    async getToDo(req, res) {
        try {
            const result = await toDoService.getToDo(req.body.title);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    async allToDo(res) {
        try {
            const result = await toDoService.allToDo();
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    async updateToDo(req, res) {
        const todo = req.body
        try {
            const result = await toDoService.updateToDo(todo);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

    async removeToDo(req, res) {
        try {
            const result = await toDoService.removeToDo(req.body.title);
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }

}

module.exports = new ToDoController();;