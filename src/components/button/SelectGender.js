import React, {useContext, useState} from "react";
import male from "../../static/img/male.png";
import female from "../../static/img/female.png";
import "./SelectGender.css";
import {UserContext} from "../../pages/private_info/Register";

const SelectBtn = (props) => {
    const {gender, setGender} = useContext(UserContext);
    const [bgColor, setBgColor] = useState("#F2F4F4");


    const ChangeColor = () => {
        if (props.gender === '남자') {
            setGender(1);
        } 
        else if (props.gender === '여자') {
            setGender(2);
        }
    }

    return (
        <div className={props.gender === '남자' ? (gender === 1 ? 'gender_box_yellow' : 'gender_box') : (gender === 2 ? 'gender_box_yellow' : 'gender_box')} onClick={ChangeColor}>
            <div className='gender'>{props.gender}</div>
            <img className='gender_img' src={props.gender === '남자' ? male : female}/>
        </div>
    )
}
export default SelectBtn;