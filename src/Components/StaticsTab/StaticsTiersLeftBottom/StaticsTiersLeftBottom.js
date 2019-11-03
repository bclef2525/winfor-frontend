import React from "react";
import Highcharts from "highcharts";
import { withRouter } from "react-router-dom";
import HighchartsReact from "highcharts-react-official";
import "./StaticsTiersLeftBottom.scss";

const options = {
  credits: {
    text: "Winfor.gg",
    href: "/"
  },
  chart: {
    type: "column",
    height: (9 / 24) * 100 + "%"
  },
  title: {
    text: null
  },
  subtitle: {
    text: null
  },
  xAxis: {
    lineWidth: 1,
    lineColor: "rgb(127, 140, 141)",
    gridLineWidth: 1,
    tickWidth: 1,
    tickLength: 10,
    categories: [
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Master",
      "Grand Master",
      "Challenger"
    ],
    labels: {
      style: {
        fontSize: "60%"
      }
    },
    crosshair: true
  },
  yAxis: {
    lineWidth: 1,
    lineColor: "rgb(127, 140, 141)",
    tickAmount: 6,
    gridLineWidth: 1,
    min: 0,
    max: 10,
    title: {
      text: "KDA per game"
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.05,
      groupPadding: 0.1,
      borderWidth: 0
    }
  },
  series: [
    {
      name: "KDA",
      data: [1.85, 2.1, 2.3, 2.37, 2.44, 2.49, 2.63, 2.53, 2.58]
    },
    {
      name: "Kill",
      data: [4.74, 5.32, 5.63, 5.6, 5.52, 5.22, 4.88, 4.6, 4.38]
    },
    {
      name: "Death",
      data: [6.07, 5.93, 5.73, 5.58, 5.37, 5.02, 4.55, 4.6, 4.31]
    },
    {
      name: "Assist",
      data: [6.51, 7.12, 7.55, 7.65, 7.58, 7.28, 7.08, 7.05, 6.73]
    }
  ]
};

function StaticsTiersLeftBottom() {
  return (
    <div className="statics-tiers-content-left-bottom-Chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
export default withRouter(StaticsTiersLeftBottom);
