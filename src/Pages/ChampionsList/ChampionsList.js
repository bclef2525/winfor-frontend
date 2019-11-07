import React, { Component } from "react";
import MainHeader from "../Main/MainHeader";
import "./ChampionsList.scss";
import ChampionImg from "../../Components/ChampionsList/ChampionImg";
import { defaultCardData } from "../../Components/ChampionsList/ChampionsListData";
import ChampionCard from "../../Components/ChampionsList/ChampionCard";
import Flickity from "react-flickity-component";
import "../../Styles/flickity.css";

export default class ChampionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      championListData: [],
      selectedChampion: defaultCardData,
      focusStatus: "off"
    };
  }
  componentDidMount = () => {
    fetch("http://10.58.0.33:8000/champ_info/list", {
      method: "get"
    })
      .then(function(res) {
        return res.json();
      })
      .then(res => {
        this.setState({
          championListData: res.champ_info_data
        });
      });
  };

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
      return el.CHAMPION_ID === Number(e.target.name);
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
                    selectedChampion[0].CHAMPION_IMG[0].SKIN_SPLASHES
                  }
                  championTitle={selectedChampion[0].CHAMPION_NAME}
                  championSubTitle={selectedChampion[0].CHAMPION_LINE}
                  championDesc={selectedChampion[0].CHAMPION_STORY}
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
                        championID={el.CHAMPION_ID}
                        championImgSrc={el.CHAMPION_IMG[0].LOADING_IMG}
                        championName={el.CHAMPION_NAME}
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
