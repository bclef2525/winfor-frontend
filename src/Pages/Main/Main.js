import React, { Component } from "react";
import "../Main/Main.scss";
import MainVideo from "../Main/main2.mov";
import MainHeader from "./MainHeader/MainHeader";
import "../../Components/AutoComplete/SummonersList";
import AutoComplete from "../../Components/AutoComplete/AutoComplete";

export default class Main extends Component {
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
    if (result === undefined) {
      return imgUrl;
    } else {
      return result;
    }
  };
  handleSearchBoxValue = e => {
    this.setState(
      {
        searchBoxValue: e.target.value
      },
      () => {
        if (this.state.searchBoxValue) {
          fetch(
            `http://10.58.0.33:8000/main/search?keyword=${this.state.searchBoxValue}`,
            {
              method: "get"
            }
          )
            .then(res => {
              return res.json();
            })
            .then(res => {
              this.setState({ summonerList: res.SEARCHED_SUMMONER });
            });
        } else {
          this.setState({
            summonerList: ""
          });
        }
      }
    );
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
        summonerList: "",
        searchBoxValue: ""
      });
    }
  };
  handleMatchList = id => {
    if (id) {
      this.props.history.push(`/MyMatchList/${id}`);
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

  render() {
    const {
      searchBoxClass,
      searchBoxValue,
      summonerList,
      profile,
      userName
    } = this.state;

    const autoComplete = this.state.summonerList
      ? this.state.summonerList.map(el => (
          <AutoComplete
            id={el.SUMMONER_PK}
            handleMatchList={this.handleMatchList}
            name={el.SUMMONER_NAME}
            image={this.handleUrl(el.SUMMONER_PROFILE)}
          />
        ))
      : null;
    // let autoComplete = "";
    // if (this.state.summonerList) {
    //   autoComplete = this.state.summonerList.map(el => (
    //     <AutoComplete
    //       name={el.SUMMONER_NAME}
    //       image={this.handleUrl(el.SUMMONER_PROFILE)}
    //     />
    //   ));
    // }

    // const autoComplete = searchBoxValue
    // ? summonerList
    //     .filter(el => el.name.startsWith(searchBoxValue))
    //     .map((el, index) => (
    //       <AutoComplete
    //         id={index}
    //         name={el.name}
    //         level={el.level}
    //         lp={el.lp}
    //         image={el.image}
    //         nameValue={searchBoxValue}
    //       />
    //     ))
    // : null;
    //콜백을 통과한 것만 먑으로 돌린다.
    //true면 랜더링 false면 null
    return (
      <div className="main-page">
        <div className="click-me">
          Click
          <div className="click-me-image"></div>
        </div>
        <MainHeader name={userName} profile={profile} />
        <div className="search-box-container">
          <input
            onChange={this.handleSearchBoxValue}
            className={searchBoxClass}
            type="text"
            placeholder="소환사 검색"
            value={searchBoxValue}
          />
          {this.state.summonerList && autoComplete}
        </div>
        <div className="main-img" onClick={this.handleSearchBox}>
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
