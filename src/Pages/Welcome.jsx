import { Link } from "react-router-dom";
import img from "../Images/OIP-removebg-preview__1_-removebg (1).png";
import { useState } from "react";
let Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome-container d-flex-col">
        <div className="d-flex-col">
          <img src={img} alt="" />
          <h1>Mayza</h1>
        </div>
        <hr
          style={{
            backgroundColor: "var(--Prcl)",
            width: "100%",
          }}
        />
        <p>The robote that You will never Bet</p>
        <Link to="/game" className="Link welcome-btn">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};
export default Welcome;
