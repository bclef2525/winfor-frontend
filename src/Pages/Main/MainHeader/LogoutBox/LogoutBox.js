import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./LogoutBox.scss";

class LogoutBox extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleLogout = () => {
    localStorage.removeItem("winfor-token");
    window.location.reload();
  };
  render() {
    console.log(this.props.name);
    return (
      <div className="logout-container">
        <div
          className="user-profile"
          onClick={() => {
            this.props.history.push("/MyMatchList");
          }}
          style={{ backgroundImage: `url(${this.props.profile})` }}
        ></div>
        <div className="wellcome-msg">{this.props.name}님 환영합니다!</div>
        <button onClick={this.handleLogout} className="login-box-logout">
          로그아웃
        </button>
      </div>
    );
  }
}

export default withRouter(LogoutBox);
