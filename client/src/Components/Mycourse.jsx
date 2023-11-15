import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Mycourse.css";

const FetchData = () => {
  const [fetchedData, setFetchedData] = useState({ data: [] });
  const [editCourse, setEditCourse] = useState(null);
  const [editedDuration, setEditedDuration] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedInstructor, setEditedInstructor] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nodewebapp-4b8u.onrender.com/getCourse"
        );
        setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (courseId) => {
    // Set the course to be edited
    const courseToEdit = fetchedData.data.find(
      (course) => course._id === courseId
    );
    setEditCourse(courseToEdit);
    setEditedDuration(courseToEdit.duration);
    setEditedDescription(courseToEdit.description);
    setEditedInstructor(courseToEdit.instructor);
    setEditedPrice(courseToEdit.price);
  };

  const handleUpdate = async () => {
    // Implement your update logic here
    try {
      const token = localStorage.getItem("MERN STACK");
      if (!token) {
        // Handle case when the user is not authenticated
        toast.error("Unauthorized: Please log in");
        return;
      }

      const response = await axios.put(
        `https://nodewebapp-4b8u.onrender.com/update/${editCourse._id}`,
        {
          duration: editedDuration,
          description: editedDescription,
          instructor: editedInstructor,
          price: editedPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.msg);
      // Reset the editCourse state and refresh the course list after update
      setEditCourse(null);
      // FetchData();
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error("Error updating course");
    }
  };

  const handleDelete = async (courseId) => {
    // Implement your delete logic here
    try {
      const token = localStorage.getItem("MERN STACK");
      if (!token) {
        // Handle case when the user is not authenticated
        toast.error("Unauthorized: Please log in");
        return;
      }

      const response = await axios.delete(
        `https://nodewebapp-4b8u.onrender.com/delete/${courseId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.msg);
      // Refresh the course list after deletion
      // FetchData();
    } catch (error) {
      console.error("Error deleting course:", error);
      toast.error("Error deleting course");
    }
  };

  const handleCancelEdit = () => {
    // Cancel the edit mode
    setEditCourse(null);
  };

  return (
    <div className="fetch-data-container">
      <h2 className="fetch-data-header">Discover Courses</h2>
      <div className="fetch-data-cards">
        {fetchedData.data.map((course) => (
          <div key={course._id} className="course-card">
            {editCourse && editCourse._id === course._id ? (
              <div>
                {/* Input fields for editing course details */}
                <div className="mb-3">
                  <label className="form-label">Duration:</label>
                  <input
                    type="text"
                    value={editedDuration}
                    onChange={(e) => setEditedDuration(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description:</label>
                  <textarea
                    value={editedDescription}
                    onChange={(e) => setEditedDescription(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Instructor:</label>
                  <input
                    type="text"
                    value={editedInstructor}
                    onChange={(e) => setEditedInstructor(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price:</label>
                  <input
                    type="text"
                    value={editedPrice}
                    onChange={(e) => setEditedPrice(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="action-buttons">
                  <button
                    className="btn btn-success"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm6nlnwicqXgVjGyK4zM0n0ng3tsM47AefA&usqp=CAU"
                  alt={course.title}
                  className="course-image"
                />
                <div className="card-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-instructor">
                    <strong>Instructor:</strong> {course.instructor}
                  </p>
                  <p className="course-instructor">
                    <strong>Description:</strong> {course.description}
                  </p>
                  <p className="course-duration">
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p className="course-duration">
                    <strong>Price:</strong> {course.price}
                  </p>
                  <div className="action-buttons">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(course._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(course._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default FetchData;
