import React, { Component } from "react";
import MainHeader from "../Main/MainHeader";
import "./ChampionsList.scss";
import ChampionImg from "../../Components/ChampionsList/ChampionImg";
import ChampionListData from "../../Components/ChampionsList/ChampionsListData";
import ChampionCard from "../../Components/ChampionsList/ChampionCard";

export default class ChampionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      championListData: ChampionListData,
      focusStatus: "off"
    };
  }

  handlerChampionImgFocusOn = e => {
    e.target.className = "select";
    console.log(e.target.className);
    this.setState({ focusStatus: "on" });
  };
  handlerChampionImgFocusOff = e => {
    e.target.className = "notselcted";
    this.setState({ focusStatus: "off" });
  };
  render() {
    const { championListData, focusStatus } = this.state;
    console.log(focusStatus);
    return (
      <>
        <MainHeader />
        <div className="championList-background">
          <div className="championList-body">
            <div className="championList-left">
              {ChampionListData.map(el => {
                let _data = [];
                _data.push(
                  <ChampionImg
                    focusStatus={focusStatus}
                    championID={el.id}
                    championImgSrc={el.championsImgSrc}
                    championName={el.championName}
                    ChampionImgFocusOn={this.handlerChampionImgFocusOn}
                    ChampionImgFocusOff={this.handlerChampionImgFocusOff}
                  />
                );
                return _data;
              })}
            </div>
            <div className="championList-right">
              <ChampionCard
                championTitle={championListData.championTitle}
                championDesc={championListData.championDesc}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
