import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { BsDownload } from "react-icons/bs";


const ShowQuizitemBox = styled.div`
width: 100%;
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

const QuizContent = styled.div`
position: absolute;
width: 90%;
height: 80%;
right: 100px;
left: 100px;
border: none;
border-radius: 5px;

p {
    color: white;
    font-size: 30px;
}
`;


const StyledInput = styled.input`
    position: absolute;
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 925px;
    height: 52px;
    background: #000000;
    border-radius: 3px;
    border-right: none;
    text-align: justify;
    color: white;

    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 1000px) {
        width: 50%;
    }
    @media (max-width: 900px) {
        width: 40%;
    }
    @media (max-width: 768px) {
    width: 10%;
    }
`;


const StyledButton = styled.button`
position: absolute;
font-size: 2rem;
border-right: 2px solid #FFFFFF;
border-top: 2px solid #FFFFFF;
border-bottom: 2px solid #FFFFFF;
border-left: 2px solid #FFFFFF;
outline: none;
box-sizing: border-box;
width: 150px;
height: 52px;
right: 210px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
&:hover {
    cursor: pointer;
}
`;

const ShowQuizContent = styled.textarea`
position: absolute;
width: 82%;
height: 50%;
border: none;
border-radius: 5px;
background: black;
color: white;
resize: none;
left: 100px;
top: 130px;
font-size: 25px;

    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
    width: 100%;
    }
`;


const ShowQuizItem = ({ loadquiz, flag, loading, onChangeField, onSubmit, onDownload, quiz_code, onCheckAnswer }) => {

    const onChange = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    const checkAnswer = e => {
        onCheckAnswer(quiz_code);
    };

    const onClick = e => {
        if (loadquiz.file === null) {
            alert("다운로드할 파일이 없습니다.");
        }
        if (loadquiz.file) {
            onDownload(quiz_code);
        }
    };

    const admin = localStorage.getItem("admin") ? localStorage.getItem("admin") : null;

    if (loading) {
        return (
            <>
                <Header />
                <ShowQuizitemBox>
                    <QuizContent>
                        <hr style={{ width: "1125px", marginRight: '150px', marginTop: '100px' }} />
                        <ShowQuizContent>로딩중입니다.</ShowQuizContent>
                        <StyledInput style={{ top: '450px', left: '100px' }} type="readonly"></StyledInput>
                        <StyledButton style={{ top: '450px' }}><BsDownload /></StyledButton>
                        <StyledInput style={{ top: '520px', left: '100px' }}></StyledInput>
                        <StyledButton style={{ top: '520px' }}>제출</StyledButton>
                    </QuizContent>
                </ShowQuizitemBox>
            </>
        );
    }

    if (loadquiz === null) {
        return (
            <>
                <Header />
                <br />
                <ShowQuizitemBox>
                    <QuizContent>
                        <hr style={{ width: "1125px", marginRight: '150px', marginTop: '100px' }} />
                        <ShowQuizContent>퀴즈가 존재하지 않습니다.</ShowQuizContent>
                        <StyledInput style={{ top: '450px', left: '100px' }}></StyledInput>
                        <StyledButton style={{ top: '450px' }}><BsDownload /></StyledButton>
                        <StyledInput style={{ top: '520px', left: '100px' }}></StyledInput>
                        <StyledButton style={{ top: '520px' }}>제출</StyledButton>
                    </QuizContent>
                </ShowQuizitemBox>
            </>
        );
    }

    const { content, file } = loadquiz;


    return (
        <>
            <Header />
            <ShowQuizitemBox>
                <p style={{ position: 'relative', fontSize: '16px', color: 'white', right: '270px', bottom: '220px' }}>*유의사항* : 파일은 모두 zip 형식으로 다운로드됩니다. <br /> *유의사항* 파일 용량이 클 경우 다운로드에 시간이 걸릴 수도 있습니다.</p>
                {admin ? <StyledButton style={{ border: 'none', color: 'red', top: '199px', borderBottom: 'none', zIndex: '1' }} onClick={onSubmit}>문제삭제</StyledButton> : null}
                <QuizContent style={{ whiteSpace: 'pre' }}>
                    <hr style={{ width: "1125px", marginRight: '150px', marginTop: '100px' }} />
                    <ShowQuizContent disabled>{content}</ShowQuizContent>
                    <StyledInput style={{ top: '450px', left: '100px' }} type="readonly" value={file}></StyledInput>
                    <StyledButton style={{ top: '450px' }} onClick={onClick}><BsDownload /></StyledButton>
                    <StyledInput style={{ top: '520px', left: '100px' }} name="flag" onChange={onChange} type="text" value={flag} ></StyledInput>
                    <StyledButton style={{ top: '520px' }} onClick={checkAnswer}>제출</StyledButton>
                </QuizContent>
            </ShowQuizitemBox>
        </>
    );
};

export default ShowQuizItem;