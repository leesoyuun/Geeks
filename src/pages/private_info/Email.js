import React, { useRef, useState, useContext, useEffect } from "react";
import { UserContext } from "./Register";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import axios from "axios";
import "./Email.css";

const Email = () => {
  const emailRef = useRef("");
  const { setStep, setEmail, setNickname } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    const newEmail = emailRef.current.value + "@sangmyung.kr";

    async function fetchEmail() {
      try {
        console.log(newEmail);
        const res = await axios.post("http://127.0.0.1:8080/email/sendcode", {
          Email: newEmail,
        });
      } catch (error) {
        console.error(error);
      }
    }

    setEmail(emailRef.current.value + "@sangmyung.kr");
    setStep(2);

    fetchEmail();
  };

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <TopBar></TopBar>
          <NumberTitle
            title={`재학생 인증을 위해\n 학교 이메일 주소를 입력해 주세요.`}
            flag={1}
          ></NumberTitle>
          <div className="input_infos">
            <input className="input_info" type="number" ref={emailRef} />
            <div className="univ">@sangmyung.kr</div>
          </div>
        </div>
        <div className="private_bottom">
          <div onClick={(e) => handleClick(e)}>
            <Button content="인증 메일 받기"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
