import React, { useState } from "react";
import Button from "../../components/button/Button";
import picture1 from "../../static/img/finalpage.png";
import "./FinalPage.css";

const FinalPage = () => {
    const [buttonColor, setButtonColor] = useState('yellow_btn_color');

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <div className="welcome">환영합니다!</div>
          <div className="welcome_ment">
            이제부터 긱스와 함께
            <br />
            룸메이트를 찾아봐요
          </div>
          <img src={picture1} />
        </div>
        <div className="private_bottom">
          <Button content={`룸메이트 찾으러 가기`} name={buttonColor}></Button>
        </div>
      </div>
    </div>
  );
};
export default FinalPage;
