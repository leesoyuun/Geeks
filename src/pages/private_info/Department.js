import React from 'react';
import TopBar from "../../components/header/Header";
import Circle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Department = () => {
    return(
        <div>
            <TopBar></TopBar>
            <div className='main'>
                <Circle></Circle>
                <div className='email_text'>어느 과 이신가요?</div>
                <div className='input_email'>
                    <input type='number'/>
                </div>
                <div className='content'>
                    <Button content='다음'></Button>
                </div>
            </div>
        </div>
    );
}
export default Department;