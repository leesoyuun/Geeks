import React from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import "./MoreInfo.css";

const MoreInfo4 = () =>{
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`은진 님에 대해\n더 자세히 알려주세요! (4/4)`}></NumberTitle>
            {/*성향 파트*/}
            <div className='sub_title'>성향</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`혼자 조용히 지내요`}></MoreInfoButton>
                <MoreInfoButton info={`룸메와 함께 놀고 싶어요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`전화 통화는 밖에서 해요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`휴대폰은 이어폰을 끼고 사용해요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`음식은 밖에서 먹어요`}></MoreInfoButton>
            </div>

            <div className='content'>
                <Button content={`다음`}></Button>
            </div>
        </div>
    )
}
export default MoreInfo4;