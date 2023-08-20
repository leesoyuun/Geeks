import React from "react";
import "./ConditionBox.css";
import {IoIosArrowDown} from 'react-icons/io'
const ConditionBox = (props) =>{

    return(
        <div className='condition-box'>
            <div className='condition-text'>{props.condition}</div>
            <IoIosArrowDown/>
        </div>

    )
}
export default ConditionBox;