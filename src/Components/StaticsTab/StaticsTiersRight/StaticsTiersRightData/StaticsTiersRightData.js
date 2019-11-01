import React, { Component } from "react";
import "../StaticsTiersRight.scss";

export default class StaticsTiersRightData extends Component {
  render() {
    console.log(this.props);

    let colorindex = "";
    let barcolor = "";
    let { index } = this.props;
    let { info } = this.props;
    if (index < 3) {
      colorindex = "STR-tr-red";
      barcolor = "STR-bar-red";
    } else if (index > 2 && index < 7) {
      colorindex = "STR-tr-dia";
      barcolor = "STR-bar-dia";
    } else if (index > 6 && index < 11) {
      colorindex = "STR-tr-pla";
      barcolor = "STR-bar-pla";
    } else if (index > 10 && index < 15) {
      colorindex = "STR-tr-gold";
      barcolor = "STR-bar-gold";
    } else if (index > 14 && index < 19) {
      colorindex = "STR-tr-silver";
      barcolor = "STR-bar-silver";
    } else if (index > 18) {
      colorindex = "STR-tr-bronze";
      barcolor = "STR-bar-bronze";
    }
    console.log(index);
    return (
      <tr className={`${colorindex} STR-tr`}>
        <td className={`${barcolor} STR-bar`}></td>
        <td>
          <div className="STR-tier">
            {info.tier} {info.tier_roman}
          </div>
        </td>
        <td>
          <div className="STR-user">
            {info.summoner} ({info.summoner_percent}%)
          </div>
        </td>
        <td>
          <div className="STR-nu">
            {info.aggregate} ({info.aggregate_percent}%)
          </div>
        </td>
      </tr>
    );
  }
}
