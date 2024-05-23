import React, { useState } from "react";
import "../../styles/Login.css";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../authentication/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      toast.success("Logged In", {
        position: "top-center",
      });
      window.location.href = "/home";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  const handleReset = ()=>{
    window.location.href = "/reset";
  }

  return (
    <>
      <div className="login">
        <div className="header" style={{ backgroundColor: "#fff" }}>
          <div className="logo">
            <Link to="/" className="link-logo" style={{ color: "#333" }}>
              TASK TRACKER
            </Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="account acc-login">
            <div className="form-box login">
              <div className="signin">
                <h2>Sign in</h2>
                <p>Email</p>
                <input
                  type="text"
                  name="email"
                  id="email_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <p className="forgotpass" onClick={handleReset}>
                  <span>Forgot password?</span>
                </p>
                <button className="button-primary" type="submit">
                  Continue
                </button>
                <p className="terms">
                  By continuing, you agree to{" "}
                  <Link to="/">
                    <span>Task Tracker</span>
                  </Link>
                  <span> Conditions of Use</span> and{" "}
                  <span>Privacy Notice</span>.
                </p>
              </div>
            </div>
            <div className="newcustomer">New to this?</div>
            <Link to="/register">
              <div className="form-box2">Create your new account</div>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;