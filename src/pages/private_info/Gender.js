import React, {useContext} from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import SelectBtn from "../../components/button/SelectGender";
import "./Gender.css"
import { UserContext } from "./Register";

const Gender = () => {


    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`성별을 알려주세요`} flag = {3}></NumberTitle>
            <div className='gender_select'>
                <SelectBtn className='male' gender={`남자`}></SelectBtn>
                <SelectBtn className='female' gender={`여자`}></SelectBtn>
            </div>
            <Button content={`다음`}></Button>
        </div>
    );
};

export default Gender;