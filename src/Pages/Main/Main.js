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
          <div>About</div> <div>WINFOR.GG</div> <div>로고</div>{" "}
          <div>히스토리</div> <div>개인정보처리방침</div> <div>도움말</div>{" "}
          <div>제휴</div>
          <div>문의/피드백</div>
          <div>팀원</div> <div>인호 | 태순 | 경연 | 성욱 | 세환</div>
        </footer>
      </div>
    );
  }
}
