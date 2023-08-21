import React, {useState} from 'react';
import './Navigation.css';
import {AiFillHome} from 'react-icons/ai';
import {RiBookmarkFill} from "react-icons/ri";
import {BsChatLeftFill, BsFillPersonFill} from 'react-icons/bs';

const Navigation = () => {
    const [selectedIcon, setSelectedIcon] = useState('home');

    const handleIconClick = (icon) => {
        setSelectedIcon(icon);
    };

    return (
        <div className='total_navigation'>
            <div className={`icon ${selectedIcon === 'home' ? 'selected' : ''}`} onClick={() => handleIconClick('home')}>
                <AiFillHome size="28"/>
                <div className='icon-text'>홈</div>
            </div>
            <div className={`icon ${selectedIcon === 'bookmark' ? 'selected' : ''}`} onClick={() => handleIconClick('bookmark')}>
                <RiBookmarkFill size="28"/>
                <div className='icon-text'>저장</div>
            </div>
            <div className={`icon ${selectedIcon === 'chat' ? 'selected' : ''}`} onClick={() => handleIconClick('chat')}>
                <BsChatLeftFill size="25"/>
                <div className='icon-text'>대화</div>
            </div>
            <div className={`icon ${selectedIcon === 'person' ? 'selected' : ''}`} onClick={() => handleIconClick('person')}>
                <BsFillPersonFill size="28"/>
                <div className='icon-text'>마이</div>
            </div>
        </div>
    );
}
export default Navigation;