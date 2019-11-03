import React, { Component } from "react";
import StaticsNav from "../../Components/StaticsTab/StaticsNav/";
import MainHeader from "../Main/MainHeader";
import StaticsTiersLeftBottom from "../../Components/StaticsTab/StaticsTiersLeftBottom";
import "./StaticsTiers.scss";

export default class StaticsTiers extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <StaticsNav />
        <div className="statics-tiers-background">
          <div className="statics-tiers-body">
            <div className="statics-tiers-desc-text">
              티어별 통계를 볼 수 있습니다.
            </div>
            <div className="statics-tiers-content">
              <div className="statics-tiers-content-left">
                <div className="statics-tiers-content-left top">인호님차트</div>
                <div className="statics-tiers-content-left bottom">
                  <StaticsTiersLeftBottom />
                </div>
              </div>
              <div className="statics-tiers-content-right">세환님차트</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
