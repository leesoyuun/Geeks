import React from "react";
import ConditionSub from "./ComditionSub";
import "./ConditionBox.css";

const ConditionBox = (props) =>{

    return(
        <div className='condition-boxes'>
            <div className='condition_name'>{props.ConditionName}</div>
            <div className='contions'>
               {props.ConditionName === '숙면' && (
                <>
                <ConditionSub condition={'잠버릇 있어요'}/>
                <ConditionSub condition={'잠버릇 없어요'}/>
                <ConditionSub condition={'가끔 있어요'}/>
                <ConditionSub condition={'귀 밝아요'}/>
                <ConditionSub condition={'귀 어두워요'}/>
                </>
               )}
               {props.ConditionName === '취침' && (
                <>
                <ConditionSub condition={'일찍 자요'}/>
                <ConditionSub condition={'늦게 자요'}/>
                <ConditionSub condition={'때마다 달라요'}/>
                </>                
               )}
               {props.ConditionName === '기상' && (
                <>
                <ConditionSub condition={'일찍 일어나요'}/>
                <ConditionSub condition={'늦게 일어나요'}/>
                <ConditionSub condition={'때마다 달라요'}/>
                </>                
               )}
               {props.ConditionName === '외출' && (
                <>
                <ConditionSub condition={'집순이에요'}/>
                <ConditionSub condition={'밖순이에요'}/>
                <ConditionSub condition={'약속이 있으면 나가요'}/>
                <ConditionSub condition={'본가 자주 가요'}/>
                <ConditionSub condition={'본가 잘 안가요'}/>
                <ConditionSub condition={'학교에 오래 있어요'}/>
                </>                
               )}
               {props.ConditionName === '청소' && (
                <>
                <ConditionSub condition={'자주 청소해요'}/>
                <ConditionSub condition={'더러워지면 청소해요'}/>
                <ConditionSub condition={'상대에게 맞춰요'}/>
                </>                
               )}
               {props.ConditionName === '성향' && (
                <>
                <ConditionSub condition={'혼자 조용히 지내요'}/>
                <ConditionSub condition={'룸메와 함께 놀고 싶어요'}/>
                </>                
               )}
            </div>
        </div>

    )
}
export default ConditionBox;