import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div id="home">
      <h2 id="headline">Logistics Management</h2>
      <div id="home-buttons">
        {" "}
        <Link className="home-link" to="/signup">
          Sign up
        </Link>
        <Link className="home-link" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
}
