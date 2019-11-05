import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainHeader.scss";

class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="main-nav">
          <Link to={"/"} className="main-logo">
            Winfor.GG
          </Link>
          <div className="main-nav-tab">
            <Link to={"/"} className="main-nav-home">
              홈<div className="under-line" />
            </Link>
            <Link
              to={"/StaticsChampions/Champions"}
              className="main-nav-static"
            >
              통계
              <div className="under-line" />
            </Link>
            <Link to={"/ChampionsList"} className="main-nav-rank">
              챔피언 추천
              <div className="under-line" />
            </Link>
            <Link className="main-nav-comunity">
              커뮤니티
              <div className="under-line" />
            </Link>
          </div>
          <div className="main-nav-login-box">
            <Link to={"/signup"} className="login-box-signup">
              회원가입
              <div className="under-line" />
            </Link>
            <Link to={"/login"} className="login-box-login">
              로그인
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
