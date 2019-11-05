import React from "react";
import "./ChampionCard.scss";

export default function ChampionCard() {
  return (
    <div className="championCardBox">
      <div className="championCardContent">
        <div className="championCardImg">
          <img
            src={
              "https://static1.i4u.com/sites/default/files/imagecache/main_image_google_topstories1x1/images/2019/09/leagueoflegends-louis-vuitton.jpg"
            }
            alt="hi"
          />
        </div>
        <div className="championCardTitle">Champion Name</div>
        <div className="championCardDescription">Champion Description</div>
      </div>
    </div>
  );
}
