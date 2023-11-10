const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/studentController");
const {
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("../Controllers/courseController");
const { verifyToken } = require("../middleware/mid");

router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent);

router.post("/create", verifyToken, createCourse);
router.get("/fetchCourse", getCourse);
router.put("/update/:id", updateCourse);
router.delete("/delete/:id", deleteCourse);

module.exports = router;
