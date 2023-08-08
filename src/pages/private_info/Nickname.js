import React from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import './Nickname.css'

const Nickname = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`회원님을 표현한\n 닉네임을 알려주세요!`}></NumberTitle>
            <input className='input_nick' type='text'/>
            <div className='content'>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Nickname;