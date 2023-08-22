import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import RegPeople from '../../components/regPeople/RegPeople';
import './main.css';
import './Save.css';

const Save = () => {
    return (
        <div className='screen'>
            <div className='sub_screen'>
                <div className='screen_content'>
                    <div className='save'>저장</div>
                    {/* 내가 저장 & 나를 저장 헤더 */}
                    <div className='save_header'>
                        <div>
                            <div className='me_save_txt'>내가 저장</div>
                            <div className='me_underline'></div>
                        </div>
                        <div className='save_me'>
                            <div className='save_me_txt'>나를 저장</div>
                        </div>
                    </div>
                    {/* 같은과 다른과 조건 버튼 */}
                    <div className='save_major'>
                        <div className='same_major'>타전공</div>
                        <div className='other_major'>같은 과</div>
                    </div>
                    {/* 총 명수 및 편집 버튼 */}
                    <div className='save_min_header'>
                        <div>총 3명</div>
                        <div>편집</div>
                    </div>
                    {/* 내가 저장한 사람들의 목록 */}
                    <RegPeople nickname={'이소윤'} major={'커뮤니케이션디자인'} email={'20학번'} exp={'2'} smoking={'흡연자'}/>
                </div>
                <Navigation/>
            </div>
        </div>
    )
}

export default Save