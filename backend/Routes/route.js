const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/studentController");
const {createCourse, updateCourse, getCourse,deleteCourse} = require('../Controllers/courseController')

router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent)

router.post("/course", createCourse);
router.put("/updatecourse", updateCourse);
router.delete('/deletecourse', deleteCourse);
router.get('/getcourse', getCourse);


module.exports = router;
