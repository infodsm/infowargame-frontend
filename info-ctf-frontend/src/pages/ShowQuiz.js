import React from 'react';
import styled from 'styled-components';
import ShowQuizitem from '../components/Quiz/ShowQuizItem';

/* 화면 전체를 채움 */
const ShowQuizBlock = styled.div`
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
`;

const sampledata = {
    name: "Test",
    contents: "HTTP는 웹상에서 클라이언트와 서버 간에 요청/응답으로 데이터를 주고받을 수 있는 프로토콜입니다. 클라이언트가 HTTP 프로토콜을 통해 서버에게 요청을 보내면 서버는 요청에 맞는 응답을 클라이언트에게 전송합니다.",
    score: "10점"
};

const ShowQuiz = () => {

    return (
        <>
            <ShowQuizBlock>
                <ShowQuizitem data={sampledata} />
            </ShowQuizBlock>
        </>
    );
};

export default ShowQuiz;