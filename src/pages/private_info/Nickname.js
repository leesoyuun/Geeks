import React, {useRef, useState} from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import './Email'
import './Nickname.css'

const Nickname = () => {
    const [NumCount, setNumCount] = useState(0);

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (newValue.length <= 8) {
            setNumCount(newValue.length);
        }
    };
    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`회원님을 표현한\n 닉네임을 알려주세요!`}></NumberTitle>
            <input className='input_nick' type='text'
                   maxLength="8" onChange={handleChange}/>
            <div className='nick_cnt'>{NumCount}/8</div>
            <div className='content'>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Nickname;