import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

export const Navigation = () => (
  <div>
    <Navbar bg="success" expand="lg" className="mb-4">
      <Navbar.Brand>Make Your Own Meal</Navbar.Brand>
      <Nav className="ml-auto">
        <NavLink className="text-light  mr-5" to="/">
          Home
        </NavLink>

        <NavLink className="text-light  mr-5" to="/cart">
          Cart
        </NavLink>
      </Nav>
    </Navbar>
  </div>
);
