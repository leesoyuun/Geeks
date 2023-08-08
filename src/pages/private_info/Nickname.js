import React from 'react';
import TopBar from "../../components/header/Header";
import Circle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Nickname = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
           <Circle></Circle>
            <div className='email_text'>회원님을 표현할<br/>닉네임을 알려주세요!</div>
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