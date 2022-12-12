import axios from "axios";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  async function getMe() {
    const response = await axios.get("http://localhost:8080/users/getMe", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    setUserData(response.data);
  }
  useEffect(() => {
    getMe();
  }, []);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!accessToken ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              <>
                <Navbar.Brand as={Link} to="/">
                  Hello {userData.firstName + " " + userData.lastName}
                </Navbar.Brand>

                <Nav.Link as={Link} to="/">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/categories">
                  Categories
                </Nav.Link>
                <Nav.Link as={Link} to="/addresses">
                  Addresses
                </Nav.Link>
                <Nav.Item>
                  <button
                    className="btn btn-secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem("accessToken");
                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
