const courseModel = require('../models/courseModel');

const createCourse = async function (req, res) {
    try {
        let course = req.body;
        let { name, description, duration } = course;

        let uniqueCode = await courseModel.findOne({name})
        if(uniqueCode) return res.send({message : "Coursecode already exists!!"})
        
        let courseCreate = await courseModel.create(course)
        return res.send({ message: courseCreate })
    }
    catch (err) {
        console.log("server error", err)
    }
}

const updateCourse = async function (req, res) {
    try {
        let courseId = req.params.id; // Assuming you pass the course ID in the request parameters
        let updatedCourseData = req.body; // The updated course data
        
        // Assuming your courseModel has a method like findByIdAndUpdate to update the course
        let updatedCourse = await courseModel.findByIdAndUpdate(courseId, updatedCourseData, { new: true });

        if (!updatedCourse) {
            return res.status(404).send({ message: "Course not found" });
        }

        return res.send({ message: "Course updated successfully", updatedCourse });
    } catch (err) {
        console.log("server error", err);
        return res.status(500).send({ message: "Server error" });
    }
}
const deleteCourse = async function (req, res) {
    try {
        const courseId = req.params.id; // Assuming the course ID is passed in the URL

        // Use Mongoose to find and remove the course with the given ID.
        const deletedCourse = await courseModel.findByIdAndRemove(courseId);

        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        return res.status(200).json({ message: "Course deleted successfully", data: deletedCourse });
    } catch (err) {
        console.error("Server error", err);
        return res.status(500).json({ message: "Server error" });
    }
}

const getCourse = async function (req, res) {
    try {
        const courseId = req.params.id; // Assuming the course ID is passed in the URL

        // Use Mongoose to find the course with the given ID.
        const foundCourse = await courseModel.findById(courseId);

        if (!foundCourse) {
            return res.status(404).json({ message: "Course not found" });
        }

        return res.status(200).json({ message: "Course retrieved successfully", data: foundCourse });
    } catch (err) {
        console.error("Server error", err);
        return res.status(500).json({ message: "Server error" });
    }
}

module.exports = { createCourse, updateCourse, deleteCourse, getCourse };
// module.exports = {createCourse, updateCourse}