import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.scss";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      passwordLabelMode: "off",
      emailLabelMode: "off",
      emailValue: "",
      passwordValue: "",
      buttonClass: "login-button",
      emailLabelClass: "login-email-label",
      passwordLabelClass: "login-password-label",
      denied: "denied-off"
    };
  }
  submitLogin = e => {
    e.preventDefault();
    if (this.state.emailValue !== this.state.passwordValue) {
      this.setState({
        emailLabelClass: "login-failed",
        passwordLabelClass: "login-failed",
        denied: "denied-on"
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
  handleLabel = e => {
    if (this.state.emailLabelMode === "on" && this.state.emailValue === "") {
      this.setState({
        emailLabelMode: "off",
        emailLabelClass: "login-email-label"
      });
    } else if (
      this.state.passwordLabelMode === "on" &&
      this.state.passwordValue === ""
    ) {
      this.setState({
        passwordLabelMode: "off",
        passwordLabelClass: "login-password-label"
      });
    }
  };

  handleEmailText = e => {
    if (this.state.emailLabelMode === "off") {
      this.setState({
        emailLabelMode: "on",
        emailLabelClass: "login-email-label-trans"
      });
    }
  };
  handlePassword = e => {
    if (this.state.passwordLabelMode === "off") {
      this.setState({
        passwordLabelMode: "on",
        passwordLabelClass: "login-password-label-trans"
      });
    }
  };
  handleEmailValue = e => {
    if (e.target.value.length === 0) {
      this.setState({ denied: "denied-off" });
    }
    if (e.target.value.length >= 0) {
      this.setState({
        emailLabelClass: "login-email-label-trans"
      });
    }
    this.setState({ emailValue: e.target.value }, () => {
      this.setState({
        buttonClass:
          this.state.emailValue.length > 3 &&
          this.state.passwordValue.length > 3
            ? "login-button-on"
            : "login-button"
      });
    });
  };
  handlePasswordValue = e => {
    if (e.target.value.length === 0) {
      this.setState({ denied: "denied-off" });
    }
    if (e.target.value.length >= 0) {
      this.setState({
        passwordLabelClass: "login-password-label-trans"
      });
    }
    this.setState({ passwordValue: e.target.value }, () => {
      this.setState({
        buttonClass:
          this.state.emailValue.length > 3 &&
          this.state.passwordValue.length > 3
            ? "login-button-on"
            : "login-button"
      });
    });
  };

  render() {
    return (
      <div onClick={this.handleLabel} className="login-body">
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
                    onClick={this.handleEmailText}
                    className="login-email-text"
                    type="text"
                    value={this.state.emailValue}
                  />
                  <label
                    for="login-email-text"
                    className={this.state.emailLabelClass}
                  >
                    Email Address
                  </label>
                  <div className="login-password-container">
                    <input
                      onChange={this.handlePasswordValue}
                      onClick={this.handlePassword}
                      className="login-password-text"
                      type="password"
                      value={this.state.passwordValue}
                    />
                    <label
                      for="login-password-text"
                      className={this.state.passwordLabelClass}
                    >
                      Password
                    </label>
                  </div>
                  <div className={this.state.denied}>
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
                      className={this.state.buttonClass}
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
