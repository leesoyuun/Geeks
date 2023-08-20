import React from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import SelectBtnSmoke from "../../components/button/SelectSmoke";
import "./SmokingStat.css"

const SmokingStat = () => {


    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`흡연자 이신가요?`} flag = {3}></NumberTitle>
            <div className='gender_select'>
                <SelectBtnSmoke smokestat={`네`}></SelectBtnSmoke>
                <SelectBtnSmoke smokestat={`아니요`}></SelectBtnSmoke>
            </div>
            <div className='content'>
                <Button content={`다음`}></Button>
            </div>
        </div>
    );
};

export default SmokingStat;