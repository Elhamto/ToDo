"use strict";
const express = require("express");
const router = express.Router();
const { todo } = require("../controllers");

router.route('/todo')
    .get(todo.getToDo)
    .post(todo.addToDo)


module.exports = router;

