import React, {useContext, useEffect, useRef, useState} from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import './Email'
import './Nickname.css'
import {UserContext} from "./Register";
import axios from 'axios';

const Nickname = () => {
    const [NumCount, setNumCount] = useState(0);
    const [name, setName] = useState(""); 
    const [success, setSuccess] = useState(false);

    const {setNickname, setStep} = useContext(UserContext);

    useEffect(() => {
        if(success) { // success 가 true 이면 닉네임 중복 X
            setNickname(name); // nickname을 설정
            setStep(4); // Showname 페이지로 넘어감
        }      
    }, [success]); // success가 바뀌면 실행

    const handleChange = (event) => {
        setName(event.target.value);

        if (event.target.value.length <= 8) {
            setNumCount(event.target.value.length);
        }
    };

    const handleClick = () => {
        async function fetchNickname() {

            try {
                const res = await axios.get('http://127.0.0.1:8080/member/nicknameCheck?nickname=' + name);

                // 닉네임이 중복 되지 않으면 success를 true로 바꿈 -> 이후 설명은 17줄로 이동
                if(res.status === 200){ 
                    setSuccess(true);
                }
            } catch (error) {
                console.error(error);

                if (error.response.status === 412) { // 닉네임이 중복되면 백에서 412 코드 반환
                    alert("닉네임 중복");
                }
            }
        }

        fetchNickname();
    }

    return (
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`회원님을 표현한\n 닉네임을 알려주세요!`} flag={2}></NumberTitle>
            <input className='input_nick' type='text'
                   maxLength="8" onChange={handleChange}/>
            <div className='nick_cnt'>{NumCount}/8</div>
            <div className='content' onClick={handleClick}>
                <Button content='다음'></Button>
            </div>
        </div>
    );
}
export default Nickname;