import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import ConditionButton from '../../components/condition/ConditionBox'
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotificationsOutline, IoIosArrowForward } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';
import RegPeople from "../../components/regPeople/RegPeople";
import axios from 'axios';
import './main.css';
import './Home.css'

const Home = () => {
    const [member, setMember] = useState([]);

    useEffect(() => {
        async function fetchData() {

            try {
                const res = await axios.post('http://127.0.0.1:8080/home/info');
                console.log(res);
                setMember(res.data); // ==> member = res.data;               
                console.log(member);
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
                <div className='header'>
                    <AiOutlineSearch size='25' className='findicon' />
                    <IoMdNotificationsOutline size='28' />
                </div>
                {/* guide box*/}
                <div className='guide_box'>
                    <div className='guide'>
                        <svg className='guide_icon' xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                            viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="18" fill="#EDE1CF" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.2992 9.90033C11.4707 9.90033 10.7992 10.5719 10.7992 11.4003V21.6003H15.5987C16.4272 21.6003 17.0987 22.2719 17.0987 23.1003L17.0987 27.9003L23.6992 27.9003C24.5276 27.9003 25.1992 27.2288 25.1992 26.4003V11.4003C25.1992 10.5719 24.5276 9.90033 23.6992 9.90033H12.2992Z"
                                fill="#B4AA99" />
                            <path
                                d="M17.0988 27.9003L13.9321 24.767L10.7988 21.6003L15.5988 21.6003C16.4272 21.6003 17.0988 22.2719 17.0988 23.1003L17.0988 27.9003Z"
                                fill="#655D4F" />
                        </svg>
                        <div className='guide_text'>기숙사 생활 규칙 가이드</div>
                        <IoIosArrowForward />
                    </div>
                </div>
                {/* condition box*/}
                <div className='condition_boxes'>
                    <ConditionButton condition={'전공'} />
                    <ConditionButton condition={'학번'} />
                    <ConditionButton condition={'흡연'} />
                    <ConditionButton condition={'잠버릇'} />
                    <ConditionButton condition={'외출'} />
                </div>
                {/* dorm experience */}
                <div className='dorm_exp'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9.5" stroke="#A9ACAC" />
                    </svg>
                    <div className='dorm_text'>기숙사 경험</div>
                </div>
                {/* people infomation */}

                {member.map((info) => (
                    <RegPeople nickname={info.nickname} major={info.major} email={info.email} exp={info.exp} smoking={info.smoking} />
                ))}
            </div>
            <Navigation />
            </div>
        </div>
    )
}

export default Home