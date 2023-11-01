const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/studentController");

router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent)

module.exports = router;
