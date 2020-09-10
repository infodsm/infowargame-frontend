import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ChallengesItem from '../components/table/ChallengesItem';

/* 화면 전체를 채움 */
const ChallengesPageBlock = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: #000000;
/* flex로 내부 내용 중앙 정렬 */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 380%;
overflow: auto;
`;

const HeaderBlock = styled.div`
margin-bottom: 2710px;
background: ;
width: 99%;
margin-left: 139px;
`;

const ChallengesArea = styled.div`
position: absolute;
width: 80%;
height: 2520px; 
background: #000000;
bottom: 240px;
top: 300px;
overflow: auto;


/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}
`;


const ChallengesPage = () => {

    const [DataArray, setDataArray] = useState([
        {
            category: "Forensics",
            name: "포렌식문제",
            num: "1",
            point: 400,
        },
        {
            category: "Forensics",
            name: "포렌식문제2",
            num: "2",
            point: 500,
        },
        {
            category: "Pwnable",
            num: "3",
            name: "포렌식문제2",
            point: 600,
        },
        {
            category: "Cryptography",
            num: "4",
            name: "포렌식문제3",
            point: 700,
        },
        {
            category: "ReverseEngineering",
            num: "5",
            name: "포렌식문제4",
            point: 800,
        },
        {
            category: "Webhacking",
            num: "6",
            name: "포렌식문제5",
            point: 900
        },
        {
            category: "MISC",
            num: "7",
            name: "포렌식문제6",
            point: 100,
        },
        {
            category: "Networking",
            num: "8",
            name: "포렌식문제7",
            point: 400,
        },
        {
            category: "Forensics",
            name: "포렌식문제",
            num: "1",
            point: 400,
        },
        {
            category: "Forensics",
            name: "포렌식문제2",
            num: "2",
            point: 500,
        },
        {
            category: "Pwnable",
            num: "3",
            name: "포렌식문제2",
            point: 600,
        },
        {
            category: "Cryptography",
            num: "4",
            name: "포렌식문제3",
            point: 700,
        },
        {
            category: "ReverseEngineering",
            num: "5",
            name: "포렌식문제4",
            point: 800,
        },
        {
            category: "Webhacking",
            num: "6",
            name: "포렌식문제5",
            point: 900
        },
        {
            category: "MISC",
            num: "7",
            name: "포렌식문제6",
            point: 100,
        },
        {
            category: "Networking",
            num: "8",
            name: "포렌식문제7",
            point: 400,
        },
        {
            category: "Forensics",
            name: "포렌식문제",
            num: "1",
            point: 400,
        },
        {
            category: "Forensics",
            name: "포렌식문제2",
            num: "2",
            point: 500,
        },
        {
            category: "Pwnable",
            num: "3",
            name: "포렌식문제2",
            point: 600,
        },
        {
            category: "Cryptography",
            num: "4",
            name: "포렌식문제3",
            point: 700,
        },
        {
            category: "ReverseEngineering",
            num: "5",
            name: "포렌식문제4",
            point: 800,
        },
        {
            category: "Webhacking",
            num: "6",
            name: "포렌식문제5",
            point: 900
        },
        {
            category: "MISC",
            num: "7",
            name: "포렌식문제6",
            point: 100,
        },
        {
            category: "Networking",
            num: "8",
            name: "포렌식문제7",
            point: 400,
        },
    ]);

    return (
        <>
            <ChallengesPageBlock>
                <HeaderBlock>
                    <Header />
                </HeaderBlock>
                <ChallengesArea>
                    <ChallengesItem data={DataArray} />
                </ChallengesArea>
            </ChallengesPageBlock>
        </>
    );
};

export default ChallengesPage;