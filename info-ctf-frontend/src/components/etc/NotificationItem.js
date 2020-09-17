import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/login';
import { Link } from 'react-router-dom';

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

const StyledButton = styled.button`
position: absolute;
margin-top: -300px;
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 99.5px;
height: 52px;
left: 1302px;
top: 354px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
font-size: 20px;
`;

const NotificationPage = ({ data, history }) => {

    const [login, setLogin] = useState(null);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        alert("로그아웃 성공");
        history.push("/");
    };

    useEffect(() => {
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (token === null) {
            setLogin(false);
        }
        if (token) {
            setLogin(true);
        }
    }, []);

    const { contents } = data;
    return (
        <NotificationPageSpanBox>
            {login ? <StyledButton onClick={onLogout}>로그아웃</StyledButton> : <Link to="login"><StyledButton style={{ textDecoration: 'none' }}>로그인</StyledButton></Link>}
            <span>-공지-</span>
            <br />
            <span>{contents}</span>
        </NotificationPageSpanBox>
    );
};

export default withRouter(NotificationPage);

