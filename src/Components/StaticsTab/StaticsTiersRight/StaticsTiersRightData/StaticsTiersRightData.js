import React, { Component } from 'react';
import '../StaticsTiersRight.scss'

export default class StaticsTiersRightData extends Component{
  render() {
    console.log(this.props)
    let colorindex = "";
    let { index } = this.props;
    let { info } = this.props ;
    if(index < 3){
      colorindex = "STR-tr-red"
    }else if(index > 3 && index < 7 ){
      colorindex = "STR-tr-blue"
    }else if(index > 7 && index < 11){
      colorindex = "STR-tr-green"
    }else{colorindex = "STR-tr-gray"}
    return ( 
      <tr className={`${colorindex} STR-tr`}>
        <td className="STR-bar"></td>
        <td>
          <div className="STR-tier">{info.tier} {info.tier_roman}</div>
        </td>
        <td>
          <div className="STR-user">{info.summoner} ({info.summoner_percent}%)</div>
        </td>
        <td>
          <div className="STR-nu">{info.aggregate} ({info.aggregate_percent}%)</div>
        </td>
      </tr>
    );
  }
};
