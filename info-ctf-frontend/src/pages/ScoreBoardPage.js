import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import RankContainer from '../containers/RankContainer';
import { Helmet } from 'react-helmet-async';


const MainBlock = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
height: 500%;
background: #000000;
/* flex로 내부 내용 중앙 정렬 */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: auto;

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 100%;
}
@media (max-width: 768px) {
    width: 100%;
}
`;



const ScoreBoardPage = () => {
    return (
        <>
            <Helmet>
                <title>랭킹 - INFO WARGAME</title>
            </Helmet>
            <MainBlock>
                <Header />
                <RankContainer />
            </MainBlock>
        </>
    );
};

export default ScoreBoardPage;


