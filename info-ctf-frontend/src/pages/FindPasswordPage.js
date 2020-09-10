import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import FindPasswordContainer from '../containers/FindPasswordContainer';

/* 화면 전체를 채움 */
const FindPasswordPageBlock = styled.div`
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



const FindPasswordPage = () => {
    return (

        <FindPasswordPageBlock>
            <Header />
            <FindPasswordContainer />
        </FindPasswordPageBlock>
    );
};

export default FindPasswordPage;