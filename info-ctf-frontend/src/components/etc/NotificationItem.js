import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../modules/login';
import { Link } from 'react-router-dom';
import { getCookie, deleteCookie } from '../../lib/cookie';

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

font-family: 'Do Hyeon', sans-serif;
color: white;  
`;

const StyledButton = styled.button`
position: absolute;
margin-top: -300px;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 76px;
height: 52px;
left: 1330px;
top: 354px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
font-size: 15px;
`;

const NotificationPage = ({ data, history, location }) => {

    const [login, setLogin] = useState(null);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
        deleteCookie('user');
        alert("로그아웃 성공");
        window.location.reload();
    };

    useEffect(() => {
        const token = getCookie("user");
        if (token === null) {
            setLogin(false);
        }
        if (token) {
            setLogin(true);
        }
    }, []);

    return (
        <NotificationPageSpanBox>
            {login ? <StyledButton onClick={onLogout}>로그아웃</StyledButton> : <Link to="login"><StyledButton style={{ textDecoration: 'none' }}>로그인</StyledButton></Link>}
            <span>INFO CTF에 오신 것을 환영합니다!</span>
            <span style={{ fontSize: '40px' }}>-사이트를 이용하기 전 유의해야 할 사항-</span>
            <br />
            <span style={{ fontSize: '24px' }}>* 여러분이 서버를 가지고 놀면 서버가 아야해요 ㅠㅠ</span>
            <br />
            <span style={{ fontSize: '24px' }}>* 가끔 로그아웃 버튼을 눌러도 로그아웃 버튼이 로그인버튼으로 바뀌지 않는다면, <br />&nbsp;&nbsp;당황하지 마시고 한 번 더 로그아웃 버튼을 눌러주시면 정상적으로 바뀝니다.</span>
            <span style={{ fontSize: '14px', color: 'black' }}>사이트 개발자: 전세훈, 김호준</span>
        </NotificationPageSpanBox>
    );
};

export default withRouter(NotificationPage);

