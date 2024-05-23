import React from "react";
import '../../styles/Landing.css'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
    <div className="whole">
    <div className="container">
        <div className="content">
            <p className="highlight-text">
                Plan, Prioritize, and Achieve!
            </p>
            <h1 className="main-title">
                Organize your work and life, finally.
            </h1>
            <div className="subtitle-container">
                <p className="subtitle">
                    Fast, flexible, Easy to use
                </p>
            </div>
            <p className="description">
            Become focused, organized, and calm with Task Tracker. The world’s #1 task manager and to-do list app.                
            </p>
            <div className="button-area">
            <Link to="/login"><button className="cta-button">Sign In</button></Link>
            <Link to="/register"><button className="cta-button cta-button-create">Sign Up</button></Link>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Landing;