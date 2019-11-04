import React from "react";
//import ArrowDefault from '../../../../../Img/default.png';

export default function StaticsListTitleBarContent(props) {
  return (
    <th>
      <div className={props.className}>
        <div>{props.title}</div>
        <img
          src={props.imgSrc}
          alt={""}
          onClick={props.onClick}
          name={props.className}
        />
      </div>
    </th>
  );
}
