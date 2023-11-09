import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
      if (response.ok) {
        // Handle success, maybe redirect the user or show a success message
        toast.success(response.data.msg);
      } else {
        // Handle specific errors returned by the backend
        const errorData = await response.json();
        if (errorData && errorData.errors) {
          // Display each error message
          errorData.errors.forEach((error) => {
            toast.error(error.msg);
          });
        } else {
          // Fallback for general errors
          toast.error("Error creating course");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error("Error:", error);
      console.error('Error submitting course:', error);
    }
  };

  // Function to set the course form data for editing
  const editCourse = (course) => {
    setCourseForm(course);
    setIsEditing(true);
    setEditingCourseName(course.name);
  };

  // Function to handle course deletion
  const handleCourseDeletion = async (courseName) => {
    try {
      // Delete the course in the backend
      await fetch(`http://localhost:5000/deletecourse`, {
        method: 'DELETE',
      });

      // Refresh the course list
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={changeHandler}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={courseData.description}
          onChange={changeHandler}
        />

        <label>Instructor:</label>
        <input
          type="text"
          name="instructor"
          value={courseData.instructor}
          onChange={changeHandler}
        />

        <label>Duration:</label>
        <input
          type="text"
          name="duration"
          value={courseData.duration}
          onChange={changeHandler}
        />

        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={courseData.price}
          onChange={changeHandler}
        />
        <button type="submit">Create Course</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Mycourse;

// import React, { useState, useEffect } from 'react';
// import './Mycourse.css';

// const MyCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('rating'); // 'rating' or 'duration'

//   // State for managing course form
//   const [courseForm, setCourseForm] = useState({
//     name: '',
//     description: '',
//     duration: '',
//   });

//   // State for managing course editing
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingCourseName, setEditingCourseName] = useState('');

//   // Fetch courses from the backend when the component mounts
//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   // Function to fetch courses from the backend
//   const fetchCourses = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/getcourse'); // Replace with your backend API endpoint
//       if (response.ok) {
//         const data = await response.json();
//         setCourses(data);
//       }
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   // Function to submit a new course or update an existing course
//   const submitCourse = async () => {
//     try {
//       if (isEditing) {
//         // Update an existing course
//         await fetch(`http://localhost:5000/updatecourse`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(courseForm),
//         });
//       } else {
//         // Create a new course
//         await fetch('http://localhost:5000/course', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(courseForm),
//         });
//       }

//       // Clear the course form after submission
//       setCourseForm({
//         name: '',
//         description: '',
//         duration: '',
//       });

//       // Refresh the course list
//       fetchCourses();
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error submitting course:', error);
//     }
//   };

//   // Function to set the course form data for editing
//   const editCourse = (course) => {
//     setCourseForm(course);
//     setIsEditing(true);
//     setEditingCourseName(course.name);
//   };

//   // Function to handle course deletion
//   const handleCourseDeletion = async (courseName) => {
//     try {
//       // Delete the course in the backend
//       await fetch(`http://localhost:5000/deletecourse?name=${courseName}`, {
//         method: 'DELETE',
//       });

//       // Refresh the course list
//       fetchCourses();
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   return (
//     <div className="container my-courses-container">
//       <h2 className="text-center mt-4 mb-4">My Courses</h2>
//       <div className="search-and-sort">
//         <input
//           type="text"
//           placeholder="Search by course name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <select
//           value={sortBy}
//           onChange={(e) => setSortBy(e.target.value)}
//         >
//           <option value="rating">Sort by Rating</option>
//           <option value="duration">Sort by Duration</option>
//         </select>
//       </div>
//       <form className="course-form">
//         <input
//           type="text"
//           placeholder="Course Name"
//           value={courseForm.name}
//           onChange={(e) => setCourseForm({ ...courseForm, name: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Course Description"
//           value={courseForm.description}
//           onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Course Duration"
//           value={courseForm.duration}
//           onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
//         />
//         <button onClick={submitCourse}>
//           {isEditing ? 'Update Course' : 'Add Course'}
//         </button>
//       </form>
//       <ul className="list-unstyled">
//         {courses.map((course, index) => (
//           <li key={index} className="card mb-4">
//             <div className="card-body">
//               <h5 className="card-title">{course.name}</h5>
//               <h6 className="card-subtitle mb-2 text-muted">Duration: {course.duration}</h6>
//               <p className="card-text">{course.description}</p>
//               <button onClick={() => editCourse(course)}>Edit Course</button>
//               <button onClick={() => handleCourseDeletion(course.name)} className="delete-button">Delete Course</button>
//             </div>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default MyCourses;
