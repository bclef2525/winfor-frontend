import React from "react";

export default function WinRate(props) {
  return (
    <td>
      <div className={props.className}>
        <div className="winRate-graph-maxGraph">
          <div
            className="winRate-graph"
            style={{ width: props.winRate + "%" }}
          ></div>
        </div>
        <div className="winRate-number">{props.winRate + "%"}</div>
      </div>
    </td>
  );
}
