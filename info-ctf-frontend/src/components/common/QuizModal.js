import React from 'react';
import styled from 'styled-components';
import { RiCloseLine } from "react-icons/ri";

const FullScreen = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-contents: center;
    align-items: center;
`;

const AskModalBlock = styled.div`
    width: 520px;
    height: 692px;
    background: black;
    padding: 1.5rem;
    border-radius: 4px;
    border: 2px solid #FFFFFF;
    margin-left: 480px;
    color: black;
    overflow: auto;
    .buttons {
        display: flex;
        justify-content: flex-end;
    }
`;


const StyledButton = styled.button`
font-size: 2rem;
border: none;
box-sizing: border-box;
width: 100px;
height: 52px;
margin-left: 742px;
top: 420px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
`;

const QuizModal = ({
    visible,
    onCancel,
    quiz,
}) => {
    if (!visible) return null;
    // rank 값이 유효할 때 (렌더링 오류가 나지 않게 객체든 배열이든 꼭 이 유효성 검사를 해주어야 함)
    if (quiz === null) {
        return <AskModalBlock><h3 style={{ textDecoration: 'none', color: 'white', marginRight: '110px' }}>맞춘 문제가 없습니다.</h3></AskModalBlock>
    }

    return (
        <FullScreen>
            <AskModalBlock>
                <div className="buttons">
                    <StyledButton style={{ marginTop: '-20px', left: '100px' }} onClick={onCancel}><RiCloseLine style={{ left: '50px' }} /></StyledButton>
                </div>
                <h2 style={{ color: 'white', textAlign: 'center' }}>맞춘 문제 번호</h2>
                <div className="list">
                    <QuizRow quiz={quiz} />
                </div>
            </AskModalBlock>
        </FullScreen>
    );
};

const QuizRow = ({ quiz }) => {
    return (
        <>
            <div>
                <ul>
                    {quiz.map(q => (<QuizList key={q.quiz_id} quiz={q} />))}
                </ul>
            </div>
        </>
    );
}

// 검색결과 리턴된 배열의 내용을 보여주는 부분
const QuizList = ({ quiz }) => {
    const { quiz_id } = quiz;
    return (
        <li style={{ color: 'white' }}>{quiz_id}</li>
    );
}

export default QuizModal;
