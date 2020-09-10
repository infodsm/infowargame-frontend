import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginArea = styled.div`
    padding: 2rem;
    width: 600px;
    background: #000000;
    border-radius: 2px;
    height: 700px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ButtonArea {
        width: 604.5px;
    }

    .findpassword {
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: 300;
        font-size: 30px;
        line-height: 51px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #5A5A5A;
        margin-right: 350px;
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
`;



const LoginForm = ({ id, password, onChangeField, onSubmit }) => {

    const onChange = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    return (
        <>

            <LoginArea>
                <StyledInput name="id" placeholder="id" value={id} onChange={onChange} />
                <br />
                <StyledInput name="password" type="password" placeholder="password" value={password} onChange={onChange} />
                <br />
                <div className="ButtonArea">
                    <StyledButton><Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>sign in</Link></StyledButton>
                            &nbsp;
                        <StyledButton onClick={onSubmit}>login</StyledButton>
                </div>
                <span className="findpassword"><Link to="/findpassword" style={{ textDecoration: 'none', color: 'gray' }}>find password</Link></span>
            </LoginArea>

        </>
    );
};

export default LoginForm;