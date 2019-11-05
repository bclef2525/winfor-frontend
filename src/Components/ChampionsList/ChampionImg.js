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
          name={this.props.championID}
          src={this.props.championImgSrc}
          alt={this.props.championID}
          onMouseOver={this.props.championImgFocusOn}
          onMouseOut={this.props.championImgFocusOff}
          //onClick={this.props.selectChampionCard}
        />
        <div>{this.props.championName}</div>
      </Link>
    );
  }
}
export default withRouter(ChampionImg);
