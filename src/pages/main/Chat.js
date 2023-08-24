import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import ChatList from '../../components/chatList/ChatList';
import './main.css';
import './Chat.css';

const Chat = () => {
    return (
        <div className='screen'>
            <div className='sub_screen'>
                <div className='screen_content'>
                    <div className='chat'>대화</div>
                    {/* 대화 목록 */}
                    <ChatList nickname={'집가고싶다'} days={'2일 전'} chat={'안녕하세요. 룸메 구하셨나요?'}/>
                </div>
                <Navigation icon={'chat'}></Navigation>
            </div>
        </div>
    )
}

export default Chat