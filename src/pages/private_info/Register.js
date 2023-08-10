import React, {createContext, useState, useMemo, useEffect} from 'react';
import Email from "./Email";
import Nickname from "./Nickname";

export const UserContext = createContext({
    setStep: () => {},
    setEmail: () => {},
    setNickname: () => {},
});

const Register = () => {
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log(email);
    }, [email]);

    const value = useMemo(() => ({ setStep, setEmail, setNickname}), [setStep, setEmail, setNickname]);

    return (
        <UserContext.Provider value={value}>
            {step === 1 ? <Email></Email> : null}
            {step === 2 ? <Nickname></Nickname> : null}
        </UserContext.Provider>
    );
};

export default Register;