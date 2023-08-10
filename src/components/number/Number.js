import React from "react";
import "./Number.css";

const Number = (props) => {
    return (
        <div>
            <div className='total_circle'>
                <div className={props.flag === 1 ? 'circle' : 'circle_gray'}>1</div>
                <div className={props.flag === 2 ? 'circle' : 'circle_gray'}>2</div>
                <div className={props.flag === 3 ? 'circle' : 'circle_gray'}>3</div>
                <div className={props.flag === 4 ? 'circle' : 'circle_gray'}>4</div>
            </div>
            <div className='title_text'>{props.title}</div>
        </div>
    )
}
export default Number;