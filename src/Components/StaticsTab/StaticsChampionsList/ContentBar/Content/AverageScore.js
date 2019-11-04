import React from "react";

export default function AverageScore(props) {
  return (
    <td>
      <div className={props.className}>{props.averageScore + ":1"}</div>
    </td>
  );
}
