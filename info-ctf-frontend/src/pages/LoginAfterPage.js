import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import MypageContainer from '../containers/MypageContainer';

/* 화면 전체를 채움 */
const LoginAfterPageBlock = styled.div`
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



const LoginAfterPage = () => {
    return (
        <>
            <LoginAfterPageBlock>
                <Header />
                <MypageContainer />
            </LoginAfterPageBlock>
        </>
    );
};

export default LoginAfterPage;