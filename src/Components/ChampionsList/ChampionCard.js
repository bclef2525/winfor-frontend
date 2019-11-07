import React from "react";
import Flickity from "react-flickity-component";
import "./ChampionCard.scss";
import "../../../node_modules/flickity/css/flickity.css";

export default function ChampionCard(props) {
  return (
    <div className={`championCardBox ${props.focusStatus}`}>
      <div className="championCardContent">
        <Flickity className="championCard-flickity">
          <img src={props.championCardImgSrc} alt="hi" />
          <img src={props.championCardImgSrc} alt="hi" />
        </Flickity>
        <div className="championCardTextBox">
          <div className="championCardTitle">{props.championTitle}</div>
          <img
            src="https://universe.leagueoflegends.com/images/t1HeaderDivider.png"
            alt="titleUnderBar"
          />
          <div className="championCardSubTitle">{props.championSubTitle}</div>
          <div className="championCardDescription">{props.championDesc}</div>
        </div>
      </div>
    </div>
  );
}
