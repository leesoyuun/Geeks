import React, {useRef, useState, useContext, useEffect} from "react";
import { UserContext } from "./Register";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import './LiveNumber.css';
const LiveNumber = () => {
    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`기숙사를 몇 번 생활해 보셨나요?`} flag = {3}></NumberTitle>
            <div className='input_info2'>
                <input className='livenumber' type='number'/>
            </div>
            <div className='content'>
                <Button content='인증 메일 받기'></Button>
            </div>
        </div>
    );
};

export default LiveNumber;