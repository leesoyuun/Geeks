import React from "react";
import { BsCheck2 } from "react-icons/bs";
import "./Number.css";

const Number = (props) => {
  return (
    <div>
        <div className="total_circle">
            {[1, 2, 3, 4].map(number => (
                <div key={number}>
                    {props.flag > number ? <div className="circle_gray"><BsCheck2 className="circle_check" /></div> : props.flag === number ? <div className="circle">{number}</div> : <div className="circle_gray">{number}</div>}
                </div>
            ))}
        </div>      
      <div className="title_text">{props.title}</div>
    </div>
  );
};
export default Number;
