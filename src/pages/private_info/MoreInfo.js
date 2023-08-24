import React, {useContext, useState} from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import { UserContext } from './Register';
import { Link } from 'react-router-dom';
import "./MoreInfo.css";
import axios from "axios";

const MoreInfo = () =>{
    const {nickname} = useContext(UserContext);
    
    const [sleep, setSleep] = useState([
        { id: 1, name: "일찍 자요", checked: false },
        { id: 2, name: "늦게 자요", checked: false },
        { id: 3, name: "때마다 달라요", checked: false }
    ]);

    const handleCheckboxChange = (changedCheckboxId) => {
        const updatedCheckboxes = sleep.map((checkbox) => {
            if (checkbox.id === changedCheckboxId) {
                return { ...checkbox, checked: true };
            } else {
                return { ...checkbox, checked: false };
            }
        });

        setSleep(updatedCheckboxes);
    };
 
    /*
    문자열로 넘겨주기

    나머지는 문자열 

    sleep : EARLY, LATE, RADOM >> 기상
    wakeup : EARLY, LATE, RADOM >> 취침
    cleaning: CLEAN, DIRTY, BOTH >> 청소

    흡연: boolean
     */

    const handleClick = () => {
        async function fetchData() {
            try {
                const res = await axios.post('http://127.0.0.1:8080/detail/details', {
                    nickname: nickname,
                    habits: "10011",
                    outing: "110110",
                    prefer: "1000",
                    sleep: "EARLY",
                    wakeup: "EARLY",
                    cleaning: "CLEAN",
                    exp: 2,
                    smoking: false
                });

                console.log(res);
                console.log(nickname);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    };

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
                {sleep.map((checkbox) => (
                    <div onClick={() => handleCheckboxChange(checkbox.id)}>
                        <MoreInfoButton info={checkbox.name} checked={checkbox.checked}></MoreInfoButton>
                    </div>
                ))}
                {/* <MoreInfoButton info={`일찍 자요`}></MoreInfoButton>
                <MoreInfoButton info={`늦게 자요`}></MoreInfoButton>
                <MoreInfoButton info={`때마다 달라요`}></MoreInfoButton> */}
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
            <div className='content' onClick={handleClick}>
                <Button content={`다음`}></Button>              
            </div>

            <Link to={'/FinalPage'}><div className='after'>나중에 할래요</div></Link>
        </div>
    )
}
export default MoreInfo;