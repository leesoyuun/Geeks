import React, {useRef} from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import "./Code.css";

const Code = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleInputChange = (index, event) => {
        const nextIndex = index + 1;

        if (event.target.value.length === 1 && nextIndex < inputRefs.length) {
            inputRefs[nextIndex].current.focus();
        }
    };
    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`수신된 메일에 적힌\n4자리 코드를 입력해 주세요.`}></NumberTitle>
            <div className='email_send'>
                <div className='email_send_txt'>메일이 도착하지 않았나요?</div>
                <button className='email_resend'>인증 메일 재전송</button>
            </div>
            <div className='input_code'>
                {inputRefs.map((ref, index) => (
                    <input
                        key={index}
                        ref={ref}
                        className='code'
                        type='number'
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e)}
                    />
                ))}
            </div>
            <div className='content'>
                <Button content='코드 확인하기'></Button>
            </div>
        </div>
    );
}
export default Code;