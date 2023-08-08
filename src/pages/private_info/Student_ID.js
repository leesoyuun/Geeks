import React from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";

const StudentID = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`몇 학번 이신가요?`}></NumberTitle>
            <div className='input_email'>
                <input type='number'/>
            </div>
            <div className='content'>
                <Button content='다음'></Button>
            </div>
        </div>
    )
}
export default StudentID;