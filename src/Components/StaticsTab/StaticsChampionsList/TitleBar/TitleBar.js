import React, { Component } from "react";
import "./TitleBar.scss";
import StaticsListTitleBarContent from "./Content";

export default class StaticsListTitleBar extends Component {
  render() {
    return (
      <thead className="statics-listTitleBar-background">
        <tr className="statics-listTitleBar">
          <StaticsListTitleBarContent
            className="rank"
            title="#"
            onClick={this.props.onClick}
            imgSrc={this.props.rank}
          />
          <StaticsListTitleBarContent
            className="championName"
            title="챔피언"
            onClick={this.props.onClick}
            imgSrc={this.props.championName}
          />
          <StaticsListTitleBarContent
            className="winRate"
            title="승률"
            onClick={this.props.onClick}
            imgSrc={this.props.winRate}
          />
          <StaticsListTitleBarContent
            className="playCount"
            title="플레이수"
            onClick={this.props.onClick}
            imgSrc={this.props.playCount}
          />
          <StaticsListTitleBarContent
            className="averageScore"
            title="평점"
            onClick={this.props.onClick}
            imgSrc={this.props.averageScore}
          />
          <StaticsListTitleBarContent
            className="csScore"
            title="CS"
            onClick={this.props.onClick}
            imgSrc={this.props.csScore}
          />
          <StaticsListTitleBarContent
            className="goldScore"
            title="골드"
            onClick={this.props.onClick}
            imgSrc={this.props.goldScore}
          />
        </tr>
      </thead>
    );
  }
}
