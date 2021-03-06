import React from 'react';
import styled from 'styled-components';
import LoadQuizContainer from '../containers/LoadQuizContainer';
import { Helmet } from 'react-helmet-async';


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
height: 120%;
`;

const ShowQuiz = () => {

    return (
        <>
            <Helmet>
                <title>문제 풀기 - INFO WARGAME</title>
            </Helmet>
            <ShowQuizBlock>
                <LoadQuizContainer />
            </ShowQuizBlock>
        </>
    );
};

export default ShowQuiz;