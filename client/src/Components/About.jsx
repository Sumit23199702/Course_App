import React, { useState } from 'react';
import './About.css';
import pic from '../assets/img.jpg'

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      <div className="sidebar">
        <img src={pic} alt="TechLearn Hub Logo" className='img-fluid'/>
      </div>
      <br />
      <div className="content">
        <h2>About Us</h2>
        <p>
          Welcome to TechLearn Hub! We are dedicated to providing high-quality online courses to help you master a variety of programming languages and technologies. Whether you're a beginner looking to learn the basics or an experienced developer seeking to enhance your skills, we have something for everyone.
        </p>
        <p>
          Our mission is to empower learners by offering comprehensive, hands-on courses in programming and technology. We believe that education should be accessible to all, and our platform is designed to make learning fun and engaging.
        </p>
        {showMore && (
          <div className="additional-content">
            <p>
              Discover the power of Go, a statically-typed language known for its efficiency and performance. Our Go courses will take you through the fundamentals and guide you in building scalable applications.
            </p>
            <p>
              Unlock the world of web development with our comprehensive courses. From front-end technologies like HTML, CSS, and JavaScript to back-end frameworks like Node.js, we've got you covered.
            </p>
            <p>
              Dive into the exciting fields of data science and machine learning. Our courses will teach you how to analyze data, build predictive models, and extract valuable insights.
            </p>
            {/* Add more content here */}
            <p>
              Explore the realm of mobile app development with our courses on React Native, Flutter, and more. You'll learn how to create cross-platform mobile applications with ease.
            </p>
            <p>
              Delve into the world of cloud computing and infrastructure. Our courses will guide you through AWS, Azure, and Google Cloud, providing the skills to manage and deploy applications in the cloud.
            </p>
          </div>
        )}
        <button onClick={toggleShowMore} className="toggle-button">
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default About;