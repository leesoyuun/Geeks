import React, {useState} from 'react';
import './Navigation.css';
import {AiFillHome} from 'react-icons/ai';
import {RiBookmarkFill} from "react-icons/ri";
import {BsChatLeftFill, BsFillPersonFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const [selectedIcon, setSelectedIcon] = useState('home');

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };
 // icon selected
    return (
        <div className='total_navigation'>
            <div className='icon'>
                <Link to={'/Home'} onClick={() => handleIconClick('home')}>
                    <AiFillHome size="28" style={{ fill: props.icon === 'home' ? '#3F2E00' : '#A9ACAC' }}/>
                    <div className='icon-text' style={{ color: props.icon === 'home' ? '#3F2E00' : '#A9ACAC' }}>홈</div>
                </Link>
            </div>
            <div className='icon'>
                <Link to={'/Save'} onClick={() => handleIconClick('bookmark')}>
                    <RiBookmarkFill size="28" style={{ fill: props.icon === 'bookmark' ? '#3F2E00' : '#A9ACAC' }}/>
                    <div className='icon-text' style={{ color: props.icon === 'bookmark' ? '#3F2E00' : '#A9ACAC' }}>저장</div>
                </Link>
            </div>
            <div className='icon'>
                <Link to={'/Chat'} onClick={() => handleIconClick('Chat')}>
                    <BsChatLeftFill size="25" style={{ fill: props.icon === 'chat' ? '#3F2E00' : '#A9ACAC' }}/>
                    <div className='icon-text' style={{ color: props.icon === 'chat' ? '#3F2E00' : '#A9ACAC' }}>대화</div>
                </Link>
            </div>
            <div className='icon'>
                <Link to={'/MyPage'} onClick={() => handleIconClick('person')}>
                    <BsFillPersonFill size="28" style={{ fill: props.icon === 'person' ? '#3F2E00' : '#A9ACAC' }}/>
                    <div className='icon-text' style={{ color: props.icon === 'person' ? '#3F2E00' : '#A9ACAC' }}>마이</div>
                </Link>
            </div>
        </div>
    );
}
export default Navigation;