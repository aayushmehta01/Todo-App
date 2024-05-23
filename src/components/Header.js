import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import {auth} from "../authentication/firebase"

const Header = () => {

  async function handleLogout(){
    try{
      await auth.signOut();
      window.location.href = "./login";
      console.log("User logged out successfully");
    }catch(error){
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/" className="link-logo">
            TASK TRACKER
          </Link>
        </div>
        <button
          className="join"
          style={{
            fontSize: "20px",
            paddingRight: "15px",
            outline: "none",
            background: "none",
            color: "white",
            border: "none",
            fontFamily: '"Oswald", "sans-serif"',
            cursor: "pointer"
          }}
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Header;  