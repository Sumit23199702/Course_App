import React, { useState, useEffect } from "react";
import axios from "axios";
import './Mycourse.css';

const FetchData = () => {
  const [fetchedData, setFetchedData] = useState({ data: [] });

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


  return (
    <div className="fetch-data-container">
    <h2 className="fetch-data-header">Discover Courses</h2>
    <div className="fetch-data-cards">
      {fetchedData.data.map((course) => (
        <div key={course._id} className="course-card">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrm6nlnwicqXgVjGyK4zM0n0ng3tsM47AefA&usqp=CAU' alt={course.title} className="course-image" />
          <div className="card-content">
            <h3 className="course-title">{course.title}</h3>
            <p className="course-instructor">
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p className="course-duration">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="course-duration">
              <strong>Price:</strong> {course.price}
            </p>

            
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FetchData;
