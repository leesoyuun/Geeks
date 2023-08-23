import React from 'react';
import MypageButton from "../../components/mypageButton/MypageButton";
import people from '../../static/img/people.png';
import {IoIosArrowBack} from "react-icons/io";
import {RiErrorWarningFill} from "react-icons/ri";
import ConditionBox from '../../components/conditionBox/ConditionBox';
import './main.css';
import './ProfileView.css';


const ProfileView = () => {
    return (
        <div className='screen'>
            <div className='sub_screen'>
                <div className='screen_content'>
                    <div className='profile_header'>
                        <IoIosArrowBack size='28'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="20" viewBox="0 0 6 20" fill="none">
                            <path
                                d="M2.99996 5.33335C4.28329 5.33335 5.33329 4.28335 5.33329 3.00002C5.33329 1.71669 4.28329 0.666687 2.99996 0.666687C1.71663 0.666687 0.666626 1.71669 0.666626 3.00002C0.666626 4.28335 1.71663 5.33335 2.99996 5.33335ZM2.99996 7.66669C1.71663 7.66669 0.666626 8.71669 0.666626 10C0.666626 11.2834 1.71663 12.3334 2.99996 12.3334C4.28329 12.3334 5.33329 11.2834 5.33329 10C5.33329 8.71669 4.28329 7.66669 2.99996 7.66669ZM2.99996 14.6667C1.71663 14.6667 0.666626 15.7167 0.666626 17C0.666626 18.2834 1.71663 19.3334 2.99996 19.3334C4.28329 19.3334 5.33329 18.2834 5.33329 17C5.33329 15.7167 4.28329 14.6667 2.99996 14.6667Z"
                                fill="#2E3132"/>
                        </svg>
                    </div>
                    {/* other people profile*/}
                    <div className='other_profile'>
                        <div className='basic_info'>
                            <img className='other_photo' src={people}/>
                            <div className='other_name'>이소윤</div>
                            <div className='profile_other_major'>인더스트리디자인 · 19학번</div>
                            <div className='other_condition'>
                                <div className='other_live_cnt'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                         viewBox="0 0 14 14"
                                         fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.2903 4.78569L7.36288 0.867437C7.25979 0.785279 7.13187 0.74054 7.00005 0.74054C6.86823 0.74054 6.7403 0.785279 6.63722 0.867437L1.70922 4.78569C1.57187 4.89493 1.46094 5.03375 1.38469 5.19182C1.30843 5.34988 1.26882 5.52311 1.2688 5.6986V11.1924C1.2688 11.5637 1.4163 11.9198 1.67885 12.1824C1.9414 12.4449 2.2975 12.5924 2.6688 12.5924H5.83338V9.82044C5.83338 9.66573 5.89484 9.51735 6.00424 9.40796C6.11363 9.29856 6.26201 9.2371 6.41672 9.2371H7.58338C7.73809 9.2371 7.88646 9.29856 7.99586 9.40796C8.10526 9.51735 8.16672 9.66573 8.16672 9.82044V12.5924H11.3307C11.702 12.5924 12.0581 12.4449 12.3207 12.1824C12.5832 11.9198 12.7307 11.5637 12.7307 11.1924V5.69919C12.7307 5.52369 12.6911 5.35046 12.6148 5.1924C12.5386 5.03434 12.4276 4.89493 12.2903 4.78569Z"
                                              fill="#A9ACAC"/>
                                    </svg>
                                    <div>2</div>
                                </div>
                                <div className='other_smoke'>흡연자</div>
                            </div>
                        </div>
                        <div className='other_chat'>대화하기</div>
                    </div>
                    {/* other peole caution */}
                    <div className='other_caution'>
                        <div className='other_caution_1'>
                            <RiErrorWarningFill color='#D0C5B4'/>
                            <div className='other_caution_txt'>밤샘 작업이 잦아요! 새벽에 주무시는 분들 찾아요</div>
                        </div>
                        <div className='other_caution_2'>
                            <RiErrorWarningFill color='#D0C5B4'/>
                            <div className='other_caution_txt'>잠버릇 심하신 분들 정중히 사양합니다 ㅠㅠ</div>
                        </div>
                    </div>

                    {/* 조건 목록 */}
                    <ConditionBox ConditionName={'숙면'}/>
                    <ConditionBox ConditionName={'취침'}/>
                    <ConditionBox ConditionName={'기상'}/>
                    <ConditionBox ConditionName={'외출'}/>
                    <ConditionBox ConditionName={'청소'}/>
                    <ConditionBox ConditionName={'성향'}/>
                    
                </div>
                {/* 여기에 하단 바 추가*/}
                <div className='other_bottom_bar'>
                    <div className='other_bookmark'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path
                                d="M22.6666 4H9.33329C7.86663 4 6.66663 5.2 6.66663 6.66667V28L16 24L25.3333 28V6.66667C25.3333 5.2 24.1333 4 22.6666 4ZM22.6666 24L16 21.0933L9.33329 24V8C9.33329 7.26667 9.93329 6.66667 10.6666 6.66667H21.3333C22.0666 6.66667 22.6666 7.26667 22.6666 8V24Z"
                                fill="#A9ACAC"/>
                        </svg>
                        <div className='other_bookmark_txt'>저장</div>
                    </div>
                    <div className='rommate_btn'>룸메이트 신청하기</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileView;