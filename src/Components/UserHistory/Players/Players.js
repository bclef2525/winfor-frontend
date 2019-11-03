import React, { Component } from "react";
import "./Players.scss";
export class Players extends Component {
  render() {
    return (
      <>
        <div className="players-container">
          <div className="player-image"></div>
          <div className="player-name">조인호</div>
        </div>
      </>
    );
  }
}

export default Players;
