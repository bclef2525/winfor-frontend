import React, { Component } from "react";

import "../Main/Main.scss";
import MainVideo from "../Main/main.mp4";
import MainHeader from "./MainHeader/MainHeader";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchBoxMode: "",
      searchBoxClass: "search-box"
    };
  }
  handleSearchBox = e => {
    if (this.state.searchBoxMode === true || this.state.searchBoxMode === "") {
      this.setState({
        searchBoxMode: false,
        searchBoxClass: "search-box-on"
      });
    } else {
      this.setState({
        searchBoxMode: true,
        searchBoxClass: "search-box-off"
      });
    }
  };
  render() {
    return (
      <div className="main-page">
        <MainHeader />
        <input
          className={this.state.searchBoxClass}
          type="text"
          placeholder="   소환사 검색"
        ></input>
        <div onClick={this.handleSearchBox} className="main-img">
          <video id="main-video" autoPlay muted loop>
            <source src={MainVideo} type="video/mp4" />
          </video>
        </div>
        <footer className="main-footer">
          About OP.GG 로고 히스토리 개인정보처리방침 도움말 제휴 문의/피드백
          채용 © 2012-2019 OP.GG. Data based on League of Legends Korea.
        </footer>
      </div>
    );
  }
}
