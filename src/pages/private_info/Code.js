import React, { useRef, useState, useContext } from "react";
import { UserContext } from "./Register";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import axios from "axios";
import "./Code.css";

const Code = () => {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [name, setName] = useState('gray_btn_color');
  const { email, setStep } = useContext(UserContext);
  let num = "";

  const checkCode = () => {
    async function fetchEmail() {
      console.log(email);
      try {
        const res = await axios.post("http://127.0.0.1:8080/email/checkcode", {
          Email: email,
          num: num,
        });

        if (res.data.success) {
          setStep(3);
        } else {
          console.log(res);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmail();
  };

  const handleInputChange = (index, event) => {
    const nextIndex = index + 1;

    num += event.target.value;

    if (event.target.value.length === 1 && nextIndex < inputRefs.length) {
      inputRefs[nextIndex].current.focus();
    }

    if (num.length == 4) {
      checkCode();
      setName('yellow_btn_color')
    } else{
        setName('gray_btn_color')
    }
  };
  const clickbtn = () => {
    setStep(3);
  };

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <TopBar></TopBar>
          <NumberTitle
            title={`수신된 메일에 적힌\n4자리 코드를 입력해 주세요.`}
            flag={1}></NumberTitle>
          <div className="email_send">
            <div className="email_send_txt">메일이 도착하지 않았나요?</div>
            <button className="email_resend">인증 메일 재전송</button>
          </div>
          <div className="input_code">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref}
                className="code"
                type="number"
                maxLength={1}
                onChange={(e) => handleInputChange(index, e)}
              />
            ))}
          </div>
        </div>
        <div className="private_bottom">
          <div onClick={clickbtn}>
            <Button content="코드 확인하기" name={name}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Code;
