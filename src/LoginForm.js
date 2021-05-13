import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [signUpClass, setSignUpClass] = useState("sign-up-mode");

  const socialPlatforms = [
    "fa-facebook-f",
    "fa-twitter",
    "fa-google",
    "fa-linkedin",
  ];

  const usernameInput = (event) => {
    const userInput = event.target.value;
    if (userInput.includes("@")) {
      // add invalid class to this input
      // throw an error
    }
  };

  const signUpButtonClick = () => setSignUpClass("sign-up-mode");
  const signInClicked = () => setSignUpClass("");

  return (
    <div className={`container ${signUpClass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                onInput={usernameInput}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              {socialPlatforms.map((el) => (
                <a href="#" className="social-icon" key={el}>
                  <i className={`fab ${el}`}></i>
                </a>
              ))}
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              {socialPlatforms.map((el) => (
                <a href="#" className="social-icon" key={el}>
                  <i className={`fab ${el}`}></i>
                </a>
              ))}
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              onClick={signUpButtonClick}
              className="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src="log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={signInClicked}
            >
              Sign in
            </button>
          </div>
          <img src="register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
