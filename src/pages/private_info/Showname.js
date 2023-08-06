import React from 'react';
import TopBar from "../../components/header/Header";
import Circle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Showname = () => {
    return(
        <div>
            <TopBar></TopBar>
            <div className='main'>
                <Circle></Circle>
                <div className='email_text'>소윤 님 반가워요!<br/><br/>
                기숙사 생활을 위한 <br/>몇가지만 여쭤볼게요.
                </div>
                <div className='content'>
                    <Button content='다음'></Button>
                </div>
            </div>
        </div>
    )
}
export default Showname;