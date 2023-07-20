import axios from "axios";
import React, { useState } from "react";
import '../App.css';

export const Register = () => {
  const [firstName, setFirsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/register", {
        firstName,
        lastName,
        userName,
        email,
        password,
      });

      // Redirect to the login page
      window.location.href = "/login";

      console.log(res.data);
    } catch (error) {
      console.log(setErrorMessage("Registration failed"));
    }
  };

  return (
    <>
      <div className="registration">
        <h2>If you didn't register before please do it now</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <div>
            <label>First name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirsName(e.target.value)}
            />
          </div>

          <div>
            <label>Last name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label>Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};
