import React from "react";
import "./ChampionCard.scss";

export default function ChampionCard(props) {
  return (
    <div className={`championCardBox ${props.focusStatus}`}>
      <div className="championCardContent">
        <div
          className="championCardImg"
          style={{ backgroundImage: `url(${props.championCardImgSrc}` }}
        >
          <div className="championCardTextBox">
            <div className="championCardTitle">{props.championTitle}</div>
            <div className="championCardSubTitle">{props.championSubTitle}</div>
            <div className="championCardDescription">{props.championDesc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
