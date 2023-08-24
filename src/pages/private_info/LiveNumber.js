import React, { useState, useContext } from "react";
import { UserContext } from "./Register";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import "./LiveNumber.css";

const LiveNumber = () => {
  const [checknum, setchecknum] = useState("");
  const [buttonColor, setButtonColor] = useState('gray_btn_color');
  const { setExp, setStep } = useContext(UserContext);

  const checkNum = (e) => {
    const value = e.target.value;

    if (/^\d{0,2}$/.test(value)) {
      setchecknum(value);
    }

    value > 0 ? setButtonColor('yellow_btn_color') : setButtonColor('gray_btn_color');
  };

  const handleClick = () => {
    setExp(checknum);
    setStep(8);
  };

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <TopBar></TopBar>
          <NumberTitle
            title={`기숙사를 몇 번 생활해 보셨나요?`}
            flag={3}
          ></NumberTitle>
          <div className="livenumbers">
            <input
              className="livenumber"
              type="number"
              value={checknum}
              onChange={checkNum}
            />
          </div>
        </div>
        <div className="private_bottom" onClick={handleClick}>
          <Button content="인증 메일 받기" name={buttonColor}></Button>
        </div>
      </div>
    </div>
  );
};

export default LiveNumber;
