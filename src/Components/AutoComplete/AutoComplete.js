import React, { Component } from "react";
import "./AutoComplete.scss";
export class AutoComplete extends Component {
  render() {
    // const handleAC = () => {
    //   for (let i = 0; i < this.props.name.length; i++) {
    //     if (
    //       this.props.name.slice(0, i + 1) ===
    //       this.props.nameValue.slice(0, i + 1)
    //     ) {
    //       console.log(
    //         this.props.name.slice(0, i + 1),
    //         this.props.nameValue.slice(0, i + 1)
    //       );
    //       return "auto-complete";
    //     }
    //     if (
    //       this.props.name.slice(0, i + 1) !==
    //       this.props.nameValue.slice(0, i + 1)
    //     ) {
    //       console.log(this.props.name[i], this.props.nameValue);
    //       return "auto-complete-off";
    //     }
    //   }
    // };

    return (
      <>
        <div
          onClick={() => {
            this.props.handleMatchList(this.props.id);
          }}
          className="auto-complete"
        >
          <div
            className="ac-img"
            style={{ backgroundImage: `url(${this.props.image})` }}
          ></div>
          <div className="ac-name-container">
            <div className="ac-name">{this.props.name}</div>
          </div>
        </div>
      </>
    );
  }
}

export default AutoComplete;
