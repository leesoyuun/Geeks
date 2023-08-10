import React,{ useState } from "react";
import "./Button.css";

const button = (props) =>{

    return(
        <div className='round_btn' >{props.content}</div>
    )
}
export default button;