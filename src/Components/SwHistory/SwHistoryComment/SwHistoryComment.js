/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SwHistoryComment.scss";

export default class SwHistoryComment extends Component {
  render() {
    console.log(this.props);
    const { info } = this.props;
    return (
      <div className="comment-body">
        <img src={info.user_img} className="comment-img"></img>
        <div className="comment-contents">
          <div className="comment-user">
            {info.user_name} <div className="comment-time"></div>
          </div>
          <div className="comment-value">{info.value}</div>
        </div>
      </div>
    );
  }
}
