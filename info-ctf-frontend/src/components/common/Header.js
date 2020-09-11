import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';


const HeaderBlock = styled.div`
    margin-top: 30px;
    position: relative;
    width: 90%;
    background: #white;


    li {
        list-style: none;
        float: left;
        font-weight: 300;
        font-family: Noto Sans KR;
        font-style: normal;
        font-size: 26px;
        line-height: 52px;
        color: white;
        margin-top: 20px;
    }

    .notice {
        margin-left: -50px;
        color: white;
    }

    .login {
        margin-right: -50px;
       
    }
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
height: 4rem;
display: flex;
align-items: center;
justify-content: space-between; /* 자식 사이의 여백을 최대로 설정 */

.logo {
    width: 297px;
    height: 156px;
    left: 841px;
    top: 70px;
    margin-top: 140px;
}

img {
    width: 100%;
    height: 104%;   
    left: 841px;
    top: 70px;
}
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아리에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
height: 4rem;
`;

const Rectangle = styled.div`
position: relative;
width: 1300px;
height: 5px;
left: 30px;
top: 10px;

background: linear-gradient(90.16deg, #C189D5 0%, #A5E5F3 100%);
border-radius: 5px;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Rectangle />
                <Wrapper>
                    <li className="notice">
                        <Link to="/notification" style={{ textDecoration: 'none', color: '#FF89FF' }}  >
                            <span style={{ color: 'linear-gradient(90.16deg, #C189D5 0%, #A5E5F3 100%)' }}>
                                Notifications
                            </span>
                        </Link></li>
                    <li className="scoreboard">
                        <Link to="/scoreboard" style={{ textDecoration: 'none', color: '#FF89FF' }}>
                            ScoreBoard
                    </Link></li>
                    <div className="logo"><Link to="/notification"><img src="/images/logo.png" alt="logo" style={{ textDecoration: 'none' }} /></Link></div>
                    <li><Link to="/challenges" style={{ textDecoration: 'none', color: '#FF89FF' }}>Challenges</Link></li>

                    <li className="user"><Link to="/user" style={{ textDecoration: 'none', color: '#FF89FF' }}>User</Link></li>

                    <li className="login"><Link to="/loginafter" style={{ textDecoration: 'none', color: '#FF89FF' }}>MyPage</Link></li>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;