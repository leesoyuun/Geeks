import React from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import "./MoreInfo.css";

const MoreInfo3 = () =>{
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`은진 님에 대해\n더 자세히 알려주세요! (3/4)`}></NumberTitle>
            {/*청소 파트*/}
            <div className='sub_title'>청소</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`자주 청소해요`}></MoreInfoButton>
                <MoreInfoButton info={`더러워지면 청소해요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`상대에게 맞춰요`}></MoreInfoButton>
            </div>
            <div className='content'>
                <Button content={`다음`}></Button>
            </div>
        </div>
    )
}
export default MoreInfo3;