import React, { Component } from "react";
import MainHeader from "../Main/MainHeader";
import "./ChampionsList.scss";
import ChampionImg from "../../Components/ChampionsList/ChampionImg";
import {
  championsData,
  defaultCardData
} from "../../Components/ChampionsList/ChampionsListData";
import ChampionCard from "../../Components/ChampionsList/ChampionCard";

export default class ChampionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      championListData: championsData,
      selectedChampion: defaultCardData,
      focusStatus: "off"
    };
  }

  handlerChampionImgFocusOn = e => {
    e.target.className = "select";
    this.setState({ focusStatus: "on" }, this.handlerShowChampionCard(e));
  };
  handlerChampionImgFocusOff = e => {
    e.target.className = "notselcted";
    this.setState({ focusStatus: "off", selectedChampion: defaultCardData });
  };

  handlerShowChampionCard = e => {
    let result = this.state.championListData.filter(el => {
      return el.id === Number(e.target.name);
    });
    this.setState({
      selectedChampion: result
    });
  };

  render() {
    const { championListData, focusStatus, selectedChampion } = this.state;
    return (
      <>
        <MainHeader />
        <div className="championList-background">
          <div id="championList-background-opacity">
            <div className="championList-body">
              <div className="championList-left">
                {championListData.map(el => {
                  let _data = [];
                  _data.push(
                    <ChampionImg
                      focusStatus={focusStatus}
                      championID={el.id}
                      championImgSrc={el.championsImgSrc[0].basicIconImg}
                      championName={el.championTitle}
                      championImgFocusOn={this.handlerChampionImgFocusOn}
                      championImgFocusOff={this.handlerChampionImgFocusOff}
                    />
                  );
                  return _data;
                })}
              </div>
              <div className="championList-right">
                <ChampionCard
                  focusStatus={focusStatus}
                  championCardImgSrc={
                    selectedChampion[0].championsImgSrc[0].basicSkinImg
                  }
                  championTitle={selectedChampion[0].championTitle}
                  championSubTitle={selectedChampion[0].championSubTitle}
                  championDesc={selectedChampion[0].championDesc}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
