import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="main-logo">Winfor.GG</div>
        <div className="main-nav">
          <div className="main-nav-tab">
            <Link to={"/"} className="main-nav-home">
              홈
            </Link>
            <Link to={"/Statics"} className="main-nav-static">
              통계
            </Link>
            <Link className="main-nav-rank">랭킹</Link>
            <Link className="main-nav-comunity">커뮤니티</Link>
          </div>
          <div className="main-nav-login-box">
            <Link to={"/login"} className="login-box-login">
              로그인
            </Link>
            <Link to={"/signup"} className="login-box-signup">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
