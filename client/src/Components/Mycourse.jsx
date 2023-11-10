import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const Mycourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    price: "",
  });

  const changeHandler = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:5000/create",
        courseData
      );
      // Handle success, maybe redirect the user or show a success message
      toast.success(response.data.msg);
    } catch (error) {
      // toast.error("An unexpected error occurred");
      toast.error(error.response.data.msg);
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-fluid ms-3 mt-3 mb-2">
      <div className="row">
        <div className="col-md-6 border border-5">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label mt-3">Title:</label>
              <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={changeHandler}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description:</label>
              <textarea
                name="description"
                value={courseData.description}
                onChange={changeHandler}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Instructor:</label>
              <input
                type="text"
                name="instructor"
                value={courseData.instructor}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Duration:</label>
              <input
                type="text"
                name="duration"
                value={courseData.duration}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price:</label>
              <input
                type="text"
                name="price"
                value={courseData.price}
                onChange={changeHandler}
                className="form-control"
              />
            </div>
            <div className="d-grid mb-2">
              <button type="submit" className="btn btn-outline-success">
                Create Course
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Mycourse;