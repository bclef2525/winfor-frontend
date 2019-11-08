/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UserHistoru.scss";

class UserHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goSwag = () => {
    this.props.history.push("/SwaggerList");
    console.log(this.props.history);
  };

  render() {
    let { info } = this.props;
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
    // console.log(kills);
    console.log(this.props);
    return (
      <>
        <div className="mml-user-history-container">
          <div className="mml-user-history">
            <div className="mml-user-game-stats">
              <div className="stats-game-type">{info.gametype}</div>
              <div className="stats-game-day">{info.start_time}</div>
              <div className="border"></div>
              <div className="stats-game-result">{info.win}</div>
              <div className="stats-game-time">{info.gameduration}</div>
            </div>
            <div className="mml-user-setting">
              <img
                src={info.to_user1_champion[0].champion_img_src}
                className="setting-champ-image"
              ></img>
              <div className="setting-champ-skill-container">
                <img
                  src={info.spell1[0].spell_img_src}
                  className="setting-champ-skills thespell"
                ></img>
                <img
                  src={info.sub_rune[0].subrune_img_src}
                  className="setting-champ-skills"
                ></img>

                <img
                  src={info.spell2[0].spell_img_src}
                  className="setting-champ-skills thespell"
                ></img>
                <img
                  src={info.core_rune[0].rune_img_src}
                  className="setting-champ-skills"
                ></img>
              </div>
              <div className="setting-champ-name">
                {info.to_user1_champion[0].champion_name}
              </div>
            </div>
            <div className="mml-user-KDA">
              <div className="KDA-container">
                <div className="KDA-kill">{info.kill}</div>/
                <div className="KDA-death">{info.death}</div>/
                <div className="KDA-assist">{info.assist}</div>
              </div>
              <div className="KDA-ratio">
                <div className="KDA-ratio-potint">
                  {((info.kill + info.assist) / info.death).toFixed(2)}
                  :1 평점
                </div>
              </div>
              <div className="kill-perfomence">
                {/* {() => {
                  if (info.pentakill > 0) {
                    return "nopenta";
                  }
                }} */}
                {kills()}
              </div>
            </div>
            <div className="mml-user-stats">
              <div className="user-stats-level">레벨 18</div>
              <div className="user-stats-CS">{info.cs} CS</div>
              <div className="user-stats-engage">분당CS 8.3</div>
            </div>
            <div className="mml-user-players">
              <div className="players-my-team">
                <div className="players-container">
                  <img
                    src={info.champions[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.user[0].user_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.to_user1_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.to_user1_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.to_user2_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.to_user2_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.to_user3_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.to_user3_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.to_user4_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.to_user4_name}</div>
                </div>
              </div>

              <div className="players-enemy-team">
                <div className="players-container">
                  <img
                    src={info.en_user1_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.en_user1_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.en_user2_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.en_user2_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.en_user3_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.en_user3_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.en_user4_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.en_user4_name}</div>
                </div>
                <div className="players-container">
                  <img
                    src={info.en_user5_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">{info.en_user5_name}</div>
                </div>
              </div>
            </div>
            <button onClick={this.goSwag.bind(this)} className="history-boast">
              자랑하기
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserHistory);
