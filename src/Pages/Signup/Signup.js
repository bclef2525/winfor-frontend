import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: "",
      pwValue: "",
      nameValue: "",
      focus: false,
      focus2: false,
      focus3: false,
      idNotion: false,
      pwNotion: false,
      resp: "응없어"
    };
  }
  handleId = e => {
    this.setState(
      {
        idValue: e.target.value
      },
      () =>
        this.setState({
          idNotion: this.state.idValue.length < 5 ? true : false
        })
    );
  };

  handlePw = e => {
    this.setState(
      {
        pwValue: e.target.value
      },
      () =>
        this.setState({
          pwNotion: this.state.pwValue.length < 7 ? true : false
        })
    );
  };

  handleName = e => {
    this.setState({
      nameValue: e.target.value
    });
  };

  goToMain() {
    fetch("http://10.58.0.33:8000/account/signup", {
      method: "post",
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
        summoner_name: this.state.nameValue
      })
    })
      .then(function(res) {
        return res.json();
      })
      .then(res => {
        if (res.message === "EMAIL_ALREADY_EXISTS") {
          alert("이메일이 이미 존재합니다.");
        } else if (res.message === "SUMMONER_EXISTS") {
          alert("이미가입된 소환사이름입니다");
        } else if (res.message === "SUMMONER_NOT_FOUND") {
          alert("소환사이름이 존재하지않습니다");
        } else if (res.message === "SIGNUP_SUCCESS") {
          alert("회원가입을 축하드립니다!");
          this.props.history.push("/");
        } else if (res.mssage === "NOT_EMAIL") {
          alert("이메일 양식이 바르지않습니다!!");
        } else {
          alert("이메일 양식이 바르지않습니다!!");
        }
        console.log(res.message);
      });
  }

  focusAcitve = () => {
    this.setState({
      focus: true
    });
  };

  blurAcitve = () => {
    this.setState({
      focus: false
    });
  };

  focus2Acitve = () => {
    this.setState({
      focus2: true
    });
  };

  blur2Acitve = () => {
    this.setState({
      focus2: false
    });
  };

  focus3Acitve = () => {
    this.setState({
      focus3: true
    });
  };

  blur3Acitve = () => {
    this.setState({
      focus3: false
    });
  };

  render() {
    const {
      pwValue,
      idValue,
      nameValue,
      focus,
      focus2,
      focus3,
      idNotion,
      pwNotion
    } = this.state;
    console.log(this.state.resp.message);

    return (
      <div className="signup-body">
        <div className="signup-feed">
          <div className="signup-logo">Winfor.gg</div>
          <div className="signup-inputs">
            <div className="signup-title">기본정보입력</div>
            <div className="signup-sub">
              회원가입을 위해서 이메일 및 비밀번호 기재시, 신중히 작성해주세요.{" "}
              <br /> 한번 정한 이메일과 비밀번호는 변경하기 어렵습니다.
            </div>
            <div className="signup-inputSection">
              <div className={`signup-input-state-id${focus ? "-active" : ""}`}>
                <input
                  onChange={this.handleId}
                  onFocus={this.focusAcitve}
                  onBlur={this.blurAcitve}
                  id="signup-email"
                  className="signup-input-box"
                  type="text"
                  autoComplete="off"
                />
                <label
                  for="signup-email"
                  className={
                    idValue.length > 0
                      ? "signup-idInput-label-none"
                      : "signup-idInput-label"
                  }
                >
                  {" "}
                  이메일 주소
                </label>
              </div>

              <div
                className={
                  idNotion ? "signup-idNotion-active" : "signup-idNotion"
                }
              >
                {" "}
                이메일 양식에 맞춰 작성해주세요!{" "}
              </div>

              <div
                className={`signup-input-state-pw${focus2 ? "-active" : ""}`}
              >
                <input
                  onChange={this.handlePw}
                  onFocus={this.focus2Acitve}
                  onBlur={this.blur2Acitve}
                  id="signup-pw"
                  className="signup-input-box"
                  type="password"
                  autoComplete="off"
                />
                <label
                  for="signup-pw"
                  className={
                    pwValue.length > 0
                      ? "signup-pwInput-label-none"
                      : "signup-pwInput-label"
                  }
                >
                  {" "}
                  비밀번호
                </label>
              </div>
              <div
                className={
                  pwNotion ? "signup-pwNotion-active" : "signup-pwNotion"
                }
              >
                비밀번호 요구사항
                <br />
                <div className="signup-pwNotion-spec">
                  이메일 주소 혹은 닉네임을 포함하지 않음
                  <br />
                  특수문자 사용 불가
                  <br />
                  비밀번호 길이는 최소 6자 이상
                </div>
              </div>
              <div className="signup-warn">
                개인정보를 기입하여 발생될 수 있는 피해는 Winfor가 일절 책임지지
                않습니다.
              </div>
              <div
                className={`signup-input-state-name${focus3 ? "-active" : ""}`}
              >
                <input
                  onChange={this.handleName}
                  onFocus={this.focus3Acitve}
                  onBlur={this.blur3Acitve}
                  id="signup-name"
                  className="signup-input-box"
                  type="text"
                  autoComplete="off"
                />
                <label
                  for="signup-name"
                  className={
                    nameValue.length > 0
                      ? "signup-nameInput-label-none"
                      : "signup-nameInput-label"
                  }
                >
                  {" "}
                  Riot 소환사 이름
                </label>
              </div>
              <div className="signup-btns">
                <button
                  onClick={this.goToMain.bind(this)}
                  type="submit"
                  className="signup-btn btn-cancle"
                >
                  취소
                </button>
                <button
                  onClick={this.goToMain.bind(this)}
                  type="submit"
                  className={
                    idValue.length > 5 &&
                    pwValue.length > 6 &&
                    nameValue.length > 1
                      ? "signup-btn btn-signup-good"
                      : "signup-btn btn-signup"
                  }
                  disabled={
                    idValue.length > 5 &&
                    pwValue.length > 6 &&
                    nameValue.length > 1
                      ? ""
                      : "disabled"
                  }
                >
                  가입하기
                </button>
              </div>
              <div className="signup-already">
                이미 회원이신가요?
                <Link to="/Login" className="signup-login">
                  로그인하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
