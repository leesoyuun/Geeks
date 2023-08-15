import React, { useContext } from 'react';
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import Button from "../../components/button/Button";
import { UserContext } from './Register';

const Showname = () => {
    const {setStep, nickname} = useContext(UserContext);
    const nextPage = () => {
        setStep(5);
    }
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={nickname + ` 님 반가워요!\n\n기숙사 생활을 위한 \n몇가지만 여쭤볼게요.`} flag={3}></NumberTitle>
            <div className='content' onClick={nextPage}>
                <Button content='다음'></Button>
            </div>
        </div>
    )
}
export default Showname;