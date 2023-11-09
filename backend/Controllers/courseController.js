const CourseModel = require("../Models/courseModel");
const Validation = require("./validator");

// *************** Create Course API ***************
const createCourse = async function (req, res) {
  try {
    let course = req.body;
    if (!Validation.isValidBody(course)) {
      return res.status(404).send({ status: false, msg: "No Data Provided" });
    }
    let { name, description, duration, instructor, price } = course;

    // Name Validation
    if (!Validation.isValid(name)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter The Name of Course" });
    }

    // Description Validation
    if (!Validation.isValid(description)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Course Description" });
    }

    // Duration Validation
    if (!Validation.isValid(duration)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Course Duration" });
    }

    // Instructor Validation
    if (!Validation.isValid(instructor)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter The Name of Instructor" });
    }

    // Price Validation
    if (!Validation.isValid(price)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Enter Price of the Course" });
    }

    let duplicateCourse = await CourseModel.findOne({
      name,
      description,
      duration,
      instructor,
      price,
    });
    if (duplicateCourse) {
      return res
        .status(400)
        .send({ status: false, msg: "This Course Already Exists" });
    }

    let courseCreate = await CourseModel.create(course);
    return res.status(201).send({
      status: true,
      msg: "Course Created Successfully",
      data: courseCreate,
    });
  } catch (err) {
    return res
      .status(500)
      .send({ status: false, msg: "Internal Server Error" });
  }
};

// -------------------------------------------------------------------------------------

const updateCourse = async function (req, res) {
  try {
    let courseId = req.params.id; // Assuming you pass the course ID in the request parameters
    let updatedCourseData = req.body; // The updated course data

    // Assuming your courseModel has a method like findByIdAndUpdate to update the course
    let updatedCourse = await courseModel.findByIdAndUpdate(
      courseId,
      updatedCourseData,
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).send({ message: "Course not found" });
    }

    return res.send({ message: "Course updated successfully", updatedCourse });
  } catch (err) {
    console.log("server error", err);
    return res.status(500).send({ message: "Server error" });
  }
};
const deleteCourse = async function (req, res) {
  try {
    const courseId = req.params.id; // Assuming the course ID is passed in the URL

    // Use Mongoose to find and remove the course with the given ID.
    const deletedCourse = await courseModel.findByIdAndRemove(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res
      .status(200)
      .json({ message: "Course deleted successfully", data: deletedCourse });
  } catch (err) {
    console.error("Server error", err);
    return res.status(500).json({ message: "Server error" });
  }
};

const getCourse = async function (req, res) {
  try {
    const courseId = req.params.id; // Assuming the course ID is passed in the URL

    // Use Mongoose to find the course with the given ID.
    const foundCourse = await courseModel.findById(courseId);

    if (!foundCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res
      .status(200)
      .json({ message: "Course retrieved successfully", data: foundCourse });
  } catch (err) {
    console.error("Server error", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createCourse, updateCourse, deleteCourse, getCourse };
// module.exports = {createCourse, updateCourse}
