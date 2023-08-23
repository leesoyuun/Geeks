import React from "react";
import people from "../../static/img/people.png"
import "./ChatList.css";
const ChatList = (props) =>{

    return(
        <div className='chatlist-box'>
            <div className="chatlist-content">
                <img src={people} className="chatlist-photo"/>
                <div className="chatlist-txt">
                    <div className="chatlist-info">
                        <div className="chatlist-name">{props.nickname}</div>
                        <div className="chatlist-day">{props.days}</div>
                    </div>
                    <div className="chatlist-chat">{props.chat}</div>
                </div>
            </div>
        </div>

    )
}
export default ChatList;