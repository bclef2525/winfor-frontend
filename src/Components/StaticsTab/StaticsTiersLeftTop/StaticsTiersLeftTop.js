import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./StaticsTiersLeftTop.scss";

const options = {
  chart: {
    type: "column",
    backgroundColor: "#fff"
  },
  title: {
    style: {
      color: "black",
      textTransform: "uppercase",
      fontSize: "20px"
    },
    text: "티어 점유율 막대 그래프"
  },
  subtitle: {
    style: {
      color: "#E0E0E3",
      textTransform: "uppercase"
    }
  },
  xAxis: {
    gridLineColor: "#707073",
    labels: {
      style: {
        color: "black"
      }
    },
    lineColor: "#707073",
    minorGridLineColor: "#505053",
    tickColor: "#707073",
    title: {
      style: {
        color: "#A0A0A3"
      }
    },

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
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: "점유율"
    },
    stackLabels: {
      enabled: true,
      formatter: function() {
        return this.total + "%";
      }

      //   formatter: function() {
      //     let result = 0;
      //     for (let i = 0; i < options.series[i].data[i].length; i++) {
      //       for (let j = 0; j < options.series.length; j++) {
      //         result = result + parseFloat(options.series[j].data[i]);
      //       }
      //       return result;
      //       result = 0;
      //     }
    },
    gridLineColor: "#909090",
    labels: {
      style: {
        color: "black"
      }
    },
    lineColor: "#707073",
    minorGridLineColor: "#505053",
    tickColor: "#707073",
    tickWidth: 1,

    style: {
      fontWeight: "bold",
      color:
        // theme
        (Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color) ||
        "gray"
    }
  },

  legend: {
    align: "right",
    x: 0,
    verticalAlign: "top",
    y: 40,
    floating: true,
    font: "bold",

    borderColor: "#333333",
    color: "white",
    borderWidth: 0,
    shadow: false,
    backgroundColor: "#fff",
    itemStyle: {
      color: "black"
    },
    itemHoverStyle: {
      color: "#FFF"
    },
    itemHiddenStyle: {
      color: "#606063"
    },
    title: {
      style: {
        color: "#C0C0C0"
      }
    }
  },
  credits: {
    style: {
      color: "#666"
    }
  },
  labels: {
    style: {
      color: "#707073"
    }
  },
  drilldown: {
    activeAxisLabelStyle: {
      color: "#F0F0F3"
    },
    activeDataLabelStyle: {
      color: "#F0F0F3"
    }
  },
  navigation: {
    buttonOptions: {
      symbolStroke: "#DDDDDD",
      theme: {
        fill: "#505053"
      }
    }
  },
  rangeSelector: {
    buttonTheme: {
      fill: "#505053",
      stroke: "#000000",
      style: {
        color: "#CCC"
      },
      states: {
        hover: {
          fill: "#707073",
          stroke: "#000000",
          style: {
            color: "white"
          }
        },
        select: {
          fill: "#000003",
          stroke: "#000000",
          style: {
            color: "white"
          }
        }
      }
    },
    inputBoxBorderColor: "#505053",
    inputStyle: {
      backgroundColor: "#333",
      color: "silver"
    },
    labelStyle: {
      color: "silver"
    }
  },
  navigator: {
    handles: {
      backgroundColor: "#666",
      borderColor: "#AAA"
    },
    outlineColor: "#CCC",
    maskFill: "rgba(255,255,255,0.1)",
    series: {
      color: "#7798BF",
      lineColor: "#A6C7ED"
    },
    xAxis: {
      gridLineColor: "#505053"
    }
  },
  scrollbar: {
    barBackgroundColor: "#808083",
    barBorderColor: "#808083",
    buttonArrowColor: "#CCC",
    buttonBackgroundColor: "#606063",
    buttonBorderColor: "#606063",
    rifleColor: "#FFF",
    trackBackgroundColor: "#404043",
    trackBorderColor: "#404043"
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    style: {
      color: "#F0F0F0"
    }
  },
  plotOptions: {
    column: {
      stacking: "nomal",
      dataLabels: {
        enabled: true,
        format: "{point.y:.1f}%"
      }
    },
    series: {
      dataLabels: {
        color: "#F0F0F3",
        style: {
          fontSize: "13px"
        }
      },
      marker: {
        lineColor: "#333"
      }
    },
    boxplot: {
      fillColor: "#505053"
    },
    candlestick: {
      lineColor: "white"
    },
    errorbar: {
      color: "white"
    }
  },
  series: [
    {
      name: "IV",
      data: [0.03, 1.63, 8.5, 15.24, 9.61, 2.55, 0, 0, 0],
      color: "#34B9EB"
    },
    {
      name: "III",
      data: [0.2, 2.12, 6.87, 8.64, 3.41, 0.85, 0, 0, 0],
      color: "#32E8D5"
    },
    {
      name: "II",
      data: [0.44, 3.33, 8.15, 7.21, 2.1, 0.39, 0, 0, 0],
      color: "#AAEE65"
    },
    {
      name: "I",
      data: [0.66, 4.97, 6.62, 4.36, 1.85, 0.17, 0.05, 0.02, 0.01],
      color: "#FBDF72"
    }
  ]
};

export default class StaticsTiersLeftTop extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="statics-tiers-content-left-top-Chart">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
