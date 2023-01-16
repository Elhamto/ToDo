'use strict';

const routeAPIDefiner = [
    ["/todo", require("./todo")]
]

const route = function (app) {
    for (const route of routeAPIDefiner) {
        app.use(`/api${route[0]}`, route[1]);
    }
};


module.exports = route;