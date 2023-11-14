import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [Email, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post("https://nodewebapp-4b8u.onrender.com/login", {
  //       Email,
  //       Password,
  //     });

  //     toast.success("Login successful!");
  //     console.log(response);
  //     window.location.href = "/add";
  //   } catch (error) {
  //     // if (Email === "yourEmail" && Password === "yourPassword") {
  //     //   toast.success("Login successful!");
  //     // toast.error("Invalid credentials. Please try again.");
  //     toast.error(error.response.data.msg);
  //     console.log(error);
  //   }
  // };
  const handleLogin = async () => {
    try {
      const response = await axios.post("https://nodewebapp-4b8u.onrender.com/login", {
        Email,
        Password,
      });

      const token = response.data.token; // Assuming your token key is named 'token'
      localStorage.setItem("MERN STACK", token);

      toast.success("Login successful!");
      console.log("Token:", token);
      window.location.href = "/add";

      // Redirect or perform additional actions after successful login
    } catch (error) {
      toast.error(error.response.data.msg);
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="text-center mt-3">Login</h2>
      <Container
        className="d-flex border border-3 border-dark justify-content-center align-items-center mt-4"
        style={{ width: "275px", height: "325px" }}
      >
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={(e) => setUsername(e.target.value)}
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
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </Form>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Login;
