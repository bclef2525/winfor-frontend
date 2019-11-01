import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./StaticsNav.scss";

function StaticsNav(props) {
  let activeTab = props.match.params.name.toLowerCase();
  return (
    <div className={`tab-container ${activeTab}-selected`}>
      <div className="statics-nav-body">
        <div className="statics-nav-champions-title nav-title">
          <Link
            className="statics-nav-champions-title-text"
            to="/Statics/Champions/Champions"
          >
            챔피언별 게임 통계
          </Link>
        </div>

        <div className="statics-nav-tiers-title nav-title">
          <Link
            className="statics-nav-tiers-title-text"
            to="/Statics/Tiers/Tiers"
          >
            티어별 게임 통계
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(StaticsNav);
