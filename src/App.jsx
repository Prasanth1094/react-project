import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";

function App({ articles }) {
  if (typeof window !== "undefined") {
    // This will run on the client
    console.log("Client-side log");
  } else {
    console.log("Server-side render");
  }
  return (
    <div>
      <h1>Server side rendering</h1>
      <nav>
        <Link to="/">Home Page</Link> | <Link to="/about">About Page</Link>|{" "}
        <Link to="/articles">Articles Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles articles={articles} />} />
      </Routes>
    </div>
  );
}

export default App;
