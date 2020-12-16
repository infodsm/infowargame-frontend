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
cursor: pointer;
z-index: 0;
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
            <span>INFO CTF에 오신 것을 환영합니다!</span>
            <span style={{ fontSize: '40px' }}>-사이트를 이용하기 전 유의해야 할 사항-</span>
            <span style={{ fontSize: '24px' }}>* 여러분이 서버를 가지고 놀면 서버가 아야해요 ㅠㅠ</span>
            <span style={{ fontSize: '24px' }}>* 페이지에서 나가기전 로그아웃을 꼭! MyPage에서 해주세요!</span>
            <span style={{ fontSize: '24px' }}>* 사이트를 해하려고 하는 행위는 절.대.로 하지말아주세요.</span>
            <span style={{ fontSize: '24px' }}>* ex) 해킹, 디도스 공격 등등...</span>
            <span style={{ fontSize: '14px', color: 'black' }}>사이트 개발자: 전세훈, 김호준</span>
        </NotificationPageSpanBox>
    );
};

//  {login ? <StyledButton onClick={onLogout}>로그아웃</StyledButton> : <Link to="login"><StyledButton style={{ textDecoration: 'none', zIndex: 0 }}>로그인</StyledButton></Link>}

export default withRouter(NotificationPage);

