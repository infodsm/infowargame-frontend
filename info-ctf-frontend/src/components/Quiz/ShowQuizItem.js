import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import { BsDownload } from "react-icons/bs";


const ShowQuizitemBox = styled.div`
width: 80%;
height: 80%;
box-sizing: border-box;
background: #000000;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p {
    position: relative;
    top: 55px;
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
    width: 100%;
    height: 9.8%;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    background: #000000;
    border-radius: 3px;
    text-align: justify;
    color: white;

`;
/*     
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

*/

const StyledButton = styled.button`
position: relative;
font-size: 2rem;
left: 43.5%;
border-right: 2px solid #FFFFFF;
border-top: 2px solid #FFFFFF;
border-bottom: 2px solid #FFFFFF;
border-left: 2px solid #FFFFFF;
outline: none;
box-sizing: border-box;
width: 150px;
height: 52px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
&:hover {
    cursor: pointer;
}
`;

const ShowQuizContent = styled.textarea`
width: 100%;
height: 80%;
border: none;
margin-top: 5px;
border-radius: 5px;
background: black;
color: white;
resize: none;
font-size: 25px;
border: 1px solid white;

    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
    width: 100%;
    }
`;

const Rectangle = styled.div`
position: relative;
width: 100%;
height: 3px;
background: white;
border-radius: 5px;
`;


const ShowQuizItem = ({ loadquiz, flag, loading, onChangeField, onSubmit, onDownload, quiz_code, onCheckAnswer, admin }) => {

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
            <ShowQuizitemBox>
               <p>*유의사항* : 파일은 모두 zip 형식으로 다운로드됩니다.</p>
               <p>*유의사항* 파일 용량이 클 경우 다운로드에 시간이 걸릴 수도 있습니다.</p>
               {admin ? <StyledButton>문제 삭제</StyledButton> : <StyledButton><BsDownload /></StyledButton> }
                <Rectangle />
                <ShowQuizContent disabled>퀴즈가 존재하지 않습니다.</ShowQuizContent>
                <StyledInput type="readonly" ></StyledInput>
                <StyledInput placeholder="flag" name="flag" onChange={onChange} type="text" value={flag} ></StyledInput>
                <button style={{width: '80%', color: 'white', marginBottom: '10px', background: 'black', border: '1px solid white', cursor: 'pointer'}}>제출</button>
            </ShowQuizitemBox>
            </>
        );
    }

    const { content, file } = loadquiz;


    return (
        <>
            <Header />
            <ShowQuizitemBox>
               <p>*유의사항* : 파일은 모두 zip 형식으로 다운로드됩니다.</p>
               <p>*유의사항* 파일 용량이 클 경우 다운로드에 시간이 걸릴 수도 있습니다.</p>
               {admin ? <StyledButton onClick={onSubmit}>문제 삭제</StyledButton> : <StyledButton onClick={onClick}><BsDownload /></StyledButton> }
                <Rectangle />
                <ShowQuizContent disabled>{content}</ShowQuizContent>
                <StyledInput type="readonly" value={file} ></StyledInput>
                <StyledInput placeholder="flag" name="flag" onChange={onChange} type="text" value={flag} ></StyledInput>
                <button onClick={checkAnswer} style={{width: '80%', color: 'white', marginBottom: '10px', background: 'black', border: '1px solid white', cursor: 'pointer'}}>제출</button>
            </ShowQuizitemBox>
        </>
    );
};

export default ShowQuizItem;
