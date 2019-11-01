import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.scss";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      passwordValue: "",
      failedMode: false,
      denied: true
    };
  }

  submitLogin = e => {
    e.preventDefault();
    if (
      this.state.emailValue.length > 3 &&
      this.state.passwordValue.length > 3 &&
      this.state.emailValue !== this.state.passwordValue
    ) {
      this.setState({
        failedMode: true,

        denied: false
      });
    }
  };
  //   e.preventDefault();
  //   fetch("http://10.58.3.71:8000/account/login",{
  //     method:"post",
  //     body:JSON.stringify({
  //       email:this.state.emailValue,
  //       password:this.state.passwordValue
  //     })
  //   })
  //   .then(function(res){
  //     return res.json();
  //   })
  //   .then(res =>{
  //     if(res){
  //       localStorage.setItem("winfor-token",res.user_access_token);

  //     }
  //   })
  // }

  handleEmailValue = e => {
    this.setState({ emailValue: e.target.value }, () => {});
  };
  handlePasswordValue = e => {
    this.setState({ passwordValue: e.target.value }, () => {});
  };

  render() {
    const {
      emailValue,
      passwordValue,

      failedMode,
      denied
    } = this.state;
    function getLoginButtonClass() {
      if (emailValue.length > 3 && passwordValue.length > 3) {
        return "login-button-on";
      } else {
        return "login-button";
      }
    }
    function getPasswordLabelClass() {
      if (passwordValue === "") {
        return "login-password-label";
      }
      if (failedMode === true) {
        return "login-failed";
      }
      if (passwordValue === "") {
        return "login-password-label";
      } else if (passwordValue.length > 0) {
        return "login-password-label-trans";
      }
    }
    function getEmailLabelClass() {
      if (emailValue === "") {
        return "login-email-label";
      }
      if (failedMode === true) {
        return "login-failed";
      }

      if (emailValue === "") {
        return "login-email-label";
      } else if (emailValue.length > 0) {
        return "login-email-label-trans";
      }
    }

    function getDeniedClass() {
      if (emailValue === "" && passwordValue === "") {
        return "denied-off";
      }
      if (denied === true) {
        return "denied-off";
      } else if (denied === false) {
        return "denied-on";
      }
    }

    return (
      <div className="login-body">
        <div className="login-page">
          <div className="login-inner">
            <div className="login-logo">Winfor.GG</div>
            <div className="login-form-container">
              <form>
                <div className="login-title">Social Login</div>
                <button className="login-facebook"></button>
                <div className="login-or-container">
                  <div className="login-line"></div>
                  <div className="login-or">OR</div>
                  <div className="login-line"></div>
                </div>
                <div className="login-email-title">Email Login</div>
                <div className="login-email-container">
                  <input
                    onChange={this.handleEmailValue}
                    className="login-email-text"
                    type="text"
                    value={emailValue}
                  />
                  <label
                    for="login-email-text"
                    className={getEmailLabelClass()}
                  >
                    Email Address
                  </label>
                  <div className="login-password-container">
                    <input
                      onChange={this.handlePasswordValue}
                      className="login-password-text"
                      type="password"
                      value={passwordValue}
                    />
                    <label
                      for="login-password-text"
                      className={getPasswordLabelClass()}
                    >
                      Password
                    </label>
                  </div>
                  <div className={getDeniedClass()}>
                    Account ID and Password do not match. Please try again.
                  </div>
                  <div className="remember-forgot-container">
                    <div className="login-remember-container">
                      <span className="login-remember-checkbox-state">
                        <input
                          className="login-remember-checkbox"
                          type="checkbox"
                        />
                        Remember me
                      </span>
                    </div>
                    <a href="true" className="login-forgot-container">
                      Forgot Password?{" "}
                    </a>
                  </div>
                  <div>
                    <button
                      onClick={this.submitLogin}
                      className={getLoginButtonClass()}
                      type="submit"
                    >
                      LOGIN
                    </button>
                  </div>
                  <div className="login-signup-container">
                    <div className="login-signup-text">
                      Don’t have an account?
                    </div>
                    <Link to="/signup" href="true" className="login-sign-up">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
