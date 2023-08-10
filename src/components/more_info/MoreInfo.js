import React, {useState} from "react";
import "./MoreInfo.css";


const MoreInfoCircle = (props) => {
    const [buttonColor, setButtonColor] = useState("#ECEEEF");
    const handleButtonClick = () => {
        buttonColor === "#ECEEEF" ? setButtonColor("#F8BE00") : setButtonColor("#ECEEEF");
    };
    return (
        <div className='info_round'
             style={{backgroundColor: buttonColor}}
             onClick={handleButtonClick}
        >{props.info}</div>
    )
};

export default MoreInfoCircle;