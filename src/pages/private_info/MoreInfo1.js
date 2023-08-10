import React from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import "./MoreInfo.css";

const MoreInfo1 = () =>{
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={`은진 님에 대해\n더 자세히 알려주세요! (1/4)`} flag={4}></NumberTitle>
            {/*숙면 파트*/}
            <div className='sub_title'>숙면</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`잠버릇 있어요`}></MoreInfoButton>
                <MoreInfoButton info={`잠버릇 없어요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`가끔 있어요`}></MoreInfoButton>
                <MoreInfoButton info={`귀가 밝아요`}></MoreInfoButton>
                <MoreInfoButton info={`귀가 어두워요`}></MoreInfoButton>
            </div>
            {/*취침 파트*/}
            <div className='sub_title'>취침</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`일찍 자요`}></MoreInfoButton>
                <MoreInfoButton info={`늦게 자요`}></MoreInfoButton>
                <MoreInfoButton info={`때마다 달라요`}></MoreInfoButton>
            </div>
            {/*기상 파트*/}
            <div className='sub_title'>기상</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`일찍 일어나요`}></MoreInfoButton>
                <MoreInfoButton info={`늦게 일어나요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`때마다 달라요`}></MoreInfoButton>
            </div>
            <div className='content'>
                <Button content={`다음`}></Button>
            </div>

        </div>
    )
}
export default MoreInfo1;