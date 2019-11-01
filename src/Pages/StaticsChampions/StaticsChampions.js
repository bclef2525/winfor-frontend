import React, { Component } from "react";
import StaticsNav from "../../Components/StaticsTab/StaticsNav";
import StaticsListTitleBar from "../../Components/StaticsTab/StaticsChampionsList/TitleBar";
import StaticsListContentBar from "../../Components/StaticsTab/StaticsChampionsList/ContentBar";
import StaticsListColGroup from "../../Components/StaticsTab/StaticsChampionsList/ColGroup";
import ChampionsData from "../../Components/StaticsTab/StaticsChampionsList/ChampionData/ChampionData";
import ArrowDown from "../../Img/down.png";
import ArrowUp from "../../Img/up.png";
import ArrowDefault from "../../Img/default.png";
import "./StaticsChampions.scss";

export default class staticsChampions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      championsData: ChampionsData,
      activeCategory: "none",
      sortBtn: "high",
      beforeCategory: "none",
      rank: ArrowDefault,
      championName: ArrowDefault,
      winRate: ArrowDefault,
      playCount: ArrowDefault,
      averageScore: ArrowDefault,
      csScore: ArrowDefault,
      goldScore: ArrowDefault
    };
  }

  checkCategory = e => {
    let selectedCategory = e.target.name;
    if (this.state.activeCategory !== selectedCategory) {
      this.setState(
        {
          [this.state.activeCategory]: ArrowDefault,
          [selectedCategory]: ArrowDown
        },
        this.handlerSortHigh(selectedCategory)
      );
    } else if (this.state.activeCategory === selectedCategory) {
      if (this.state.sortBtn === "low") {
        this.setState(
          { [this.state.activeCategory]: ArrowDown },
          this.handlerSortHigh(selectedCategory)
        );
      } else {
        this.setState(
          { [this.state.activeCategory]: ArrowUp },
          this.handlerSortLow(selectedCategory)
        );
      }
    }
  };

  handlerSortHigh = selectedCategory => {
    let data = this.state.championsData;
    let _data = [];
    let sortedData = [];
    for (let i = 0; i < data.length; i++) {
      if (!_data.includes(data[i][selectedCategory])) {
        _data.push(data[i][selectedCategory]);
      }
    }
    _data.sort((a, b) => b - a);
    for (let i = 0; i < _data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (_data[i] === data[j][selectedCategory]) {
          sortedData.push(data[j]);
        }
      }
    }
    return this.setState({
      activeCategory: selectedCategory,
      championsData: sortedData,
      sortBtn: "high"
    });
  };

  handlerSortLow = selectedCategory => {
    let data = this.state.championsData;
    let _data = [];
    let sortedData = [];
    for (let i = 0; i < data.length; i++) {
      if (!_data.includes(data[i][selectedCategory])) {
        _data.push(data[i][selectedCategory]);
      }
    }
    _data.sort((a, b) => a - b);
    for (let i = 0; i < _data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (_data[i] === data[j][selectedCategory]) {
          sortedData.push(data[j]);
        }
      }
    }
    return this.setState({
      activeCategory: selectedCategory,
      championsData: sortedData,
      sortBtn: "low"
    });
  };

  render() {
    const {
      championsData,
      rank,
      championName,
      winRate,
      playCount,
      averageScore,
      csScore,
      goldScore
    } = this.state;

    return (
      <>
        {/* nav */}
        <StaticsNav />
        <div className="statics-champions-background">
          <div className="statics-champions-body">
            <div className="statics-champions-desc-text">
              챔피언별 통계를 볼 수 있습니다.
            </div>
            <table className="statics-champions-content">
              <StaticsListColGroup />
              <StaticsListTitleBar
                onClick={this.checkCategory}
                rank={rank}
                championName={championName}
                winRate={winRate}
                playCount={playCount}
                averageScore={averageScore}
                csScore={csScore}
                goldScore={goldScore}
              />
              <tbody>
                {championsData.map((el, id) => {
                  let _lists = [];
                  _lists.push(
                    <StaticsListContentBar
                      key={id}
                      rank={id + 1}
                      championImgSrc={el.championImgSrc}
                      championName={el.championName}
                      winRate={el.winRate}
                      playCount={el.playCount}
                      averageScore={el.averageScore}
                      csScore={el.csScore}
                      goldScore={el.goldScore}
                    />
                  );
                  return _lists;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
