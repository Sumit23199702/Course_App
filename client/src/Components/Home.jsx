import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container mt-3">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1368145748/photo/man-hand-touching-virtual-screen-to-lms-learning-management-system-web-icon-for-lesson-and.jpg?s=1024x1024&w=is&k=20&c=so1lFLaEdNgxv61fyp1ZorTLze7NARY7m7PVSRBWn_A="
            alt="Course 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1393588473/photo/man-show-world-map-for-communicate-connection-metaverse-technology-worldwide-network-internet.jpg?s=1024x1024&w=is&k=20&c=SdcwU5B59GEsNK3EKmvy-3GEXtQGmd0cwl-ZUvyawng="
            alt="Course 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/id/1508317915/photo/business-people-hands-holding-touching-ai-icon-in-global-networks-with-ai-and-global.jpg?s=1024x1024&w=is&k=20&c=T-NiG7-ymlbLZkeamNWoonfyuXRhjMM8gKkGCdwB56k="
            alt="Course 3"
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="mt-5">Welcome to Our TechLearn Hub</h1>
      <p>Explore a world of knowledge with our courses!</p>
    </div>
  );
};

export default Home;
