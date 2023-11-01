import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterPage = () => {
  const [Name, setName] = useState("");
  const [Usn, setUsn] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("localhost:5000/register", {
        Name,
        Usn,
        Gender,
        Email,
        Mobile,
        Password,
      });
      console.log(response);

      // Assuming your backend returns a success message
      toast.success(response.data.message);
    } catch (error) {
      // Handle registration failure
      toast.error("Registration failed. Please try again.");
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

          <Form.Group controlId="formUsn">
            <Form.Label>USN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your USN"
              value={Usn}
              onChange={(e) => setUsn(e.target.value)}
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
        </Form>

        <ToastContainer />
      </Container>
    </>
  );
};

export default RegisterPage;
