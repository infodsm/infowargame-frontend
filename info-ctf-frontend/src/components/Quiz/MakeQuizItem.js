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

font-family: 'Do Hyeon', sans-serif;
color: white;  
`;

const MakeQuizContent = styled.textarea`
width: 80%;
height: 50%;
border: none;
border-radius: 5px;
background: black;
color: white;
resize: none;
margin-left: 100px;
margin-top: 50px;
font-size: 25px;
border: 1px solid white;
`;

const InputArea = styled.div`
width: 100%;
border: none;
padding-bottom: 10px;
`;

const StyledSelect = styled.select`
    position: relative;
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 250px;
    height: 50px;
    left: 100px;
    background: #000000;
    border-radius: 3px;
    text-align: center;
    color: white;
`;

const StyledInput = styled.input`
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 965px;
    height: 60px;
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
width: 130px;
height: 60px;
right: 240px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
&:hover {
    cursor: pointer;
}
`;


const MakeQuizItem = ({ category, point, quizname, contents, makequiz, onChangeField, ChangeFile, onSubmit, fileDelete, flag }) => {


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
                <p style={{ fontSize: '18px', color: 'white', marginLeft: '110px' }}>*주의사항* : 파일을 첨부할 때는 꼭 zip 파일로 압축해서 넣어야 합니다. </p>
                <StyledSelect name="category" onChange={onChange} value={category}>
                    <option value="1">Cryptography</option>
                    <option value="2">Forensics</option>
                    <option value="3">MISC</option>
                    <option value="4">Networking</option>
                    <option value="5">Pwnable</option>
                    <option value="6">Reverse Engineering</option>
                    <option value="7">Webhacking</option>
                </StyledSelect>
                <StyledShortInput name="point" value={point} placeholder="점수" onChange={onChange}></StyledShortInput>
                <br />
                <br />
                <StyledInput name="quizname" placeholder="문제제목" value={quizname} onChange={onChange} style={{ border: 'none', outline: 'none', borderBottom: '2px solid #FFFFFF', boxSizing: 'border-box', marginLeft: '100px', width: '80%', }}></StyledInput>
                <MakeQuizContent name="contents" value={contents} onChange={onChange}>
                    문제 내용
                </MakeQuizContent>
                <InputArea>
                    <StyledInput name="file" type="file" onChange={onChangeFile} style={{ marginLeft: '100px', width: '77.5%' }}></StyledInput>
                </InputArea>
                <StyledInput name="flag" type="text" value={flag} onChange={onChange} placeholder="insert flag" style={{ marginLeft: '100px', width: '70%' }}></StyledInput>
                <StyledButton style={{ marginRight: '86px' }} onClick={onSubmit}>만들기</StyledButton>
            </MakeQuizArea>
        </>
    );
};

export default MakeQuizItem;