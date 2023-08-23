import React from "react";
import people from "../../static/img/people.png"
import "./ConditionSub.css";

const ConditionSub = (props) =>{

    return(
        <div className='condition-sub-box'>
            <div className='condition_name'>{props.condition}</div>
            <div className='circle-container'>
                {props.condition === '잠버릇 있어요' && <img src={people} className='circle_photo'/>}
            </div>
        </div>

    )
}
export default ConditionSub;