import React,{ useState } from "react";
import "./Button.css";

const button = (props) =>{
    // page
    return(
        <div className='total'>
        <div className={props.name}>{props.content}</div>
        </div>

    )
}
export default button;