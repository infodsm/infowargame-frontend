import React from 'react';
import styled from 'styled-components';

const FindPasswordBox = styled.div`
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
    font-size: 60px;
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
`;

const StyledInput = styled.input`
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 600px;
    height: 52px;
    left: 642px;
    top: 420px;
    background: #000000;
    border-radius: 3px;
    text-align: center;
    color: white;
`;

const StyledButton = styled.button`
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 299.5px;
height: 52px;
left: 642px;
top: 420px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
cursor: pointer;
`;

const FindPasswordItem = ({ id, email, onChangeField, onSubmit }) => {

    const onChange = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    return (
        <>

            <FindPasswordBox>
                <StyledInput name="id" onChange={onChange} value={id} placeholder=" 아이디를 입력하세요."></StyledInput>
                <StyledInput name="email" onChange={onChange} value={email} placeholder=" 이메일을 입력하세요." style={{ marginTop: '30px' }}></StyledInput>
                <StyledButton onClick={onSubmit} style={{ marginTop: '50px' }}>제출</StyledButton>
            </FindPasswordBox>
        </>
    );
};

export default FindPasswordItem;