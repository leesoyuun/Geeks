import React, {useContext, useRef, useState} from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import './Email'
import './Nickname.css'
import {UserContext} from "./Register";

const Nickname = () => {
    const [NumCount, setNumCount] = useState(0);
    const {setNickname, setStep} = useContext(UserContext);
    let nickname;

    const handleChange = (event) => {
        nickname = event.target.value;

        if (nickname.length <= 8) {
            setNumCount(nickname.length);
        }
    };

    const handleClick = () => {
        setNickname(nickname);
        setStep(4);
    }

    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`회원님을 표현한\n 닉네임을 알려주세요!`} flag={2}></NumberTitle>
            <input className='input_nick' type='text'
                   maxLength="8" onChange={handleChange}/>
            <div className='nick_cnt'>{NumCount}/8</div>
            <div className='content' onClick={handleClick}>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Nickname;