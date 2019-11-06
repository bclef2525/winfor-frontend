import React, { Component } from "react";
import "./UserHistoru.scss";

export class UserHistory extends Component {
  render() {
    let { index } = this.props;
    let { info } = this.props;
    let kills = () => {
      if (info.game[0].pentakill !== 0) {
        return "펜타킬";
      } else if (info.game[0].quadrakill !== 0) {
        return "쿼드라킬";
      } else if (info.game[0].triplekill !== 0) {
        return "트리플킬";
      } else if (info.game[0].doublekill !== 0) {
        return "더블킬";
      } else {
        return "싱글킬";
      }
    };
    console.log(kills);
    console.log(this.props.info.game[0].id);
    return (
      <>
        <div className="mml-user-history-container">
          <div className="mml-user-history">
            <div className="mml-user-game-stats">
              <div className="stats-game-type">{info.game[0].gametype}</div>
              <div className="stats-game-day">{info.game[0].start_time}</div>
              <div className="border"></div>
              <div className="stats-game-result">{info.game[0].win}</div>
              <div className="stats-game-time">{info.game[0].gameduration}</div>
            </div>
            <div className="mml-user-setting">
              <img
                src={info.game[0].to_user1_champion[0].champion_img_src}
                className="setting-champ-image"
              ></img>
              <div className="setting-champ-skill-container">
                <img
                  src={info.game[0].spell1[0].spell_img_src}
                  className="setting-champ-skills thespell"
                ></img>
                <img
                  src={info.game[0].sub_rune[0].subrune_img_src}
                  className="setting-champ-skills"
                ></img>

                <img
                  src={info.game[0].spell2[0].spell_img_src}
                  className="setting-champ-skills thespell"
                ></img>
                <img
                  src={info.game[0].core_rune[0].rune_img_src}
                  className="setting-champ-skills"
                ></img>
              </div>
              <div className="setting-champ-name">
                {info.game[0].to_user1_champion[0].champion_name}
              </div>
            </div>
            <div className="mml-user-KDA">
              <div className="KDA-container">
                <div className="KDA-kill">{info.game[0].kill}</div>/
                <div className="KDA-death">{info.game[0].death}</div>/
                <div className="KDA-assist">{info.game[0].assist}</div>
              </div>
              <div className="KDA-ratio">
                <div className="KDA-ratio-potint">
                  {(
                    (info.game[0].kill + info.game[0].assist) /
                    info.game[0].death
                  ).toFixed(2)}
                  :1 평점
                </div>
              </div>
              <div className="kill-perfomence">
                {/* {() => {
                  if (info.game[0].pentakill > 0) {
                    return "nopenta";
                  }
                }} */}
                {kills()}
              </div>
            </div>
            <div className="mml-user-stats">
              <div className="user-stats-level">레벨 18</div>
              <div className="user-stats-CS">{info.game[0].cs} CS</div>
              <div className="user-stats-engage">분당CS 8.3</div>
            </div>
            <div className="mml-user-players">
              <div className="players-my-team">
                <div className="players-container">
                  <img
                    src={info.game[0].champions[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].user[0].user_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].to_user1_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].to_user1_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].to_user2_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].to_user2_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].to_user3_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].to_user3_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].to_user4_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].to_user4_name}
                  </div>
                </div>
              </div>

              <div className="players-enemy-team">
                <div className="players-container">
                  <img
                    src={info.game[0].en_user1_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].en_user1_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].en_user2_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].en_user2_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].en_user3_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].en_user3_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].en_user4_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].en_user4_name}
                  </div>
                </div>
                <div className="players-container">
                  <img
                    src={info.game[0].en_user5_champion[0].champion_img_src}
                    className="player-image"
                  ></img>
                  <div className="player-name">
                    {info.game[0].en_user5_name}
                  </div>
                </div>
              </div>
            </div>
            <button className="history-boast">자랑하기</button>
          </div>
        </div>
      </>
    );
  }
}

export default UserHistory;
