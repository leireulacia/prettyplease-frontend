import React, { useState } from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useAuth } from "./Firebase/AuthContext";

import { HashRouter as Router } from "react-router-dom";
<<<<<<< HEAD
=======
import { useHistory } from "react-router-dom";
>>>>>>> 105931fdbd89f9941ba37520b4964e8ff51ab6f3

function PPNavbar() {
  const { currentUser, userType, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/");
    } catch {
      setError("Failed to logout");
    }
  }
  return (
    <Router>
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Navbar.Brand className="logo" href="/prettyplease-frontend">
          <h1>
            Pretty{" "}
            <span className="icon" role="img" aria-label="Please">
              🙏
            </span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="/prettyplease-frontend/#/campaigns">Campaigns</Nav.Link>
           
            {userType === "sponsor" && currentUser ? (
              <Nav.Link href="/ForSponsors">Sponsor Page</Nav.Link>
            ) : (
              <Nav.Link href="/ForCharities">Charity Page</Nav.Link>
            )}
          </Nav>

          {!currentUser ? (
            <Nav>
              <Nav.Link href="/prettyplease-frontend/#/Login">Login</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                href={
                  userType === "sponsor"
                    ? "/prettyplease-frontend/#/SponsorProfilePage"
                    : "/prettyplease-frontend/#/CharityProfilePage"
                }
              >
                <svg
                  width="1em"
                  height="40px"
                  viewBox="0 0 16 16"
                  className="bi bi-person-circle"
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path
                    fillRule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>
                Profile
              </Nav.Link>
              <Button variant="link" onClick={handleLogout}>
                Log Out
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
}

export default PPNavbar;
