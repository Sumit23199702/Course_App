import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = () => {
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

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     //   const token = localStorage.getItem("MERN STACK"); // Replace with your actual token key

  //     //   if (!token) {
  //     //     // Handle case when the user is not authenticated
  //     //     toast.error("Unauthorized: Please log in");
  //     //     return;
  //     //   }
  //     let response = await axios.post(
  //       "https://nodewebapp-4b8u.onrender.com/create",
  //       courseData
  //       // {
  //       //   headers: {
  //       //     Authorization: `Bearer ${token}`,
  //       //   },
  //       // }
  //     );
  //     // Handle success, maybe redirect the user or show a success message
  //     toast.success(response.data.msg);
  //   } catch (error) {
  //     //   if (error.response && error.response.status === 401) {
  //     //     toast.error("Unauthorized: Please log in");
  //     //     // Redirect to login page or handle the unauthorized state
  //     //     // history.push("/login");
  //     //     return;
  //     //   }
  //     // toast.error("An unexpected error occurred");
  //     toast.error(error.response.data.msg);
  //     console.error("Error:", error);
  //   }
  // };
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let response = await axios.post(
  //       "https://nodewebapp-4b8u.onrender.com/create",
  //       courseData
  //     );
  //     // Handle success, maybe redirect the user or show a success message
  //     toast.success(response.data.msg);
  //   } catch (error) {
  //     toast.error(error.response?.data.msg || "An unexpected error occurred");
  //     console.error("Error:", error);
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("MERN STACK"); // Replace with your actual token key
      if (!token) {
        toast.error("Unauthorized: Please log in");
        return;
      }
  
      let response = await axios.post(
        "https://nodewebapp-4b8u.onrender.com/create",
        courseData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      toast.success(response.data.msg);
      console.log(response);
      window.location.href = "/course";

    } catch (error) {
      toast.error(error.response?.data.msg || "An unexpected error occurred");
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

export default Add;
