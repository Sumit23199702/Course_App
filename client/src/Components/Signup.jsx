import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterPage = () => {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://nodewebapp-4b8u.onrender.com/register", {
        Name,
        Gender,
        Email,
        Mobile,
        Password,
      });
      console.log(response);

      toast.success("Registered successfully!!");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        // If there is a response object and it has a data property with a msg property
        toast.error(`${error.response.data.msg}`);
      } else if (error.message) {
        // If there is an error message, use it
        toast.error(`${error.message}`);
      } else {
        // If all else fails, provide a generic error message
        toast.error("Registration failed. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="text-center">Register</h2>
      <Container
        className="d-flex border border-3 border-dark justify-content-center align-items-center mt-2"
        style={{ width: "300px", height: "515px" }}
      >
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as="select"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formMobile">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mobile number"
              value={Mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <div className="d-grid">
            <Button variant="primary" onClick={handleRegister}>
              Register
            </Button>
          </div>
          <div className="text-center mt-2">
            <p>
              Already have an account? <Link to="/login">Login here</Link>.
            </p>
          </div>
        </Form>

        <ToastContainer />
      </Container>
    </>
  );
};

export default RegisterPage;
