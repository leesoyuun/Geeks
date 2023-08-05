import React from "react";
import TopBar from "../../components/header/Header";
import Circle from "../../components/number/Number";
import Button from "../../components/button/Button";
import "./Email.css";
const Email = () => {
    return (
        <div>
            <TopBar></TopBar>
            <div className='main'>
                <Circle>1</Circle>
                <div className='email_text'>재학생 인증을 위해<br/>학교 이메일 주소를 입력해 주세요.</div>
                <div className='input_email'>
                    <input type='number'/>
                </div>
                <div className='content'>
                    <Button content='인증 메일 받기'></Button>
                </div>
            </div>
        </div>
    );
};

export default Email;