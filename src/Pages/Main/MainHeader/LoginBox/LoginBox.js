import React, { Component } from "react";
import { Link } from "react-router-dom";
export class LoginBox extends Component {
  render() {
    return (
      <>
        <Link to={"/signup"} className="login-box-signup">
          회원가입
          <div className="under-line" />
        </Link>
        <Link to={"/login"} className="login-box-login">
          로그인
        </Link>
      </>
    );
  }
}

export default LoginBox;
