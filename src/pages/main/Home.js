import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import ConditionButton from '../../components/condition/ConditionBox'
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdNotificationsOutline, IoIosArrowForward} from 'react-icons/io';
import {BsBookmark} from 'react-icons/bs';
import people from '../../static/img/people.png'
import './main.css';
import './Home.css'

const Home = () => {
    return (
        <div className='screen'>
            <div className='screen_content'>
                <div className='header'>
                    <AiOutlineSearch size='25' className='findicon'/>
                    <IoMdNotificationsOutline size='28'/>
                </div>
                {/* guide box*/}
                <div className='guide_box'>
                    <div className='guide'>
                        <svg className='guide_icon' xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                             viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#EDE1CF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M12.2992 9.90033C11.4707 9.90033 10.7992 10.5719 10.7992 11.4003V21.6003H15.5987C16.4272 21.6003 17.0987 22.2719 17.0987 23.1003L17.0987 27.9003L23.6992 27.9003C24.5276 27.9003 25.1992 27.2288 25.1992 26.4003V11.4003C25.1992 10.5719 24.5276 9.90033 23.6992 9.90033H12.2992Z"
                                  fill="#B4AA99"/>
                            <path
                                d="M17.0988 27.9003L13.9321 24.767L10.7988 21.6003L15.5988 21.6003C16.4272 21.6003 17.0988 22.2719 17.0988 23.1003L17.0988 27.9003Z"
                                fill="#655D4F"/>
                        </svg>
                        <div className='guide_text'>기숙사 생활 규칙 가이드</div>
                        <IoIosArrowForward/>
                    </div>
                </div>
                {/* condition box*/}
                <div className='condition_boxes'>
                    <ConditionButton condition={'전공'}/>
                    <ConditionButton condition={'학번'}/>
                    <ConditionButton condition={'흡연'}/>
                    <ConditionButton condition={'잠버릇'}/>
                    <ConditionButton condition={'외출'}/>
                </div>
                {/* dorm experience */}
                <div className='dorm_exp'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9.5" stroke="#A9ACAC"/>
                    </svg>
                    <div className='dorm_text'>기숙사 경험</div>
                </div>
                {/* people infomation */}
                <div className='person_info'>
                    <div className='persons_img'>
                        <img className='photo' src={people}/>
                        <div className='persons'>
                            <div className='user-name'>배고프다</div>
                            <div>디지털콘텐츠 · 19학번</div>
                        </div>
                        <BsBookmark className='bookmark'/>
                    </div>
                    {/* 입력한 정보 표시 */}
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
                    </div>
                </div>
            </div>
            <Navigation/>
        </div>
    )
}

export default Home