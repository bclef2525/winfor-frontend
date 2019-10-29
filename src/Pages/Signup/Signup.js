import React, { Component } from 'react';
import "./Signup.scss";
import { Link } from 'react-router-dom';


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

        }
    }    
    handleId=(e)=>{
        this.setState({
            idValue:e.target.value
        }, ()=> this.setState({buttonClass:this.state.idValue.length > 5 && this.state.pwValue.length > 6 ? "signup-btn btn-signup-good" : "signup-btn btn-signup"},
                              ()=> this.setState({idNotionClass:this.state.idValue.length < 5 ? "signup-idNotion-active" : "signup-idNotion"}))
        )
        

        
    }
    handlePw=(e)=>{
        this.setState({
            pwValue : e.target.value
        }, ()=> this.setState({buttonClass:this.state.idValue.length > 5 && this.state.pwValue.length > 6 ? "signup-btn btn-signup-good" : "signup-btn btn-signup"},
                              ()=> this.setState({pwNotionClass:this.state.pwValue.length < 6 ? "signup-pwNotion-active" : "signup-pwNotion"}))
        )
        
    }

    handleIdInput=(e)=>{
        this.setState({idInputClass:"signup-input-state-id-active"})
    }

    handleIdInput2=(e)=>{
        this.setState({idInputClass:"signup-input-state-id"})
    }

    handlePwInput=(e)=>{
        this.setState({pwInputClass:"signup-input-state-pw-active"})
    }

    handlePwInput2=(e)=>{
        this.setState({pwInputClass:"signup-input-state-pw"})
    }

    render() {
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
                    onChange={this.handleId} onFocus={this.handleIdInput} onBlur={this.handleIdInput2}
                      id="signup-email"
                      className="signup-input-box"
                      type="text"
                      autoComplete="off"
                    />
                    <label for="signup-email" className="signup-input-label">
                      {" "}
                      이메일 주소
                    </label>
                  </div>
                  <div className={this.state.idNotionClass}> 이메일 길이는 최소 5자이상 </div>
                  
                  <div className={this.state.pwInputClass}>
                    <input
                    onChange={this.handlePw} onFocus={this.handlePwInput} onBlur={this.handlePwInput2}
                      id="signup-pw"
                      className="signup-input-box"
                      type="password"
                      autoComplete="off"
                    />
                    <label for="signup-pw" className="signup-input-label">
                      {" "}
                      비밀번호
                    </label>
                  </div>
                  <div className={this.state.pwNotionClass}>
                      비밀번호 요구사항<br/>
                      <div className="signup-pwNotion-spec">
                          이메일 주소 혹은 닉네임을 포함하지 않음<br/>
                          특수문자 사용 불가<br/>
                          비밀번호 길이는 최소 6자 이상
                      </div>

                  </div>
                  <div className="signup-warn">
                    개인정보를 기입하여 발생될 수 있는 피해는 Winfor가 일절
                    책임지지 않습니다.
                  </div>
                  <div className="signup-btns">
                    <button type="submit" className="signup-btn btn-cancle">
                      취소
                    </button>
                    <button type="submit" className={this.state.buttonClass}>
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

// 인풋 클릭시 라벨 파란색,위로,작게

// 버튼 (취소) 온클릭 - 메인으로이동 <라우터
//     (가입하기) 온클릭 - 로그인된 상태로 메인으로 이동
