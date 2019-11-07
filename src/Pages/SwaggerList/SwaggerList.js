import React, { Component } from "react";
import MainHeader from "../Main/MainHeader/MainHeader";
import "./SwaggerList.scss";
import swMock from "./SwaggerListMock";
import { SwHistory } from "../../Components/SwHistory/SwHistory";

export class SwaggerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swdata: swMock
    };
  }
  render() {
    return (
      <div className="sw-page">
        <MainHeader />
        <div className="sw-header1">
          <div className="sw-header1-content">내게임 자랑하기</div>
        </div>
        <div className="sw-view-page">
          <div className="sw-header"></div>
          <div className="sw-feeds">
            {this.state.swdata[0].game.map((el, idx) => {
              console.log(el);
              return <SwHistory info={el} index={idx} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SwaggerList;
