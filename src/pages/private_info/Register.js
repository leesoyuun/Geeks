import React, {createContext, useState, useMemo, useEffect} from 'react';
import Email from "./Email";
import Nickname from "./Nickname";
import Code from './Code';
import Gender from './Gender';
import axios from "axios";
import Showname from './Showname';
import Department from './Department';

export const UserContext = createContext({
    email: null,
    nickname: "",
    step: 1,
    gender: null,
    setStep: () => {},
    setEmail: () => {},
    setNickname: () => {},
    setGender: () => {}
});

const Register = () => {
    const [email, setEmail] = useState(null);
    const [nickname, setNickname] = useState("");
<<<<<<< Updated upstream
    const [step, setStep] = useState(3);
=======
    const [step, setStep] = useState(1);
>>>>>>> Stashed changes
    const [gender, setGender] = useState(null);
    const [major, setMajor] = useState("")

    const value = useMemo(() => ({email, nickname, step, gender, setStep, setEmail, setNickname, setGender}),
        [email, nickname, step, gender, setStep, setEmail, setNickname, setGender]);

    useEffect(() => {
        if (step === 1000) { // step 바꾸기
            console.log("axios run");

            async function fetchData() {
                try {
                    const res = await axios.post('http://127.0.0.1:8080/member/register', {
                        email: email,
                        major: major,
                        nickname: nickname,
                        gender: gender
                    });

                    console.log(res);
                    console.log(nickname);
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
        </UserContext.Provider>
    );
};

export default Register;