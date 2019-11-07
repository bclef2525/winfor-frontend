import React from "react";
import Flickity from "react-flickity-component";
import "./ChampionCard.scss";
import "../../Styles/flickity.css";

export default function ChampionCard(props) {
  return (
    <div className={`championCardBox ${props.focusStatus}`}>
      <div className="championCardContent">
        <Flickity
          className="championCard-flickity"
          options={{
            wrapAround: true
          }}
        >
          {props.championCardImgSrc.map((el, id) => {
            let _skinImgArr = [];
            if (el.length !== 0) {
              _skinImgArr.push(<img src={el} alt="hi" key={id} />);
            }
            return _skinImgArr;
          })}
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
