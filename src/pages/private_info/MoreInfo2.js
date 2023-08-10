import React from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import "./MoreInfo.css";

const MoreInfo2 = () =>{
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`은진 님에 대해\n더 자세히 알려주세요! (2/4)`} flag={4}></NumberTitle>
            {/*외출 파트*/}
            <div className='sub_title'>외출</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`집순이에요`}></MoreInfoButton>
                <MoreInfoButton info={`밖순이에요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`약속이 있으면 나가요`}></MoreInfoButton>
                <MoreInfoButton info={`본가 자주 가요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`본가 잘 안가요`}></MoreInfoButton>
                <MoreInfoButton info={`학교에 오래 있어요`}></MoreInfoButton>
            </div>
            <div className='content'>
                <Button content={`다음`}></Button>
            </div>
        </div>
    )
}
export default MoreInfo2;