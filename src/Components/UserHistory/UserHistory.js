import React, { Component } from "react";
import "./UserHistoru.scss";
import Players from "../UserHistory/Players/Players";

export class UserHistory extends Component {
  render() {
    return (
      <>
        <div className="mml-user-history-container">
          <div className="mml-user-history">
            <div className="mml-user-game-stats">
              <div className="stats-game-type">무작위 총력전</div>
              <div className="stats-game-day">7일 전</div>
              <div className="border"></div>
              <div className="stats-game-result">승리</div>
              <div className="stats-game-time">19분 22초</div>
            </div>
            <div className="mml-user-setting">
              <div className="setting-champ-image"></div>
              <div className="setting-champ-skill-container">
                <div className="setting-champ-skills"></div>
                <div className="setting-champ-skills"></div>
                <div className="setting-champ-skills"></div>
                <div className="setting-champ-skills"></div>
              </div>
              <div className="setting-champ-name">애쉬</div>
            </div>
            <div className="mml-user-KDA">
              <div className="KDA-container">
                <div className="KDA-kill">10</div>/
                <div className="KDA-death">7</div>/
                <div className="KDA-assist">22</div>
              </div>
              <div className="KDA-ratio">
                <div className="KDA-ratio-potint"> 4.57:1 평점</div>
              </div>
              <div className="kill-perfomence">더블킬</div>
            </div>
            <div className="mml-user-stats">
              <div className="user-stats-level">레벨 18</div>
              <div className="user-stats-CS">69 (3.3) CS</div>
              <div className="user-stats-engage">킬관여 82%</div>
            </div>
            <div className="mml-user-players">
              <div className="players-my-team">
                <Players />
                <Players /> <Players /> <Players /> <Players />
              </div>

              <div className="players-enemy-team">
                {" "}
                <Players /> <Players /> <Players /> <Players /> <Players />
              </div>
            </div>
            <div className="history-boast">자랑하기</div>
          </div>
        </div>
      </>
    );
  }
}

export default UserHistory;
