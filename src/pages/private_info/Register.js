import React, {createContext, useState, useMemo, useEffect} from 'react';
import Email from "./Email";
import Nickname from "./Nickname";
import Code from './Code';

export const UserContext = createContext({
    email: null,
    nickname: "",
    step: 1,
    setStep: () => {},
    setEmail: () => {},
    setNickname: () => {},
});

const Register = () => {
    const [email, setEmail] = useState(null);
    const [nickname, setNickname] = useState("");
    const [step, setStep] = useState(1);

    const value = useMemo(() => ({ email, nickname, step, setStep, setEmail, setNickname}), [email, nickname, step, setStep, setEmail, setNickname]);

    return (
        <UserContext.Provider value={value}>
            {step === 1 ? <Email></Email> : null}
            {step === 2 ? <Code></Code> : null}
            {step === 3 ? <Nickname></Nickname> : null}
        </UserContext.Provider>
    );
};

export default Register;