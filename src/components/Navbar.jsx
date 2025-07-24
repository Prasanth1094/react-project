import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> |<Link to="/about">About</Link> |
    <Link to="/articles">Articles</Link>
  </nav>
);

export default Navbar;
