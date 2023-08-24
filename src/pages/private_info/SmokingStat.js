import React, { useContext, useState } from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import SelectBtnSmoke from "../../components/button/SelectSmoke";
import "./SmokingStat.css";
import { UserContext } from "./Register";

const SmokingStat = () => {
  const { setStep } = useContext(UserContext);
  const [buttonColor, setButtonColor] = useState('gray_btn_color')

  const handleClick = () => {
    setStep(9);
  };

  const changebtn = () => {
    setButtonColor('yellow_btn_color')
  }

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <TopBar></TopBar>
          <NumberTitle title={`흡연자 이신가요?`} flag={3}></NumberTitle>
          <div className="gender_select" onClick={changebtn}>
            <SelectBtnSmoke smokestat={`네`}></SelectBtnSmoke>
            <SelectBtnSmoke smokestat={`아니요`}></SelectBtnSmoke>
          </div>
        </div>
        <div className="private_bottom" onClick={handleClick}>
          <Button content={`다음`} name={buttonColor}></Button>
        </div>
      </div>
    </div>
  );
};

export default SmokingStat;
