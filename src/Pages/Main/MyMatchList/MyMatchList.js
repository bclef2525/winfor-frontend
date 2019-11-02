import React, { Component } from "react";
import MainHeader from "../MainHeader/MainHeader";
import "../MyMatchList/MyMatchList.scss";
export class MyMatchList extends Component {
  render() {
    return (
      <div className="mml-page">
        <MainHeader />
        <div className="mml-view-page">
          <div className="mml-header">
            <div className="mml-user-info">
              <div className="mml-rank-tag-container">
                <div className="mml-rank-tag">S5 Silver</div>
                <div className="mml-rank-tag">S6 Bronze</div>
                <div className="mml-rank-tag">S7 Bronze</div>
                <div className="mml-rank-tag">S8 Silver</div>
              </div>
              <div className="mml-user-container">
                <div className="mml-user-image"></div>
                <div className="mml-user-box">
                  <div className="mml-user-name">조인호</div>
                  <div className="mml-user-rank">
                    레더랭킹 1,247,872위 (상위 42%)
                  </div>
                  <div className="mml-user-button">
                    <div className="mml-user-rank-refresh">전적갱신</div>
                    <div className="mml-user-rank-graph">티어 그래프</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMatchList;
