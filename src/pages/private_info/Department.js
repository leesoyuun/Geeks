import React, { useRef, useContext, useState } from "react";
import { UserContext } from "./Register";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";

const Department = () => {
  const majorRef = useRef("");
  const student_ID = useRef("");
  const { setStep, setMajor } = useContext(UserContext);
  const [buttonColor, setButtonColor] = useState('gray_btn_color');

  const handleClick = () => {
    setMajor(majorRef.current.value);
    setStep(6);
  };

  const inputValue = (e) =>{
    const major_value = majorRef.current.value;
    const student_id = student_ID.current.value;
    (major_value.length > 1 && student_id.length > 1) ? setButtonColor('yellow_btn_color') : setButtonColor('gray_btn_color')
  }

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
            <input className="input_info_de" type="text" ref={majorRef} onChange={inputValue}/>
            <div className="univ">학과/전공</div>
          </div>
          <div className="input_infos_ID">
            <input className="input_info_ID" type="number" ref={student_ID} onChange={inputValue}/>
            <div className="univ">학번</div>
          </div>
        </div>
        <div className="private_bottom" onClick={handleClick}>
          <Button content="다음" name={buttonColor}></Button>
        </div>
      </div>
    </div>
  );
};
export default Department;
