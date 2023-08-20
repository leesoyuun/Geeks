import React, {useContext} from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import { UserContext } from './Register';
import "./MoreInfo.css";

const MoreInfo = () =>{
    const {setStep, nickname} = useContext(UserContext);
    return(
        <div className='main'>
            <TopBar></TopBar>
            <NumberTitle title={nickname+` 님의\n생활 습관을 알려주세요!`} flag={4}></NumberTitle>
            <div className='detail_explain'>생활 습관을 등록해야 일부 서비스의 이용이 가능해요</div>
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
            <div className='line'></div>
            {/*취침 파트*/}
            <div className='sub_title'>취침</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`일찍 자요`}></MoreInfoButton>
                <MoreInfoButton info={`늦게 자요`}></MoreInfoButton>
                <MoreInfoButton info={`때마다 달라요`}></MoreInfoButton>
            </div>
            <div className='line'></div>
            {/*기상 파트*/}
            <div className='sub_title'>기상</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`일찍 일어나요`}></MoreInfoButton>
                <MoreInfoButton info={`늦게 일어나요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`때마다 달라요`}></MoreInfoButton>
            </div>
            <div className='line'></div>
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
            <div className='line'></div>
            {/*청소 파트*/}
            <div className='sub_title'>청소</div>
            <div className='info_rounds'>
                <MoreInfoButton info={`자주 청소해요`}></MoreInfoButton>
                <MoreInfoButton info={`더러워지면 청소해요`}></MoreInfoButton>
            </div>
            <div className='info_rounds'>
                <MoreInfoButton info={`상대에게 맞춰요`}></MoreInfoButton>
            </div>
            <div className='line'></div>
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
                <div className='after'>나중에 할래요</div>
            </div>

        </div>
    )
}
export default MoreInfo;