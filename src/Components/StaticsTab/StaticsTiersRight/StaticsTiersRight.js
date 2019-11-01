import React, { Component } from "react";
import "./StaticsTiersRight.scss";
import StaticsTiersRightData from "./StaticsTiersRightData";
import STRData from "./StaticsTiersRightM";

export default class StaticsTiersRight extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data : [
  //       {}
  //     ]
  //   }
  // }

  handlerLoop = () => {
    let list = [];
    for (let i = 0; i < 27; i++) {
      list.push(<StaticsTiersRightData />);
    }
    console.log(list);
    return list;
  };

  render() {
    return (
      <div>
        <div className="STRBox">
          <div className="STRTitle">세부 리그 통계</div>
          <table className="STRTable">
            <thead className="STRThead">
              <tr className="STRThead-tr">
                <th></th>
                <th className="STRThead-th">
                  <div className="STRhead-tier">티어</div>
                </th>
                <th>
                  <div className="STRhead-count">소환사수</div>
                </th>
                <th>
                  <div className="STRhead-nu">누계</div>
                </th>
              </tr>
            </thead>
            <tbody className="STRBody">
              {/* <StaticsTiersRightData /> */}
              {STRData.map((el, idx) => {
                console.log(el);
                return <StaticsTiersRightData info={el} index={idx} />;
              })}
            </tbody>
          </table>
          <div className="STRbottom">
            <div className="STRbottom-info">
              소환사 검색시 나타나는 래더 랭킹 상위 퍼센티지는 브론즈까지의{" "}
              <br />
              퍼센트 계산이며, 이 표의 누계는 언랭크까지 계산됩니다.
            </div>
            <div className="STRbottom-update">업데이트:3시간전</div>
          </div>
        </div>
      </div>
    );
  }
}

//map 함수로 각각 id값 부여해 0~2빨간색, 3~6파란색, 7~10초록색, 11~14노란색, 15~18은색 19~26연갈색
