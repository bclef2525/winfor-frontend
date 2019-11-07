import React from "react";
import { Link, withRouter } from "react-router-dom";

class ChampionImg extends React.Component {
  render() {
    return (
      <div className="championImgContainer">
        <Link
          className={`championImgBox ${this.props.focusStatus}`}
          to={`/ChampionsDetail/${this.props.championID.toString()}`}
        >
          <div className="championImg-title">{this.props.championName}</div>
          <img
            className="default"
            name={this.props.championID}
            src={this.props.championImgSrc}
            alt={this.props.championID}
            onMouseOver={this.props.championImgFocusOn}
            onMouseOut={this.props.championImgFocusOff}
            //onClick={this.props.selectChampionCard}
          />
        </Link>
      </div>
    );
  }
}
export default withRouter(ChampionImg);
