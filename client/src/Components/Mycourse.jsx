import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [fetchedData, setFetchedData] = useState([]);

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
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {fetchedData.map((course) => (
          <li key={course._id}>
            <strong>Title:</strong> {course.title} | <strong>Instructor:</strong> {course.instructor} | <strong>Duration:</strong> {course.duration}
          </li>
         
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
