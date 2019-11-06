import React, { Component } from "react";
import "../Main/Main.scss";
import MainVideo from "../Main/main.mp4";
import MainHeader from "./MainHeader/MainHeader";
import "../../Components/AutoComplete/SummonersList";
import AutoComplete from "../../Components/AutoComplete/AutoComplete";
import SummonersList from "../../Components/AutoComplete/SummonersList";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchBoxMode: "",
      searchBoxClass: "search-box",
      searchBoxValue: "",
      summonerList: SummonersList,
      filteredName: [],
      finalList: [],
      userName: "",
      profile: ""
    };
  }

  // handleList = () => {
  //   this.sortNameArrFunc(this.handleName());
  //   let list = [];
  //   this.state.summonerList.forEach(el => {
  //     if (this.state.filteredName.includes(el.name)) {
  //       list.push(el);
  //     }
  //   });
  //   console.log("list: ", list);
  //   this.setState({ finalList: list });
  // };

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
    return result;
  };
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
  // sortNameArrFunc = name => {
  //   let sortNameArr = [];
  //   console.log("this.state.searchBoxValue", this.state.searchBoxValue);
  //   name.forEach(el => {
  //     if (el.startsWith(this.state.searchBoxValue)) {
  //       sortNameArr.push(el);
  //     }
  //   });
  //   console.log("sort : ", sortNameArr);
  //   this.setState({ filteredName: sortNameArr });
  // };
  // handleName = () => {
  //   let nameArr = [];
  //   this.state.summonerList.forEach(el => {
  //     nameArr.push(el.name);
  //   });
  //   console.log(nameArr);
  //   return nameArr;
  // };
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
          console.log(res);

          this.setState({
            userName: res.SUMMONER_NAME,
            profile: this.handleUrl(res.SUMMONER_PROFILE)
          });
          console.log(this.state);
        });
    }
  }
  render() {
    const {
      searchBoxClass,
      searchBoxValue,
      summonerList,
      profile,
      userName
    } = this.state;

    console.log("필터: ", this.state.filteredName);
    console.log(this.state.finalList);

    const autoComplete = searchBoxValue
      ? summonerList
          .filter(el => el.name.startsWith(searchBoxValue))
          .map((el, index) => (
            <AutoComplete
              id={index}
              name={el.name}
              level={el.level}
              lp={el.lp}
              image={el.image}
              nameValue={searchBoxValue}
            />
          ))
      : null;
    //콜백을 통과한 것만 먑으로 돌린다.
    //true면 랜더링 false면 null
    return (
      <div className="main-page">
        <div className="click-me">
          Clcik to Search
          <div className="click-me-image"></div>
        </div>
        <MainHeader name={userName} profile={profile} />
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
