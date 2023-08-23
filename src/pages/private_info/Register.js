import React, {createContext, useState, useMemo, useEffect, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Email from "./Email";
import Nickname from "./Nickname";
import Code from './Code';
import Gender from './Gender';
import axios from "axios";
import Showname from './Showname';
import Department from './Department';
import SmokingStat from './SmokingStat';
import LiveNumber from './LiveNumber';
import MoreInfo from './MoreInfo';

export const UserContext = createContext({
    email: null,
    nickname: "",
    step: 1,
    gender: null,
    exp: null,
    smoking: null,
    major: "",
    setStep: () => {},
    setEmail: () => {},
    setNickname: () => {},
    setGender: () => {},
    setExp: () => {},
    setSmoking: () => {},
    setMajor: () => {}
});

const Register = () => {
    const [email, setEmail] = useState(null);
    const [nickname, setNickname] = useState("");
    const [step, setStep] = useState(3);
    const [gender, setGender] = useState(null);
    const [major, setMajor] = useState("");
    const [exp, setExp] = useState(null);
    const [smoking, setSmoking] = useState(null);

    const navigate = useNavigate();

    const value = useMemo(() => ({email, nickname, step, gender, exp, smoking, major, setStep, setEmail, setNickname, setGender, setExp, setSmoking, setMajor}),
        [email, nickname, step, gender, exp, smoking, major, setStep, setEmail, setNickname, setGender, setExp, setSmoking, setMajor]);

    useEffect(() => {
        if (step === 9) { // step 바꾸기
            console.log("axios run");

            async function fetchData() {
                try {
                    const res = await axios.post('http://127.0.0.1:8080/member/register', {
                        email: "201920990@sangmyung.kr",
                        major: major,
                        nickname: nickname,
                        gender: gender,
                        exp: exp,
                        smoking: smoking
                        //exp, smoking 추가하기
                    });

                    console.log(res);
                    //navigate('/MoreInfo');
                    setStep(10);
                } catch (error) {
                    console.error(error);
                }
            }

            fetchData();

        }


    }, [step])

    return (
        <UserContext.Provider value={value}>
            {step === 1 ? <Email></Email> : null}
            {step === 2 ? <Code></Code> : null}
            {step === 3 ? <Nickname></Nickname> : null}
            {step === 4 ? <Showname></Showname> : null}
            {step === 5 ? <Department></Department> : null}
            {step === 6 ? <Gender></Gender> : null}
            {step === 7 ? <LiveNumber></LiveNumber> : null}
            {step === 8 ? <SmokingStat></SmokingStat> : null}
            {step === 10 ? <MoreInfo></MoreInfo> : null}
        </UserContext.Provider>
    );
};

export default Register;