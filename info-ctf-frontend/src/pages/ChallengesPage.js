import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ChallengesContainer from '../containers/ChallengesContainer';

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

    return (
        <>
            <ChallengesPageBlock>
                <HeaderBlock>
                    <Header />
                </HeaderBlock>
                <ChallengesArea>
                    <ChallengesContainer />
                </ChallengesArea>
            </ChallengesPageBlock>
        </>
    );
};

export default ChallengesPage;