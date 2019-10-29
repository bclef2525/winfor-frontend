import React, { Component } from 'react';
import '../StaticsTiersRight.scss'

export default class StaticsTiersRightData extends Component{
  render() {
    return (
      <tr className="STR-tr">
        <td className="STR-databar">
          <div className="STR-datas">
            <div className="STR-bar"></div>
            <div className="STR-tier">Challenger I</div>
            <div className="STR-user">300 (0.0079%)</div>
            <div className="STR-nu">300 (0.0079%)</div>
          </div>
        </td>
      </tr>
    );
  }
};
  