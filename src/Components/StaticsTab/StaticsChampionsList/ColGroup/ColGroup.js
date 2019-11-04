import React from "react";
import "./ColGroup.scss";

export default function ColGroup() {
  return (
    <colgroup className="colgroup">
      <col className="rank"></col>
      <col className="champion"></col>
      <col className="win-rate"></col>
      <col className="play-count"></col>
      <col className="average-score"></col>
      <col className="cs-score"></col>
      <col className="gold-score"></col>
    </colgroup>
  );
}
