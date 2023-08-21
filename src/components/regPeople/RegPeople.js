import people from "../../static/img/people.png";
import {BsBookmark} from "react-icons/bs";
import React from "react";
import "./RegPeople.css"

const RegPeople = (props) => {
    return (
        <div className='person_info'>
            <div className='persons_img'>
                <img className='photo' src={people}/>
                <div className='persons'>
                    <div className='user-name'>{props.nickname}</div>
                    <div>{props.major} · {props.email[2]}{props.email[3]}학번</div>
                </div>
                <BsBookmark className='bookmark'/>
            </div>
            {/* 입력한 정보 표시 */}
            <div className='show_condition'>
                <div className='live_num'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10"
                         fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.5 9.25C10.5 9.65997 10.84 10 11.25 10C11.66 10 12 9.65997 12 9.25V5.87C12 4.87 11.38 4.02002 10.5 3.66998V2C10.5 0.900024 9.60001 0 8.5 0H3.5C2.39999 0 1.5 0.900024 1.5 2V3.66998C0.619995 4.02002 0 4.87 0 5.87V9.25C0 9.65997 0.339996 10 0.75 10C1.16 10 1.5 9.65997 1.5 9.25V8.5H10.5V9.25ZM9 1.5H3V3.5H9V1.5ZM9.64001 5H2.37C1.89001 5 1.5 5.39001 1.5 5.87H1.51001V7H10.51V5.87C10.51 5.39001 10.12 5 9.64001 5Z"
                              fill="#8E9192"/>
                    </svg>
                    <div className='live_count'>{props.exp}</div>
                </div>
                <div className='smoke'>{props.smoking ? "흡연자" : "비흡연자"}</div>
            </div>
        </div>
    )
}
export default RegPeople