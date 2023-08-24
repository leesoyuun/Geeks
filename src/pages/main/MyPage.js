import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import MypageButton from "../../components/mypageButton/MypageButton";
import ConditionButton from '../../components/condition/ConditionBox'
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdNotificationsOutline, IoIosArrowForward} from 'react-icons/io';
import people from '../../static/img/people.png';
import axios from 'axios';
import './main.css';
import './MyPage.css';

const MyPage = () => {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        async function fetchData() {

            try {
                const res = await axios.get('http://127.0.0.1:8080/member/mypage?id=' + 1);
                setInfo(res.data);
                console.log(info);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [])

    return (
        <div className='screen'>
            <div className='sub_screen'>
                <div className='screen_content'>
                <div className='mypage'>마이</div>
                {/* introduce self*/}
                <div className='person_info'>
                    {/* <div className='persons_img'>
                        <img className='photo' src={people}/>
                        <div className='persons'>
                            <div className='user-name'>배고프다</div>
                            <div>디지털콘텐츠 · 19학번</div>
                        </div>
                    </div>
                    입력한 정보 표시 // 주석 다시 하기
                    <div className='show_condition'>
                        <div className='live_num'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M10.5 9.25C10.5 9.65997 10.84 10 11.25 10C11.66 10 12 9.65997 12 9.25V5.87C12 4.87 11.38 4.02002 10.5 3.66998V2C10.5 0.900024 9.60001 0 8.5 0H3.5C2.39999 0 1.5 0.900024 1.5 2V3.66998C0.619995 4.02002 0 4.87 0 5.87V9.25C0 9.65997 0.339996 10 0.75 10C1.16 10 1.5 9.65997 1.5 9.25V8.5H10.5V9.25ZM9 1.5H3V3.5H9V1.5ZM9.64001 5H2.37C1.89001 5 1.5 5.39001 1.5 5.87H1.51001V7H10.51V5.87C10.51 5.39001 10.12 5 9.64001 5Z"
                                      fill="#8E9192"/>
                            </svg>
                            <div className='live_count'>2</div>
                        </div>
                        <div className='smoke'>흡연자</div>
                    </div> */}
                    <div className='persons_img'>
                        <img className='photo' src={people}/>
                        <div className='persons'>
                            <div className='user-name'>{info?.nickname}</div>
                            <div>{info?.major} · {info?.email[2] + info?.email[3]}학번</div>
                        </div>
                    </div>

                    <div className='show_condition'>
                        <div className='live_num'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M10.5 9.25C10.5 9.65997 10.84 10 11.25 10C11.66 10 12 9.65997 12 9.25V5.87C12 4.87 11.38 4.02002 10.5 3.66998V2C10.5 0.900024 9.60001 0 8.5 0H3.5C2.39999 0 1.5 0.900024 1.5 2V3.66998C0.619995 4.02002 0 4.87 0 5.87V9.25C0 9.65997 0.339996 10 0.75 10C1.16 10 1.5 9.65997 1.5 9.25V8.5H10.5V9.25ZM9 1.5H3V3.5H9V1.5ZM9.64001 5H2.37C1.89001 5 1.5 5.39001 1.5 5.87H1.51001V7H10.51V5.87C10.51 5.39001 10.12 5 9.64001 5Z"
                                      fill="#8E9192"/>
                            </svg>
                            <div className='live_count'>{info?.exp}</div>
                        </div>
                        <div className='smoke'>{info?.smoking ? "흡연자" : "비흡연자"}</div>
                    </div>
                    {/* 프로필수정하기 */}
                    <div className='edit_profile_btn'>프로필 수정하기</div>
                </div>
                {/* 프로필 노출하기 */}
                <div className='show_profile'>
                    <div>
                        <div className='show_profile_title'>내 프로필 노출하기</div>
                        <div className='show_profile_sub'>룸메이트가 맺어지면 내 프로필이 숨겨져요</div>
                    </div>
                    여기 스위치
                </div>
                <MypageButton mypagetxt={`생활 습관 수정하기`}/>
                <MypageButton mypagetxt={`룸메이트 신청 목록`}/>
                <div className='between-space'></div>
                <MypageButton mypagetxt={`재학생 인증하기`}/>
                <MypageButton mypagetxt={`알림 설정`}/>
                <MypageButton mypagetxt={`공지사항`}/>
            </div>
            <Navigation icon={'person'}></Navigation>
            </div>
        </div>
    )
}

export default MyPage