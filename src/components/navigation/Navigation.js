import React, {useState} from 'react';
import './Navigation.css';
import {AiFillHome} from 'react-icons/ai';
import {RiBookmarkFill} from "react-icons/ri";
import {BsChatLeftFill, BsFillPersonFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [selectedIcon, setSelectedIcon] = useState('home');

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    return (
        <div className='total_navigation'>
            <div className={`icon ${selectedIcon === 'home' ? 'selected' : ''}`}>
                <Link to={'/Home'} onClick={() => handleIconClick('home')}>
                    <AiFillHome size="28" style={{ fill: selectedIcon === 'home' ? 'black' : 'gray' }}/>
                    <div className='icon-text'>홈</div>
                </Link>
            </div>
            <div className={`icon ${selectedIcon === 'bookmark' ? 'selected' : ''}`}>
                <Link to={'/Save'} onClick={() => handleIconClick('bookmark')}>
                    <RiBookmarkFill size="28" style={{ fill: selectedIcon === 'bookmark' ? 'black' : 'gray' }}/>
                    <div className='icon-text'>저장</div>
                </Link>
            </div>
            <div className={`icon ${selectedIcon === 'Chat' ? 'selected' : ''}`}>
                <Link to={'/Chat'} onClick={() => handleIconClick('Chat')}>
                    <BsChatLeftFill size="25" style={{ fill: selectedIcon === 'bookmark' ? 'black' : 'gray' }}/>
                    <div className='icon-text'>대화</div>
                </Link>
            </div>
            <div className={`icon ${selectedIcon === 'person' ? 'selected' : ''}`}>
                <Link to={'/MyPage'} onClick={() => handleIconClick('person')}>
                    <BsFillPersonFill size="28" style={{ fill: selectedIcon === 'bookmark' ? 'black' : 'gray' }}/>
                    <div className='icon-text'>마이</div>
                </Link>
            </div>
        </div>
    );
}
export default Navigation;