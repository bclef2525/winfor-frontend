import React, { Component } from "react";
import MainHeader from "../Main/MainHeader";
import Main from "../Main";
import "./ChampionsDetail.scss";
export class ChampionsDetail extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <MainHeader />
        <div className="cd-page">
          <div className="cd-image-container">
            <div className="cd-champ-name">아우렐리온 솔</div>
            <video className="cd-image" autoPlay muted loop>
              <source
                src="https://universe-meeps.leagueoflegends.com/v1/assets/videos/aurelionsol-splashvideo.webm"
                type="video/mp4"
              />
            </video>
            <div className="cd-detail-image"></div>
          </div>
          <div className="cd-nickname">"별의 창조자"</div>
          <div className="cd-portrait-container">
            <div className="cd-portrait"></div>
          </div>
          <div className="cd-explain-container">
            <div className="cd-explain-skill-container">
              <div className="cd-explain-skill">
                <span>캐릭터 스킬</span>
              </div>
              <div className="skill-container">
                <div className="skill-passive-container">
                  <div className="skill-image-name">
                    <div className="skill-passive-image"></div>
                    <div className="skill-passive-name">우주의 중심</div>
                  </div>
                  <div className="skill-passive-text">
                    위성이 아우렐리온 솔의 주위를 돌며 충돌하는 적들에게 마법
                    피해를 입힙니다.
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="cd-explain-history-container"></div>
            <div className="cd-explain-logo-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionsDetail;
