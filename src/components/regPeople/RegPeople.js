import people from "../../static/img/people.png";
import {BsBookmark,BsBookmarkFill} from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import "./RegPeople.css";
import axios from "axios";

const RegPeople = (props) => {
    const [isBookmarked, setIsBookmarked] = useState(null);
    const isMounted = useRef(0);

    const toggleBookmark = () => {
        setIsBookmarked(prevState => !prevState);
    };

    useEffect(() => {
        setIsBookmarked(props.save);
    }, [])

    useEffect(() => { 
        if(isMounted.current > 2) {
            if(isBookmarked) {
                async function fetchData() {
 
                    try {
                        const res = await axios.get('http://127.0.0.1:8080/savelist/saved?myId=' + 1 + '&otherId=' + props.id);
                        console.log(res);
                    } catch (error) {
                        console.error(error);
                    }
                }
        
                fetchData();
                console.log("axios");
            }
        }

        else {
            isMounted.current += 1;
        }
    }, [isBookmarked])

    return (
        <div className='person_info'>
            <div className='persons_img'>
                <img className='photo' src={people}/>
                <div className='persons'>
                    <div className='user-name'>{props.nickname}</div>
                    <div>{props.major} · {props.email[2]}{props.email[3]}학번</div>
                </div>
                {isBookmarked? <BsBookmarkFill className='bookmark' onClick={toggleBookmark}/> :
                <BsBookmark className='bookmark' onClick={toggleBookmark}/>}
            </div>
            {/* 입력한 정보 표시 */}
            <div className='show_condition'>
                <div className='live_num'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2903 4.78566L7.36288 0.867407C7.25979 0.785248 7.13187 0.740509 7.00005 0.740509C6.86823 0.740509 6.7403 0.785248 6.63722 0.867407L1.70922 4.78566C1.57187 4.8949 1.46094 5.03372 1.38469 5.19179C1.30843 5.34985 1.26882 5.52308 1.2688 5.69857V11.1924C1.2688 11.5637 1.4163 11.9198 1.67885 12.1824C1.9414 12.4449 2.2975 12.5924 2.6688 12.5924H5.83338V9.82041C5.83338 9.6657 5.89484 9.51732 6.00424 9.40793C6.11363 9.29853 6.26201 9.23707 6.41672 9.23707H7.58338C7.73809 9.23707 7.88646 9.29853 7.99586 9.40793C8.10526 9.51732 8.16672 9.6657 8.16672 9.82041V12.5924H11.3307C11.702 12.5924 12.0581 12.4449 12.3207 12.1824C12.5832 11.9198 12.7307 11.5637 12.7307 11.1924V5.69916C12.7307 5.52366 12.6911 5.35043 12.6148 5.19237C12.5386 5.03431 12.4276 4.8949 12.2903 4.78566Z" fill="#A9ACAC"/>
                </svg>
                    <div className='live_count'>{props.exp}</div>
                </div>
                <div className='smoke'>{props.smoking ? "흡연자" : "비흡연자"}</div>
            </div>
        </div>
    )}
export default RegPeople