// navbar.jsx
// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AppNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           TechLearn Hub!
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/course">
//               Courses
//             </Nav.Link>
//             {/* <Nav.Link as={Link} to="/add">
//               Add Courses
//             </Nav.Link> */}
//             <Nav.Link as={Link} to="/about">
//               About
//             </Nav.Link>
//             <Nav.Link as={Link} to="/login">
//               Login
//             </Nav.Link>
//             <Nav.Link as={Link} to="/signup">
//               Sign Up
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// const AppNavbar = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           TechLearn Hub!
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto"> {/* Adjusted class to mr-auto for left-side links */}
//             <Nav.Link as={Link} to="/">
//               Home
//             </Nav.Link>
//             <Nav.Link as={Link} to="/course">
//               Courses
//             </Nav.Link>
//             {/* <Nav.Link as={Link} to="/add">
//               Add Courses
//             </Nav.Link> */}
//             <Nav.Link as={Link} to="/about">
//               About
//             </Nav.Link>
//           </Nav>
//           <Nav className="ml-auto"> {/* Add ml-auto class here for right-side links */}
//             <Nav.Link as={Link} to="/login">
//               Login
//             </Nav.Link>
//             <Nav.Link as={Link} to="/signup">
//               Sign Up
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// // };

// navbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("MERN STACK");
    setLoggedIn(!!token);
  }, []);

  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TechLearn Hub!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/course">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {loggedIn ? (
              <>
                {/* <Nav.Link as={Link} to="/add">
                  Add Courses
                </Nav.Link> */}
                <Button variant="danger" onClick={() => setLoggedIn(false)}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
