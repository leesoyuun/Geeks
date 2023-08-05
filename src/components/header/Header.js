import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./Header.css";
import { useNavigate } from "react-router-dom";


const TopBar = () => {
    const navigate = useNavigate();

    const back_click = () => {navigate(-1)}
    return (
        <div className="top_bar">
            <MdKeyboardArrowLeft className="icons" size="36" onClick={back_click}/>
        </div>
    );
};

export default TopBar;