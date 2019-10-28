import React, { Component } from 'react';
import "./Signup.scss";

export default class Signup extends Component {
    render() {
        return (
            <div className="signup-body">
                <div className="signup-feed">
                    <div className="signup-logo">winfor</div>
                    <div className="signup-inputs">
                        <div className="signup-title">기본정보입력</div>
                        <div className="signup-sub">
                        회원가입을 위해서 이메일 및 비밀번호 기재시, 신중히 작성해주세요. <br/> 한번 정한 이메일과 비밀번호는 변경하기 어렵습니다.
                        </div>
                        <div className="signup-inputsection">
                            <div className="signup-input-state">
                                <input id="signup-email" className="signup-input-box" type="text" autoComplete="off"/>
                                <label for="signup-email" className="signup-input-label"> 이메일 주소</label>
                            </div>
                            <div className="signup-input-state">
                                <input id="signup-pw" className="signup-input-box" type="text" autoComplete="off"/>
                                <label for="signup-pw" className="signup-input-label"> 비밀번호</label>
                            </div>
                            <div className="signup-warn">
                              개인정보를 기입하여 발생될 수 있는 피해는 Winfor가 일절 책임지지 않습니다.  
                            </div>
                            <div className="signup-btns">
                               <button type="submit" className="signup-btn btn-cancle">취소</button>
                               <button type="submit" className="signup-btn btn-signup">가입하기</button>
                            </div>
                            <div className="signup-already">이미 회원이신가요?  <a type="button" className="signup-login">로그인하기</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}