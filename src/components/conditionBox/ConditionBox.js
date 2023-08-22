import React from "react";
import ConditionSub from "./ComditionSub";
import "./ConditionBox.css";

const ConditionBox = (props) =>{

    return(
        <div className='condition-boxes'>
            <div className='condition_name'>{props.ConditionName}</div>
            <div className='contions'>
                <ConditionSub condition={'잠버릇 있어요'}/>
                <ConditionSub condition={'잠버릇 없어요'}/>
                <ConditionSub condition={'가끔 있어요'}/>
                <ConditionSub condition={'귀 밝아요'}/>
                <ConditionSub condition={'귀 어두워요'}/>
            </div>
        </div>

    )
}
export default ConditionBox;