import React from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Department = () => {
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`전공 학과와 학번을 알려주세요`} flag={3}></NumberTitle>
            <div className='input_infos'>
                <input className='input_info_de' type='text'/>
                <div className='univ'>학과/전공</div>
            </div>
            <div className='input_infos_ID'>
                <input className='input_info_ID' type='number'/>
                <div className='univ'>학번</div>
            </div>
            <div className='content'>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Department;