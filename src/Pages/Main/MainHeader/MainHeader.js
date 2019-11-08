import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainHeader.scss";
import LoginBox from "./LoginBox/LoginBox";
import LogoutBox from "./LogoutBox/LogoutBox";

class MainHeader extends Component {
  constructor() {
    super();
    this.state = {
      searchBoxMode: "",
      searchBoxClass: "search-box",
      searchBoxValue: "",
      summonerList: [],
      filteredName: [],
      finalList: [],
      userName: "",
      profile: ""
    };
  }
  handleUrl = imgUrl => {
    let a;
    let b;
    let result;
    for (let i = 0; i < imgUrl.length; i++) {
      if (imgUrl[i] === " ") {
        a = imgUrl.slice(0, i);
        b = imgUrl.slice(i + 1);
        result = a + "%20" + b;
      }
    }
    if (result === undefined) {
      return imgUrl;
    } else {
      return result;
    }
  };
  componentDidMount() {
    if (localStorage.getItem("winfor-token")) {
      fetch("http://10.58.0.33:8000/main/checklogin", {
        method: "get",
        headers: {
          Authorization: localStorage.getItem("winfor-token")
        }
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.setState({
            userName: res.SUMMONER_NAME,
            profile: this.handleUrl(res.SUMMONER_PROFILE)
          });
        });
    }
  }
  render() {
    // const loginBox = this.state.loginBoxMode ? <LoginBox /> : <LogoutBox />;

    return (
      <div className="main-header">
        <div className="main-nav">
          <div className="main-nav-left">
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
              <Link to={"/"} className="main-nav-comunity">
                커뮤니티
                <div className="under-line" />
              </Link>
            </div>
          </div>
          <div className="main-nav-login-box">
            {localStorage.getItem("winfor-token") ? (
              <LogoutBox name={this.state.name} profile={this.state.profile} />
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
