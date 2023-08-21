import React from "react";
import "./MypageButton.css";
import {IoIosArrowForward} from 'react-icons/io';


const MypageButton = (props) => {
    return (
        <div className='mypage-button'>
            <div className='mypage_text'>{props.mypagetxt}</div>
            <IoIosArrowForward className='arrow-forward' size={20}/>
        </div>
    )
};

export default MypageButton;