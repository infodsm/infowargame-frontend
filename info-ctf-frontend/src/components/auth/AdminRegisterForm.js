import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { Link } from 'react-router-dom';



const AdminRegisterArea = styled.div`
    padding: 2rem;
    width: 560px;
    background: #000000;
    border-radius: 2px;
    height: 700px;
    margin-top: 100px;
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
        font-size: 35px;
        line-height: 51px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #5A5A5A;
        margin-right: 346px;
    }

    .modal {
        width: 400px;
        background: white;x
    }

    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    
    h1 {
        color: white;
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


const AdminRegisterForm = ({ id, password, nickname, code, onChangeField, onSubmit, idCheckSubmit }) => {

    const onChangeInput = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    return (
        <>

            <Header />
            <AdminRegisterArea>
                <h1>어드민 회원가입</h1>
                <StyledInput name="id" placeholder="id" onChange={onChangeInput} value={id} />
                <StyledButton style={{ marginLeft: '720px', marginTop: '-52px', width: '100px', fontSize: '16px' }} onClick={idCheckSubmit} >중복확인</StyledButton>
                <br />
                <StyledInput name="password" type="password" placeholder="password" onChange={onChangeInput} value={password} />
                <br />
                <StyledInput name="nickname" placeholder="nickname" onChange={onChangeInput} value={nickname} />
                <br />
                <StyledInput name="code" placeholder="code" onChange={onChangeInput} value={code} />
                <br />
                <div className="ButtonArea">
                    <StyledButton onClick={onSubmit}>sign in</StyledButton>
                            &nbsp;
                        <StyledButton><Link to="/adminlogin" style={{ textDecoration: 'none', color: 'white' }}>login</Link></StyledButton>
                </div>
            </AdminRegisterArea>
        </>
    );
};

export default AdminRegisterForm;