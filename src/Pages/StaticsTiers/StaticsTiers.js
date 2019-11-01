import React, { Component } from "react";
import StaticsNav from "../../Components/StaticsTab/StaticsNav/";
import "./StaticsTiers.scss";

export default class StaticsTiers extends Component {
  render() {
    return (
      <>
        {/* nav */}
        <StaticsNav />
        <div className="statics-tiers-background">
          <div className="statics-tiers-body">
            <div className="statics-tiers-desc-text">
              티어별 통계를 볼 수 있습니다.
            </div>
            <div className="statics-tiers-content">
              표 타이틀
              {/*티어별 통계 컴포넌트*/}
            </div>
          </div>
        </div>
      </>
    );
  }
}
