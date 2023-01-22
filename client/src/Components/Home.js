import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homevid from "./The Forest  Cinematic Drone Footage.mp4";
const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <video src={homevid} autoPlay loop muted />
        <div className="content">
          <span className="test">
            <h1>Welcome</h1>
            <p>To Cacty plant</p>
            <p>Choose the right choice of plant with the best quality price</p>
          </span>
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="button-17" style={{ backgroundColor: "orange" }}>
              Login
            </button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/register">
            <button className="button-17" style={{ width: "200px" }}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
