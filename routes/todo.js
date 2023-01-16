"use strict";
const express = require("express");
const router = express.Router();
const { todo } = require("../controllers");

router.route('/')
    .get(todo.getToDo)
    .post(todo.addToDo)
    .patch(todo.updateToDo)
    .delete(todo.removeToDo);

router.route('/list')
    .get(todo.allToDo);



module.exports = router;

