import React, { Component } from "react";
import MainHeader from "../Main/MainHeader";
import "./ChampionsDetail.scss";
import { withRouter } from "react-router-dom";
export class ChampionsDetail extends Component {
  constructor() {
    super();
    this.state = {
      champData: ""
    };
  }
  componentDidMount() {
    console.log("params", this.props.location.search.slice(1));
    let params = new URLSearchParams(this.props.location.search.slice(1));
    console.log("!!", params);
    fetch(
      `http://10.58.0.33:8000/champ_info/detail?${this.props.location.search.slice(
        1
      )}`,
      {
        method: "get"
      }
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          champData: res
        });
      });
  }
  render() {
    const { champData } = this.state;

    return (
      <div className="cd-total-page">
        <MainHeader />
        <div className="cd-page">
          <div className="cd-image-container">
            <div className="cd-champ-name">{champData.NAME}</div>
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
              {this.state.champData && (
                <source src={champData.MOVIE} type="video/mp4" />
              )}
            </video>
          </div>

          <div className="cd-detail-image"></div>
          <div className="cd-nickname">"{champData.TITLE}"</div>
          <div className="cd-portrait-container">
            <div
              className="cd-portrait"
              style={{
                backgroundImage: `url(${champData.ICON})`
              }}
            ></div>
          </div>
          <div className="cd-explain-container">
            <div className="cd-explain-skill-container">
              <div className="cd-explain-skill">
                <span>캐릭터 스킬</span>
              </div>
              <div className="skill-container">
                <div className="skill-passive-container">
                  <div className="skill-image-name">
                    <div
                      className="skill-passive-image"
                      style={{
                        backgroundImage: `url(${champData.PASSIVE_ICON})`
                      }}
                    ></div>
                    <div className="skill-passive-name">
                      {champData.PASSIVE_NAME}
                    </div>
                  </div>
                  <div className="skill-passive-text">
                    {champData.PASSIVE_DESC}
                  </div>
                </div>
                <div className="skill-q-container">
                  <div className="qskill-image-name">
                    <div
                      className="skill-q-image"
                      style={{
                        backgroundImage: `url(${champData.Q_SKILL_ICON})`
                      }}
                    >
                      {" "}
                    </div>
                    <div className="skill-q-name">{champData.Q_SKILL_NAME}</div>
                  </div>
                  <div className="skill-q-text">{champData.Q_SKILL_DESC}</div>
                </div>
                <div className="skill-w-container">
                  <div className="wskill-image-name">
                    <div
                      className="skill-w-image"
                      style={{
                        backgroundImage: `url(${champData.W_SKILL_ICON})`
                      }}
                    ></div>
                    <div className="skill-w-name">{champData.W_SKILL_NAME}</div>
                  </div>
                  <div className="skill-w-text">{champData.W_SKILL_DESC}</div>
                </div>
                <div className="skill-e-container">
                  <div className="eskill-image-name">
                    <div
                      className="skill-e-image"
                      style={{
                        backgroundImage: `url(${champData.E_SKILL_ICON})`
                      }}
                    ></div>
                    <div className="skill-e-name">{champData.E_SKILL_NAME}</div>
                  </div>
                  <div className="skill-e-text">{champData.E_SKILL_DESC}</div>
                </div>
                <div className="skill-r-container">
                  <div className="rskill-image-name">
                    <div
                      className="skill-r-image"
                      style={{
                        backgroundImage: `url(${champData.R_SKILL_ICON})`
                      }}
                    ></div>
                    <div className="skill-r-name">{champData.R_SKILL_NAME}</div>
                  </div>
                  <div className="skill-r-text">{champData.R_SKILL_DESC}</div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="cd-explain-history-container">
              <div className="cd-word-container">
                <div className="cd-text">"{champData.LINE}"</div>
                <div className="cd-text-author">~{champData.NAME}</div>
              </div>
              <div className="cd-champ-history-container">
                <div className="cd-champ-history">"{champData.STORY}"</div>
              </div>
            </div>
            <div className="cd-explain-logo-container">
              <div className="cd-role-container">
                <div
                  className="cd-role-image"
                  style={{
                    backgroundImage: `url(${champData.ROLE_IMG})`
                  }}
                ></div>
                <div className="cd-role-text-container">
                  <div className="cd-text-role">역할군</div>
                  <div>{champData.ROLE}</div>
                </div>
              </div>
              <div className="cd-location-container">
                <div
                  className="cd-location-img"
                  style={{
                    backgroundImage: `url(${champData.REGION_IMG})`
                  }}
                ></div>
                <div className="cd-location-text-container">
                  <div className="location-text">지역</div>
                  <div className="location-text2">{champData.REGION}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChampionsDetail);
