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
        <div className="auto-complete">
          <div
            className="ac-img"
            style={{ backgroundImage: this.props.image }}
          ></div>
          <div className="ac-name-container">
            <div className="ac-name">{this.props.name}</div>
            <div className="ac-level">
              {this.props.level}
              <div className="ac-lp">-{this.props.lp}LP</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AutoComplete;
