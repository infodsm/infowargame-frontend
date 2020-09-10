import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import UserContainer from '../containers/UserContainer';

/* 화면 전체를 채움 */
const UserPageBlock = styled.div`
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

const UserPageArea = styled.div`
width: 80%;
height: 75%;
background: #000000;

p {
    position: absolute;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 43px;
    color: white;
}

#text1 {
    margin-left: 50px;
}

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}

`;


const UserPage = () => {
    return (
        <>
            <UserPageBlock>
                <Header />
                <UserPageArea>
                    <UserContainer />
                </UserPageArea>
            </UserPageBlock>
        </>
    );
};

export default UserPage;