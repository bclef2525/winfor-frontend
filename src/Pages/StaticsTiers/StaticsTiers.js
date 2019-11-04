import React, { Component } from "react";
import StaticsNav from "../../Components/StaticsTab/StaticsNav/";
import MainHeader from "../Main/MainHeader";
import StaticsTiersRight from "../../Components/StaticsTab/StaticsTiersRight";
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
              표 타이틀
              <StaticsTiersRight />
            </div>
          </div>
        </div>
      </>
    );
  }
}
