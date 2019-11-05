import React from "react";
import { Link, withRouter } from "react-router-dom";

class ChampionImg extends React.Component {
  render() {
    return (
      <Link
        className={`championImgBox ${this.props.focusStatus}`}
        to={`/ChampionsDetail/${this.props.championID.toString()}`}
      >
        <img
          className="default"
          src={this.props.championImgSrc}
          alt={this.props.championID}
          onMouseOver={this.props.ChampionImgFocusOn}
          onMouseOut={this.props.ChampionImgFocusOff}
        />
        <div>{this.props.championName}</div>
      </Link>
    );
  }
}
export default withRouter(ChampionImg);
