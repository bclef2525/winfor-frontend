import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainHeader.scss";
import LoginBox from "./LoginBox/LoginBox";
import LogoutBox from "./LogoutBox/LogoutBox";

class MainHeader extends Component {
  render() {
    // const loginBox = this.state.loginBoxMode ? <LoginBox /> : <LogoutBox />;

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
              챔피언
              <div className="under-line" />
            </Link>
            <Link className="main-nav-comunity">
              커뮤니티
              <div className="under-line" />
            </Link>
          </div>
          <div className="main-nav-login-box">
            {localStorage.getItem("winfor-token") ? (
              <LogoutBox name={this.props.name} profile={this.props.profile} />
            ) : (
              <LoginBox />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
