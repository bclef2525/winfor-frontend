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
            <video
              className="cd-image"
              autoPlay
              muted
              loop
              style={{
                display: "inliin-block",
                width: "100%",
                height: "auto",
                minWidth: "100%",
                top: "0.277778%",
                left: "53.6719%",
                transform: "translate(-53.6719%, -0.277778%)",
                zIndex: "1"
              }}
            >
              <source
                src="https://universe-meeps.leagueoflegends.com/v1/assets/videos/aurelionsol-splashvideo.webm"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="cd-detail-image"></div>
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
                <div className="skill-q-container">
                  <div className="qskill-image-name">
                    <div className="skill-q-image"></div>
                    <div className="skill-q-name">은하 해일</div>
                  </div>
                  <div className="skill-q-text">
                    아우렐리온 솔이 팽창하는 원반을 만들어냅니다. 원반은
                    아우렐리온 솔과 아주 멀어지면 폭발하여 적을 기절시키고
                    피해를 입힙니다.
                  </div>
                </div>
                <div className="skill-w-container">
                  <div className="wskill-image-name">
                    <div className="skill-w-image"></div>
                    <div className="skill-w-name">우주 팽창</div>
                  </div>
                  <div className="skill-w-text">
                    아우렐리온 솔이 주위를 도는 위성들을 더 멀리 밀어내며
                    피해량과 공전 속도를 증가시킵니다.
                  </div>
                </div>
                <div className="skill-e-container">
                  <div className="eskill-image-name">
                    <div className="skill-e-image"></div>
                    <div className="skill-e-name">혜성 전설</div>
                  </div>
                  <div className="skill-e-text">
                    아우렐리온 솔이 날아올라 먼 거리를 비행합니다.
                  </div>
                </div>
                <div className="skill-r-container">
                  <div className="rskill-image-name">
                    <div className="skill-r-image"></div>
                    <div className="skill-r-name">성운의 공명</div>
                  </div>
                  <div className="skill-r-text">
                    아우렐리온 솔이 성운파를 발사하여 적중하는 모든 적에게
                    피해를 입히고 둔화시키며 가까이 있는 적들을 안전 거리로
                    밀어냅니다.
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="cd-explain-history-container">
              <div className="cd-word-container">
                <div className="cd-text">
                  "웅크리고,찬양하고,애원하지,내가 기대했던 대로다."
                </div>
                <div className="cd-text-author">~아우렐리온 솔</div>
              </div>
              <div className="cd-champ-history-container">
                <div className="cd-champ-history">
                  "아우렐리온 솔은 천상의 경이로운 별들을 손수 빚어 한때 텅
                  비어있던 광활한 우주를 수놓았다. 그러나 이제 그는 속임수로
                  자신을 복종시킨 우주 제국의 명령에 따라 자신의 막강한 힘을
                  발휘해야 하는 처지가 되었다. 별을 만들던 때로 돌아가려는
                  열망에 불타는 아우렐리온 솔은 자신의 자유를 되찾기 위해서라면
                  자신의 창조물인 별들을 하늘에서 없앨 각오마저 되어 있다"
                </div>
              </div>
            </div>
            <div className="cd-explain-logo-container">
              <div className="cd-role-container">
                <div className="cd-role-image"></div>
                <div className="cd-role-text-container">
                  <div className="cd-text-role">역할군</div>
                  <div>마법사</div>
                </div>
              </div>
              <div className="cd-location-container">
                <div className="cd-location-img"></div>
                <div className="cd-location-text-container">
                  <div className="location-text">지역</div>
                  <div className="location-text2">룬테라</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampionsDetail;
