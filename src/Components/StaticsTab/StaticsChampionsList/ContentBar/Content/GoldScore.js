import React from "react";

export default function GoldScore(props) {
  return (
    <td>
      <div className={props.className}>
        <div
          className="gold-score-graph"
          style={{ width: (props.goldScore / 20000) * 100 + "%" }}
        ></div>
        <div className="gold-score-number">{props.goldScore}</div>
      </div>
    </td>
  );
}
