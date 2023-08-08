import React from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Department = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`어느 과 이신가요?`}></NumberTitle>
            <div className='input_email'>
                <input type='number'/>
            </div>
            <div className='content'>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Department;