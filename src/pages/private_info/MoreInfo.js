import React, { useContext, useEffect, useState } from "react";
import TopBar from "../../components/header/Header";
import NumberTitle from "../../components/number/Number";
import MoreInfoButton from "../../components/more_info/MoreInfo";
import Button from "../../components/button/Button";
import { UserContext } from "./Register";
import { Link, useNavigate } from "react-router-dom";
import "./MoreInfo.css";
import "./main.css";
import axios from "axios";

const MoreInfo = () => {
  /*
    문자열로 넘겨주기

    나머지는 문자열 

    sleep : EARLY, LATE, RADOM >> 기상
    wakeup : EARLY, LATE, RADOM >> 취침
    cleaning: CLEAN, DIRTY, BOTH >> 청소

    흡연: boolean
     */

  const { nickname } = useContext(UserContext);
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState('gray_btn_color');

  const [list, setList] = useState([]);
  const [type, setType] = useState("");
  const [count, setCount] = useState(0);

  const [sleep, setSleep] = useState([
    { id: 1, name: "일찍 자요", type: "EARLY", checked: false },
    { id: 2, name: "늦게 자요", type: "LATE", checked: false },
    { id: 3, name: "때마다 달라요", type: "RANDOM", checked: false },
  ]);

  const [wake, setWake] = useState([
    { id: 1, name: "일찍 일어나요", type: "EARLY", checked: false },
    { id: 2, name: "늦게 일어나요", type: "LATE", checked: false },
    { id: 3, name: "때마다 달라요", type: "RANDOM", checked: false },
  ]);

  const [habit, setHabit] = useState([
    { id: 1, name: "잠버릇 있어요", type: "YES", checked: false },
    { id: 2, name: "잠버릇 없어요", type: "NO", checked: false },
    { id: 3, name: "가끔 있어요", type: "SOMETIMES", checked: false },
  ]);

  const [ear, setEar] = useState([
    { id: 1, name: "귀가 밝아요", type: "BRIGHT", checked: false },
    { id: 2, name: "귀가 어두워요", type: "DARK", checked: false }
  ]);

  const [out, setOut] = useState([
    { id: 1, name: "집순이에요", type: "HOME", checked: false },
    { id: 2, name: "밖순이에요", type: "OUT", checked: false }
  ]);

  const [home, setHome] = useState([
    { id: 1, name: "본가 자주 가요", type: "OFTEN", checked: false },
    { id: 2, name: "본가 잘 안가요", type: "RARE", checked: false }
  ]);

  const [clean, setClean] = useState([
    { id: 1, name: "자주 청소해요", type: "CLEAN", checked: false },
    { id: 2, name: "더러워지면 청소해요", type: "DIRTY", checked: false },
    { id: 3, name: "상대에게 맞춰요", type: "BOTH", checked: false },
  ]);

  const [prefer, setPrefer] = useState([
    { id: 1, name: "혼자 조용히 지내요", type: "ALONE", checked: false },
    { id: 2, name: "룸메와 함께 놀고 싶어요", type: "TOGETHER", checked: false }
  ]);

  const [updatedCheckbox, setUpdatedCheckbox] = useState([]);

  const [result, setResult] = useState({ nickname: nickname, habits: null, outing: null, prefer: null, sleep: null, wakeup: null, cleaning: null, home: null, ear: null });

  useEffect(() => {
    if (type.type === "sleep") setList(sleep);
    else if (type.type === "wake") setList(wake);
    else if (type.type === "habit") setList(habit);
    else if (type.type === "ear") setList(ear);
    else if (type.type === "out") setList(out);
    else if (type.type === "home") setList(home);
    else if (type.type === "clean") setList(clean);
    else if (type.type === "prefer") setList(prefer);
  }, [type]);

  useEffect(() => {
    if (!Object.values(result).some(value => value === null)) {
      setButtonColor('yellow_btn_color')
    }
  }, [result])

  useEffect(() => {
    const updatedCheckboxes = list?.map((checkbox) => {
      if (checkbox.id === type.id) {
        if (type.type === "sleep") setResult({ ...result, sleep: checkbox.type })
        else if (type.type === "wake") setResult({ ...result, wakeup: checkbox.type })
        else if (type.type === "habit") setResult({ ...result, habits: checkbox.type })
        else if (type.type === "ear") setResult({ ...result, ear: checkbox.type })
        else if (type.type === "out") setResult({ ...result, outing: checkbox.type })
        else if (type.type === "home") setResult({ ...result, home: checkbox.type })
        else if (type.type === "clean") setResult({ ...result, cleaning: checkbox.type })
        else if (type.type === "prefer") setResult({ ...result, prefer: checkbox.type })

        return { ...checkbox, checked: true };
      } else {
        return { ...checkbox, checked: false };
      }
    });

    setUpdatedCheckbox(updatedCheckboxes);
  }, [list]);

  useEffect(() => {
    if (type.type === "sleep") setSleep(updatedCheckbox);
    else if (type.type === "wake") setWake(updatedCheckbox);
    else if (type.type === "habit") setHabit(updatedCheckbox);
    else if (type.type === "ear") setEar(updatedCheckbox);
    else if (type.type === "out") setOut(updatedCheckbox);
    else if (type.type === "home") setHome(updatedCheckbox);
    else if (type.type === "clean") setClean(updatedCheckbox);
    else if (type.type === "prefer") setPrefer(updatedCheckbox);
  }, [updatedCheckbox]);

  const handleCheckboxChange = (changedCheckboxId, type) => {
    setType({ id: changedCheckboxId, type: type });
  };

  const handleClick = () => {

    if (buttonColor != 'yellow_btn_color') return;

    console.log(result);

    async function fetchData() {
      try {
        const res = await axios.post("http://127.0.0.1:8080/detail/details", result);

        console.log(res);
        navigate("/Home")
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  };

  return (
    <div className="screen">
      <div className="sub_screen">
        <div className="screen_content">
          <TopBar></TopBar>
          <NumberTitle
            title={nickname + ` 님의\n생활 습관을 알려주세요!`}
            flag={4}
          ></NumberTitle>
          <div className="detail_explain">
            생활 습관을 등록해야 일부 서비스의 이용이 가능해요
          </div>
          {/*숙면 파트*/}
          <div className="sub_title">숙면</div>
          <div className="info_rounds">
            {habit.map((checkbox) => (
              <div key={checkbox.id}
                onClick={() =>
                  handleCheckboxChange(checkbox.id, "habit")
                }
              >
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>

          <div className="line"></div>

          <div className="sub_title">밤귀</div>
          <div className="info_rounds">
            {ear.map((checkbox) => (
              <div key={checkbox.id}
                onClick={() =>
                  handleCheckboxChange(checkbox.id, "ear")
                }
              >
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>

          <div className="line"></div>

          {/*취침 파트*/}
          <div className="sub_title">취침</div>
          <div className="info_rounds">
            {sleep.map((checkbox) => (
              <div key={checkbox.id} onClick={() => handleCheckboxChange(checkbox.id, "sleep")}>
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>

          <div className="line"></div>

          {/*기상 파트*/}
          <div className="sub_title">기상</div>
          <div className="info_rounds">
            {wake.map((checkbox) => (
              <div key={checkbox.id} onClick={() => handleCheckboxChange(checkbox.id, "wake")}>
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>
          <div className="line"></div>
          {/*외출 파트*/}
          <div className="sub_title">외출</div>
          <div className="info_rounds">
            {out.map((checkbox) => (
              <div key={checkbox.id}
                onClick={() =>
                  handleCheckboxChange(checkbox.id, "out")
                }
              >
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>

          {/*본가 파트*/}
          <div className="line"></div>
          <div className="sub_title">본가</div>
          <div className="info_rounds">
            {home.map((checkbox) => (
              <div key={checkbox.id}
                onClick={() =>
                  handleCheckboxChange(checkbox.id, "home")
                }
              >
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>

          <div className="line"></div>

          {/*청소 파트*/}
          <div className="sub_title">청소</div>
          <div className="info_rounds">
            {clean.map((checkbox) => (
              <div key={checkbox.id}
                onClick={() =>
                  handleCheckboxChange(checkbox.id, "clean")
                }
              >
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>

          <div className="line"></div>

          {/*성향 파트*/}
          <div className="sub_title">성향</div>
          <div className="info_rounds">
            {prefer.map((checkbox) => (
              <div key={checkbox.id}
                onClick={() =>
                  handleCheckboxChange(checkbox.id, "prefer")
                }
              >
                <MoreInfoButton
                  info={checkbox.name}
                  checked={checkbox.checked}
                ></MoreInfoButton>
              </div>
            ))}
          </div>
        </div>
        <div className="private_bottom">
          <div onClick={handleClick}>
            <Button content={`다음`} name={buttonColor}></Button>
          </div>
          <Link to={"/FinalPage"}>
            <div className="after">나중에 할래요</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MoreInfo;
