import React,{ useState } from "react";
import "./Button.css";

const button = (props) =>{

    return(
        <div className='total'>
            <div className='round_btn'>{props.content}</div>
        </div>

    )
}
export default button;