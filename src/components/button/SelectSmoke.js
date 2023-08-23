import React, {useContext, useState} from "react";
import smoke from "../../static/img/smoke.png";
import nonesmoke from "../../static/img/nonesmoke.png";
import "./SelectSmoke.css";
import {UserContext} from "../../pages/private_info/Register";

const SelectBtnSmoke = (props) => {
    const {smoking, setSmoking} = useContext(UserContext);

    const ChangeColor = () => {
        if (props.smokestat === '네') {
            setSmoking(true);
        }
        else if (props.smokestat === '아니요') {
            setSmoking(false);
        }

        console.log(smoking);
    }

    return (
        <div className={props.smokestat === '네' ? (smoking === true ? 'smoke_box_yellow' : 'smoke_box') : (smoking === false ? 'smoke_box_yellow' : 'smoke_box')}
             onClick={ChangeColor}>
            <div className='smoke_stat'>{props.smokestat}</div>
            <img className='smoke_img' src={props.smokestat === '네' ? smoke : nonesmoke}/>
        </div>
    )
}
export default SelectBtnSmoke;