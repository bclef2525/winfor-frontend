import React, { Component } from "react";
import "../Main/Main.scss";
import MainVideo from "../Main/main.mp4";
import MainHeader from "./MainHeader/MainHeader";
import "./AutoComplete/SummonersList";
import AutoComplete from "../Main/AutoComplete/AutoComplete";
import SummonersList from "./AutoComplete/SummonersList";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchBoxMode: "",
      searchBoxClass: "search-box",
      searchBoxValue: ""
    };
  }
  handleSearchBoxValue = e => {
    this.setState({
      searchBoxValue: e.target.value
    });
  };
  handleSearchBox = e => {
    if (this.state.searchBoxMode === true || this.state.searchBoxMode === "") {
      this.setState({
        searchBoxMode: false,
        searchBoxClass: "search-box-on"
      });
    } else {
      this.setState({
        searchBoxMode: true,
        searchBoxClass: "search-box-off",
        searchBoxValue: ""
      });
    }
  };

  render() {
    const { searchBoxClass, searchBoxValue } = this.state;
    const autoComplete = SummonersList.map((el, index) => (
      <AutoComplete
        id={index}
        name={el.name}
        level={el.level}
        lp={el.lp}
        image={el.image}
        nameValue={searchBoxValue}
      />
    ));

    return (
      <div className="main-page">
        <MainHeader />
        <div className="search-box-container">
          <input
            onChange={this.handleSearchBoxValue}
            className={searchBoxClass}
            type="text"
            placeholder="소환사 검색"
            vlaue={searchBoxValue}
          ></input>
          {autoComplete}
        </div>
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
