import React, { Component } from 'react';
import './StaticsTiersRight.scss';
import StaticsTiersRightData from "./StaticsTiersRightData";


export default class StaticsTiersRight extends Component{
  render() {
    return (
      <div>
        <div className="STRBox">
          <div className="STRTitle">세부 리그 통계</div>
          <div className="STRContent">
            <table clasName="STRTable">
              <thead className="STRThead">
                <tr className="STRThead-tr">
                  <th className="STRThead-th">
                    <div className="STRhead-names">
                      <div className="STRhead-tier">티어</div>
                      <div className="STRhead-count">소환사수</div>
                      <div className="STRhead-nu">누계</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="STRBody">
              <StaticsTiersRightData/>
              <StaticsTiersRightData/>
              <StaticsTiersRightData/>
              </tbody>
              <div className="STRbottom">
                <div className="STRbottom-info">
                  소환사 검색시 나타나는 래더 랭킹 상위 퍼센티지는 브론즈까지의 <br/>
                  퍼센트 계산이며, 이 표의 누계는 언랭크까지 계산됩니다.
                </div>
                <div className="STRbottom-update">업데이트:3시간전</div>
              </div>

            </table>
          </div>
        </div>
      </div>
    );
  }

};
