import React, {useState} from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import './LiveNumber.css';
const LiveNumber = () => {
    const [checknum, setchecknum] = useState('');
    const checkNum = (e) => {
        const value = e.target.value;

        if (/^\d{0,2}$/.test(value)) {
            setchecknum(value);
        }
    }
    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`기숙사를 몇 번 생활해 보셨나요?`} flag = {3}></NumberTitle>
            <div className='livenumbers'>
                <input className='livenumber' type='number'
                       value={checknum}
                       onChange={checkNum}/>
            </div>
            <div className='content'>
                <Button content='인증 메일 받기'></Button>
            </div>
        </div>
    );
};

export default LiveNumber;