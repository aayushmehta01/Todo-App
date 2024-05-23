import React, { useState } from "react";
import "../../styles/Login.css";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../authentication/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
        });
      }
      console.log("User registered successfully");
      toast.success("User registered successfully", {
        position: "top-center",
      });
      window.location.href = "./home";
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="register">
        <div className="header" style={{ backgroundColor: "#fff" }}>
          <div className="logo">
            <Link to="/" className="link-logo" style={{ color: "#333" }}>
              TASK TRACKER
            </Link>
          </div>
        </div>
        <form onSubmit={handleRegister}>
          <div className="account acc-register">
            <div className="form-box register">
              <div className="signin">
                <h2>Create Account</h2>
                <p>Your Name</p>
                <input
                  type="text"
                  name="text"
                  id="name"
                  placeholder="First and Last name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <p className="register-verification">
                  To verify your number, we will send you a text message with a
                  temporary code. Message and data rates may apply.
                </p>
                <button type="submit" className="button-primary">
                  Create Account
                </button>
                <p className="terms">
                  Already have an account?{" "}
                  <Link to="/login" className="psign">
                    Sign in.
                  </Link>
                </p>
                <p className="terms">
                  By creating an account or logging in, you agree to{" "}
                  <Link to="/">
                    <span>Task Tracker</span>
                  </Link>
                  <span> Conditions of Use</span> and{" "}
                  <span>Privacy Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
