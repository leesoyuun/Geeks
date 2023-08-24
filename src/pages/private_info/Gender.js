import React, {useContext} from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import SelectBtn from "../../components/button/SelectGender";
import "./Gender.css"
import { UserContext } from "./Register";

const Gender = () => {
    const {setStep} = useContext(UserContext);
    
    const handleClick = () => {
        setStep(7);
    }

    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`성별을 알려주세요`} flag = {3}></NumberTitle>
            <div className='gender_select'>
                <SelectBtn gender={`남자`}></SelectBtn>
                <SelectBtn gender={`여자`}></SelectBtn>
            </div>
            <div className='content' onClick={handleClick}>
                <Button content={`다음`}></Button>
            </div>
        </div>
    );
};

export default Gender;