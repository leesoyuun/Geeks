import React, {useRef, useState, useContext} from "react";
import { UserContext } from "./Register";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import "./Email.css";

const Email = () => {
    const emailRef = useRef('');
    const {setStep, setEmail, setNickname} = useContext(UserContext);

    const handleClick = (e) => {
        setEmail(emailRef.current.value + "@sangmyung.kr");
        setStep(2);
    };

    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`재학생 인증을 위해\n 학교 이메일 주소를 입력해 주세요.`}></NumberTitle>
            <div className='input_infos'>
                <input className='input_info' type='number' ref={emailRef}/>
                <div className='univ'>@sangmyung.kr</div>
            </div>
            <div className='content' onClick={(e) => handleClick(e)}>
                <Button classname='test' content='인증 메일 받기'></Button>
            </div>
        </div>
    );
};

export default Email;