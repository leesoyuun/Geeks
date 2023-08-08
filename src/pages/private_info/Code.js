import React from "react";
import TopBar from "../../components/header/Header";
import Circle from "../../components/number/Number";
import Button from "../../components/button/Button";
import "./Code.css";

const Code = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
            <Circle>1</Circle>
            <div className='email_text'>수신된 메일에 적힌<br/>4자리 코드를 입력해 주세요.</div>
            <div className='email_send'>
                <div className='email_send_txt'>메일이 도착하지 않았나요?</div>
                <button className='email_resend'>인증 메일 재전송</button>
            </div>
            <div className='input_email'>
                <input type='number'/>
            </div>
            <div className='content'>
                <Button content='코드 확인하기'></Button>
            </div>
        </div>
    );
}
export default Code;