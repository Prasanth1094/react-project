import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  if (typeof window !== "undefined") {
    // This will run on the client
    console.log("Client-side log: ",document);
  } else {
    console.log("Server-side render");
  }
  return (
    <div>
      <h1>Server side rendering</h1>
      <nav>
        <Link to="/">Home Page</Link> | <Link to="/about">About Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
