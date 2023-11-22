const express = require("express")
const routes = express.Router()

const CourseController = require("./controllers/CourseController");

routes.get("/courses", CourseController.index)
routes.get('/courses/:id', CourseController.show);
routes.post("/courses", CourseController.store)
routes.put('/courses/:id', CourseController.update);
routes.delete('/courses/:id', CourseController.delete);

module.exports = routes