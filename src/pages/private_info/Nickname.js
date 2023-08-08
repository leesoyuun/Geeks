import React from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Nickname = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`회원님을 표현한\n 닉네임을 알려주세요!`}></NumberTitle>
            <div className='input_email'>
                <input type='number'/>
            </div>
            <div className='content'>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Nickname;