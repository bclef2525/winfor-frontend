import React from "react";

export default function CsScore(props) {
  return (
    <td>
      <div className={props.className}>
        <div className="cs-score-maxGraph">
          <div
            className="cs-score-graph"
            style={{ width: (props.csScore / props.maxCsScore) * 100 + "%" }}
          ></div>
        </div>
        <div className="cs-score-number">{props.csScore}</div>
      </div>
    </td>
  );
}
