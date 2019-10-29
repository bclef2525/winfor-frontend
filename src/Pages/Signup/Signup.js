import React, { Component } from 'react';
import "./Signup.scss";
import { Link } from 'react-router-dom';


export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            idValue:'',
            pwValue:'',
            buttonClass:"signup-btn btn-signup"
        }
    }    
    handleId=(e)=>{
        this.setState({
            idValue:e.target.value
        }, ()=> this.setState({buttonClass:this.state.idValue.length > 5 && this.state.pwValue.length > 5 ? "signup-btn btn-signup-good" : "signup-btn btn-signup"}
        ), ()=> this.setState()
        )
        console.log(this.state.idValue.length)
    }
    handlePw=(e)=>{
        this.setState({
            pwValue : e.target.value
        }, ()=> this.setState({buttonClass:this.state.idValue.length > 5 && this.state.pwValue.length > 5 ? "signup-btn btn-signup-good" : "signup-btn btn-signup"}
        ))
       
        console.log(this.state)
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
                <div className="signup-inputsection">
                  <div className="signup-input-state">
                    <input
                    onChange={this.handleId}
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
                  
                  <div className="signup-input-state">
                    <input
                    onChange={this.handlePw}
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

// 인풋 클릭시 라벨, 보더 파란색.
// 인풋 조건 미달시 밑에 display:hidden , color:red 된 div 나타나게하기.

// 인풋 onclick시 label 위로,작게,파란색 / border 파란색 < 배우기
// 버튼 (취소) 온클릭 - 메인으로이동 <라우터
//     (가입하기) 온클릭 - 로그인된 상태로 메인으로 이동
