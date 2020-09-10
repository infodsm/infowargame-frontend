import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import NotificationItem from '../components/etc/NotificationItem';

/* 화면 전체를 채움 */
const NotificationPageBlock = styled.div`
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

const data = {
    contents: "여러분이 서버를 가지고 놀면 서버가 아야해요 ㅠㅠ",
};

const NotificationPage = () => {
    return (

        <NotificationPageBlock>
            <Header />
            <NotificationItem data={data} />
        </NotificationPageBlock>
    );
};

export default NotificationPage;