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
            bgColor === '#F2F4F4' ?  setBgColor('#FFF2DD') : setBgColor('#F2F4F4')
        } else if (props.gender === '여자') {
            bgColor === '#F2F4F4' ?  setBgColor('#FFF2DD') : setBgColor('#F2F4F4')
        }
    }

    return (
        <div className='gender_box' onClick={ChangeColor}
             style={{backgroundColor: bgColor}}>
            <div className='gender'>{props.gender}</div>
            <div className='gender_imgs'>
                <img className='gender_img' src={props.gender === '남자' ? male : female}/>
            </div>
        </div>
    )
}
export default SelectBtn;