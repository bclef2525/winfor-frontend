import React, { Component } from "react";
import MainHeader from "../Main/MainHeader";
import "./ChampionsList.scss";
import ChampionImg from "../../Components/ChampionsList/ChampionImg";
import {
  championsData,
  defaultCardData
} from "../../Components/ChampionsList/ChampionsListData";
import ChampionCard from "../../Components/ChampionsList/ChampionCard";
import Flickity from "react-flickity-component";
import "../../Styles/flickity.css";

export default class ChampionsList extends Component {
  constructor(props) {
    console.log("constructor Render!");

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
    this.setState({
      focusStatus: "off"
      //selectedChampion: defaultCardData
    });
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
    // const Flky = new Flickity(".gallery", { wrapAround: true });
    const { championListData, focusStatus, selectedChampion } = this.state;
    return (
      <>
        <MainHeader />
        <div className="championList-background">
          <div id="championList-background-opacity">
            <div className="championList-body">
              <div className="championList-top">
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
              <div className="championList-divideBar">
                <img
                  src="https://universe.leagueoflegends.com/images/t1HeaderDivider.png"
                  alt="divbar"
                />
              </div>
              <div className="championList-bottom">
                <Flickity
                  options={{
                    wrapAround: true,
                    initialIndex: Number(
                      (championListData.length / 2).toFixed(0)
                    )
                  }}
                  className="championList-content"
                >
                  {championListData.map(el => {
                    let _data = [];
                    _data.push(
                      <ChampionImg
                        focusStatus={focusStatus}
                        championID={el.id}
                        championImgSrc={el.championsImgSrc[0].basicLoadImg}
                        championName={el.championTitle}
                        championImgFocusOn={this.handlerChampionImgFocusOn}
                        championImgFocusOff={this.handlerChampionImgFocusOff}
                      />
                    );
                    return _data;
                  })}
                </Flickity>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
