import React from "react";
import "./Number.css";

const Number = (props) => {
    return (
        <div>
            <div className='total_circle'>
                <div className='circle'>1</div>
                <div className='circle'>2</div>
                <div className='circle'>3</div>
                <div className='circle'>4</div>
            </div>
            <div className='title_text'>{props.title}</div>
        </div>
    )
}
export default Number;