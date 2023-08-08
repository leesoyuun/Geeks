import React,  { useState } from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import "./Email.css";
const Email = () => {
    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`재학생 인증을 위해\n 학교 이메일 주소를 입력해 주세요.`}></NumberTitle>
            <div className='input_emails'>
                <input className='input_email' type='number'/>
                <div className='univ'>@sangmyung.kr</div>
            </div>
            <div className='content'>
                <Button content='인증 메일 받기'></Button>
            </div>
        </div>
    );
};

export default Email;