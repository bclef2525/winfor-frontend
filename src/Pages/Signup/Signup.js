import React, { Component } from 'react';
import "./Signup.scss";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            idValue:'',
            pwValue:'',
            buttonClass:"signup-btn btn-signup",
            idInputClass:"signup-input-state-id",
            pwInputClass:"signup-input-state-pw",
            idNotionClass:"signup-idNotion",
            pwNotionClass:"signup-pwNotion",
            IdLabelClass:"signup-idInput-label",
            PwLabelClass:"signup-pwInput-label",
            buttonDisabled:'disabled'
            //default 클래스로 해놓기

        }
    }    
    handleId=(e)=>{
        this.setState(
          {
            idValue: e.target.value
          },
          () =>
            this.setState({
              idNotionClass:
                this.state.idValue.length < 5
                  ? "signup-idNotion-active"
                  : "signup-idNotion"
            })
        );
      }
    handlePw=(e)=>{
        this.setState(
          {
            pwValue: e.target.value
          },
          () =>
            this.setState({
              pwNotionClass:
                this.state.pwValue.length > 6
                  ? "signup-pwNotion"
                  : "signup-pwNotion-active"
            })
        );
    }

    

    goToMain() {
      this.props.history.push('/');
    }

    render() {
      
      const { pwValue } = this.state;
      const { idValue } = this.state;

        return (
          <div className="signup-body">
            <div className="signup-feed">
              <div className="signup-logo">winfor</div>
              <div className="signup-inputs">
                <div className="signup-title">기본정보입력</div>
                <div className="signup-sub">
                  회원가입을 위해서 이메일 및 비밀번호 기재시, 신중히
                  작성해주세요. <br /> 한번 정한 이메일과 비밀번호는 변경하기
                  어렵습니다.
                </div>
                <div className="signup-inputSection">
                  <div className={this.state.idInputClass}>
                    <input
                      onChange={this.handleId}
                      onFocus={() => {
                        this.setState({
                          idInputClass: "signup-input-state-id-active"
                        });
                      }}
                      onBlur={() => {
                        this.setState({
                          idInputClass: "signup-input-state-id"
                        });
                      }}
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
                  <div className={this.state.idNotionClass}>
                    {" "}
                    이메일 양식에 맞춰 작성해주세요!{" "}
                  </div>

                  <div className={this.state.pwInputClass}>
                    <input
                      onChange={this.handlePw}
                      onFocus={() => {
                        this.setState({
                          pwInputClass: "signup-input-state-pw-active"
                        });
                      }}
                      onBlur={() => {
                        this.setState({
                          pwInputClass: "signup-input-state-pw"
                        });
                      }}
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
                  <div className={this.state.pwNotionClass}>
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
                    개인정보를 기입하여 발생될 수 있는 피해는 Winfor가 일절
                    책임지지 않습니다.
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
                        idValue.length > 5 && pwValue.length > 6
                          ? "signup-btn btn-signup-good"
                          : "signup-btn btn-signup"
                      }
                      disabled={
                        idValue.length > 5 && pwValue.length > 6
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

// 이메일 정규식 조건 기능
// 라우터
// (취소) - 메인으로이동 
// (가입하기) - 로그인된 상태로 메인으로 이동
