import React from "react";
import "./ConditionSub.css";

const ConditionSub = (props) =>{

    return(
        <div className='condition-sub-box'>
            <div className='condition_name'>{props.condition}</div>
        </div>

    )
}
export default ConditionSub;