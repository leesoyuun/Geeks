import React, { useRef, useContext } from "react";
import { UserContext } from "./Register";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Department = () => {
  const majorRef = useRef("");
  const { setStep, setMajor } = useContext(UserContext);

  const handleClick = () => {
    setMajor(majorRef.current.value);
    setStep(6);
  };

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <TopBar></TopBar>
          <NumberTitle
            title={`전공 학과와 학번을 알려주세요`}
            flag={3}
          ></NumberTitle>
          <div className="input_infos">
            <input className="input_info_de" type="text" ref={majorRef} />
            <div className="univ">학과/전공</div>
          </div>
          <div className="input_infos_ID">
            <input className="input_info_ID" type="number" />
            <div className="univ">학번</div>
          </div>
        </div>
        <div className="private_bottom" onClick={handleClick}>
          <Button content="다음"></Button>
        </div>
      </div>
    </div>
  );
};
export default Department;
