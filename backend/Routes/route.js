const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/studentController");
const {createCourse} = require("../Controllers/courseController")

router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent);

router.post("/create", createCourse);
// router.put("/updatecourse", updateCourse);
// router.delete("/deletecourse", deleteCourse);
// router.get("/getcourse", getCourse);

module.exports = router;
