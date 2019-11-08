import React, { Component } from "react";
import MainHeader from "../Main/MainHeader/MainHeader";
import "./MyMatchList.scss";
import UserHistory from "../../Components/UserHistory/UserHistory";
import mmlMock from "./MyMatchListMock";

export class MyMatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mmldata: mmlMock
    };
  }
  goToMain = () => {
    this.props.history.push("/StaticsTiers/Tiers");
  };
  reLoad = () => {
    window.location.reload();
  };

  render() {
    console.log(this.state.mmldata[0].game);
    return (
      <div className="mml-page">
        <MainHeader />
        <div className="mml-view-page">
          <div className="mml-header">
            <div className="mml-user-info">
              {/* <div className="mml-rank-tag-container">
                <div className="mml-rank-tag">S5 Silver</div>
                <div className="mml-rank-tag">S6 Bronze</div>
                <div className="mml-rank-tag">S7 Bronze</div>
                <div className="mml-rank-tag">S8 Silver</div>
              </div> */}
              <div className="mml-user-container">
                <div className="mml-user-image"></div>
                <div className="mml-user-box">
                  <div className="mml-user-name">
                    {this.state.mmldata[0].game[0].user[0].user_name}
                  </div>
                  <div className="mml-user-rank">
                    {this.state.mmldata[0].tier}
                  </div>
                  <div className="mml-user-button">
                    <button
                      onClick={this.reLoad}
                      className="mml-user-rank-refresh"
                    >
                      전적갱신
                    </button>
                    <button
                      onClick={this.goToMain.bind(this)}
                      className="mml-user-rank-graph"
                    >
                      전체티어통계
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <UserHistory /> */}
          {this.state.mmldata[0].game.map((el, idx) => {
            console.log(el);
            return <UserHistory info={el} index={idx} />;
          })}
        </div>
      </div>
    );
  }
}

export default MyMatchList;
