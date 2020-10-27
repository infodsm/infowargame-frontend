import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import ChallengesContainer from '../containers/ChallengesContainer';
import { Link } from 'react-router-dom';

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
height: 400%;
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

const StyledButton = styled.button`
position: relative;
font-size: 1rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 109.5px;
height: 51px;
left: 1045px;
background: #000000;
border-radius: 3px;
text-align: center;
color: grey;
cursor: pointer;
color: white;
text-decoration: none;
p {
    color: white;
    margin-top: 10px;
}
`;


const ChallengesPage = () => {

    const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;

    return (
        <>
            <ChallengesPageBlock>
                <HeaderBlock style={{ marginTop: '-135px' }}>
                    <Header />
                </HeaderBlock>
                <ChallengesArea>
                    {admin ? <StyledButton><Link to="/makequiz"><p>문제 만들기</p></Link></StyledButton> : null}
                    <ChallengesContainer />
                </ChallengesArea>
            </ChallengesPageBlock>
        </>
    );
};

export default ChallengesPage;