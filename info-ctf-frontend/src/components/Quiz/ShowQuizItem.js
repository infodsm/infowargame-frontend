import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { BsDownload } from "react-icons/bs";


const ShowQuizArea = styled.div`
width: 80%;
height: 80%;
margin-top: 70px;
border-radius: 5px;
border: none;
h1 {
    color: white;
}
`;

const QuizContent = styled.div`
width: 100%;
height: 50%;
border: none;
border-radius: 5px;
p {
    color: white;
    font-size: 30px;
}
`;

const InputArea = styled.div`
width: 100%;
border: none;
padding-bottom: 10px;
`;

const StyledInput = styled.input`
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 965px;
    height: 52px;
    left: 642px;
    top: 420px;
    background: #000000;
    border-radius: 3px;
    text-align: justify;
    color: white;
`;

const StyledIdInput = styled.input`
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    border-right: none;
    box-sizing: border-box;
    width: 90%;
    height: 52px;
    left: 642px;
    top: 420px;
    background: #000000;
    border-radius: 3px;
    color: white;
    text-align: justify;
`;

const StyledIdButton = styled.button`
position: absolute;
font-size: 2rem;
border-right: 2px solid #FFFFFF;
border-left: none;
border-top: 2px solid #FFFFFF;
border-bottom: 2px solid #FFFFFF;
outline: none;
box-sizing: border-box;
width: 70px;
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


const ShowQuizItem = ({ data }) => {
    const { name, contents, score } = data;
    return (
        <>
            <Header />

            <ShowQuizArea>
                <h1>{name}</h1>
                <hr />
                <QuizContent>
                    <p>{contents}</p>
                </QuizContent>
                <InputArea>
                    <StyledIdInput type="readonly" value="id"></StyledIdInput>
                    <StyledIdButton><BsDownload /></StyledIdButton>
                </InputArea>
                <StyledInput type="readonly" value="Insert flag"></StyledInput>
                <StyledButton>제출</StyledButton>
            </ShowQuizArea>
        </>
    );
};

export default ShowQuizItem;