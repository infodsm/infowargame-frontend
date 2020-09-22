import React from 'react';
import styled from 'styled-components';


const MakeQuizArea = styled.div`
width: 80%;
height: 100%;
margin-top: 70px;
border-radius: 5px;
border: none;
h1 {
    color: white;
}
`;

const MakeQuizContent = styled.textarea`
width: 80%;
height: 60%;
border: none;
border-radius: 5px;
background: black;
color: white;
resize: none;
margin-left: 100px;
margin-top: 50px;
font-size: 25px;
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

const StyledShortInput = styled.input`
    font-size: 2rem;
    border: none;
    outline: none;
    border-bottom: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 20%;
    height: 52px;
    left: 542px;
    top: 420px;
    background: #000000;
    border-radius: 3px;
    color: white;
    text-align: justify;
    margin-left: 110px;
    margin-top: 30px;
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


const MakeQuizItem = ({ category, id, point, quizname, contents, makequiz, onChangeField, ChangeFile, onSubmit, fileDelete }) => {


    const onChangeFile = (e) => {
        ChangeFile(e.target.files[0]);
    };

    const onChange = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    return (
        <>
            <MakeQuizArea>
                <p style={{ fontSize: '18px', color: 'white', marginLeft: '110px' }}>문제 카테고리 : ( 1 : Cryptography / 2 : Forensics / 3 : MISC / 4 : Networking / 5 : Pwnable / 6 :  Reverse Engineering / 7 : Webhacking ) </p>
                <StyledShortInput name="category" value={category} placeholder="카테고리" onChange={onChange}></StyledShortInput>
                <StyledShortInput name="id" value={id} placeholder="만든사람 ID" onChange={onChange}></StyledShortInput>
                <StyledShortInput name="point" value={point} placeholder="점수" onChange={onChange}></StyledShortInput>
                <br />
                <br />
                <StyledInput name="quizname" placeholder="문제제목" value={quizname} onChange={onChange} style={{ border: 'none', outline: 'none', borderBottom: '2px solid #FFFFFF', boxSizing: 'border-box', marginLeft: '100px', width: '70.5%', }}></StyledInput>
                <StyledButton style={{ marginRight: '85.5px', border: 'none', borderBottom: '2px solid #FFFFFF', color: 'red' }}>문제삭제</StyledButton>
                <MakeQuizContent name="contents" value={contents} onChange={onChange}>
                    문제 내용
                </MakeQuizContent>
                <InputArea>
                    <StyledInput name="file" type="file" onChange={onChangeFile} style={{ marginLeft: '100px', width: '54%' }}></StyledInput>
                    <StyledButton onClick={fileDelete} style={{ marginRight: '76px' }}>파일삭제</StyledButton>
                </InputArea>
                <StyledInput type="text" placeholder="insert flag" style={{ marginLeft: '100px', width: '67%' }}></StyledInput>
                <StyledButton style={{ marginRight: '75.5px' }} onClick={onSubmit}>만들기</StyledButton>
            </MakeQuizArea>
        </>
    );
};

export default MakeQuizItem;