import React from 'react';
import styled from 'styled-components';

const NotificationPageSpanBox = styled.div`
width: 80%;
margin-left: -10px;
height: 100%;
margin-bottom: -0px;
background: #00000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span {
    font-size: 50px;
    color: white;
    margin-top: 25px;
}

/* 브라우저 크기에 따라 가로 크기 변경 */
@media (max-width: 1024px) {
    width: 768px;
}
@media (max-width: 768px) {
    width: 100%;
}
`;

const NotificationPage = ({ data }) => {
    const { contents } = data;
    return (
        <NotificationPageSpanBox>
            <span>-공지-</span>
            <br />
            <span>{contents}</span>
        </NotificationPageSpanBox>
    );
};

export default NotificationPage;