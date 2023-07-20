import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/login", {
        userName,
        password,
      });

      // Save the token to local storage or cookies
      const token = res.data.token;
      console.log(token);

      // Redirect to the home page or authenticated route
      window.location.href = "/";

      console.log(res.data);
    } catch (error) {
      console.log(setErrorMessage("Invalid username or password"));
    }
  };
  return (
    <>
      <div className="login-here">
        <h2>Login here</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-login">
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <div className="password-here">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
