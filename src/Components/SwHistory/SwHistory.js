/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./SwHistory.scss";
import SwHistoryComment from "./SwHistoryComment/SwHistoryComment";
import commentMock from "./commentMock";

export class SwHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: "",
      commentsectionStatus: false,
      focus: false,
      buttonStatus: false,
      commentData: commentMock
    };
  }
  // submitComment() {
  //   fetch("주소주세용", {
  //     method: "post",
  //     body: JSON.stringify({
  //       comment: this.state.commentValue,
  //       그리고 유저정보도 보내야함
  //     })
  //   })
  //     .then(function(res) {
  //       return res.json();
  //     })
  //
  // }
  handleComment = e => {
    this.setState({ commentValue: e.target.value }, () =>
      this.setState({
        buttonStatus: this.state.commentValue.length > 0 ? true : false
      })
    );
  };
  openComment = e => {
    this.setState({
      commentsectionStatus: this.state.commentsectionStatus ? false : true
    });
  };
  closeComment = e => {
    this.setState({ commentsectionStatus: false });
  };
  focusAcitve = () => {
    this.setState({
      focus: true
    });
  };
  blurAcitve = () => {
    this.setState({
      focus: false
    });
  };
  render() {
    let { index, info } = this.props;
    let { commentData } = this.state;
    let kills = () => {
      if (info.pentakill !== 0) {
        return "펜타킬";
      } else if (info.quadrakill !== 0) {
        return "쿼드라킬";
      } else if (info.triplekill !== 0) {
        return "트리플킬";
      } else if (info.doublekill !== 0) {
        return "더블킬";
      } else {
        return "싱글킬";
      }
    };
    console.log(this.state);
    console.log(kills);
    console.log(this.props.info.id);
    return (
      <div className="sw-whole">
        <div className="sw-user-history-container">
          <div className="sw-user-history">
            <div className="sw-contents">
              <div className="sw-result">
                <div className="heart">ㄴ</div>
                {info.user[0].user_name} - {info.win}!
              </div>
              <div className="sw-user-section">
                <div className="sw-user-game-stats">
                  <div className="sw-stats-game-type">{info.gametype}</div>
                  <div className="sw-stats-game-day">{info.start_time}</div>
                  <div className="sw-border"></div>
                  <div className="sw-stats-game-time">{info.gameduration}</div>
                </div>
                <div className="sw-user-setting">
                  <img
                    src={info.to_user1_champion[0].champion_img_src}
                    className="sw-setting-champ-image"
                  ></img>
                  <div className="sw-setting-champ-name">
                    {info.to_user1_champion[0].champion_name}
                  </div>
                  <div className="sw-setting-champ-skill-container">
                    <img
                      src={info.spell2[0].spell_img_src}
                      className="sw-setting-champ-skills thespell"
                    ></img>
                    <img
                      src={info.spell1[0].spell_img_src}
                      className="sw-setting-champ-skills thespell"
                    ></img>

                    <img
                      src={info.sub_rune[0].subrune_img_src}
                      className="sw-setting-champ-skills"
                    ></img>

                    <img
                      src={info.core_rune[0].rune_img_src}
                      className="sw-setting-champ-skills"
                    ></img>
                  </div>
                </div>
                <div className="sw-user-KDA">
                  <div className="sw-KDA-container">
                    <div className="sw-KDA-kill">{info.kill}</div>/
                    <div className="sw-KDA-death">{info.death}</div>/
                    <div className="sw-KDA-assist">{info.assist}</div>
                  </div>
                  <div className="sw-KDA-ratio">
                    <div className="sw-KDA-ratio-potint">
                      {((info.kill + info.assist) / info.death).toFixed(2)}
                      :1 평점
                    </div>
                  </div>
                  <div className="sw-kill-perfomence">{kills()}</div>
                </div>
                <div className="sw-user-stats">
                  <div className="sw-user-stats-level">레벨 18</div>
                  <div className="sw-user-stats-CS">{info.cs} CS</div>
                  <div className="sw-user-stats-engage">분당CS 8.3</div>
                </div>
              </div>
              <div className="sw-midline"></div>

              <div className="sw-user-players">
                <div className="sw-players-my-team">
                  <div className="sw-players-container">
                    <div className="sw-player-name">
                      {info.user[0].user_name}
                    </div>
                    <img
                      src={info.champions[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                  </div>
                  <div className="sw-players-container">
                    <div className="sw-player-name">{info.to_user1_name}</div>
                    <img
                      src={info.to_user1_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                  </div>

                  <div className="sw-players-container">
                    <div className="sw-player-name">{info.to_user2_name}</div>
                    <img
                      src={info.to_user2_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                  </div>
                  <div className="sw-players-container">
                    <div className="sw-player-name">{info.to_user3_name}</div>
                    <img
                      src={info.to_user3_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                  </div>
                  <div className="sw-players-container">
                    <div className="sw-player-name">{info.to_user4_name}</div>
                    <img
                      src={info.to_user4_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                  </div>
                </div>
                <div className="sw-verse">vs</div>
                <div className="sw-players-enemy-team">
                  <div className="sw-players2-container">
                    <img
                      src={info.en_user1_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                    <div className="sw-player-name">{info.en_user1_name}</div>
                  </div>
                  <div className="sw-players2-container">
                    <img
                      src={info.en_user2_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                    <div className="sw-player-name">{info.en_user2_name}</div>
                  </div>
                  <div className="sw-players2-container">
                    <img
                      src={info.en_user3_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                    <div className="sw-player-name">{info.en_user3_name}</div>
                  </div>
                  <div className="sw-players2-container">
                    <img
                      src={info.en_user4_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                    <div className="sw-player-name">{info.en_user4_name}</div>
                  </div>
                  <div className="sw-players2-container">
                    <img
                      src={info.en_user5_champion[0].champion_img_src}
                      className="sw-player-image"
                    ></img>
                    <div className="sw-player-name">{info.en_user5_name}</div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={this.openComment} className="sw-history-boast">
              댓글달기
            </button>
          </div>
          {/* -----------------commentSectionStart------------------------ */}
        </div>
        <div
          className={
            this.state.commentsectionStatus
              ? "sw-commentsection"
              : "sw-commentsection-hidden"
          }
        >
          <div className="sw-commentS-header">
            <div className="sw-commentS-name">댓글</div>
            <button onClick={this.closeComment} className="sw-commentS-close">
              X
            </button>
          </div>
          <div className="sw-commentS-body">
            {commentData.map((el, idx) => {
              console.log(el);
              return <SwHistoryComment info={el} index={idx} />;
            })}
          </div>
          <div className="sw-commentS-inputS">
            <div className="sw-commentS-inputHolder">
              <input
                onChange={this.handleComment}
                onFocus={this.focusAcitve}
                onBlur={this.blurAcitve}
                id="sw-commentS-input"
                className="sw-commentS-input"
              />
              <label
                for="sw-commentS-input"
                className={`sw-commentS-label${
                  this.state.focus ? "-none" : ""
                }`}
              >
                댓글입력...
              </label>
              <button
                // onClick={this.submitComment.bind(this)}
                className={`sw-commentS-submit${
                  this.state.buttonStatus ? "" : "-none"
                }`}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
