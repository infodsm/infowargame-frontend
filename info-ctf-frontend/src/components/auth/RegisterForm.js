import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import AskCheckModal from './AskCheckModal';


const RegisterArea = styled.div`
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


const RegisterForm = ({ userid, password, nickname, email, team, code, onChangeField, idCheckSubmit, sendEmailSubmit, getEmailSubmit, onSubmit }) => {

    const [modal, setModal] = useState(false);

    const onRemoveClick = () => {
        setModal(true);
    };

    const onCancel = () => {
        setModal(false);
    };

    const onConfirm = () => {
        setModal(false);
    };

    const onChangeInput = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    return (
        <>

            <Header />
            <RegisterArea>
                <StyledInput name="userid" placeholder="id" onChange={onChangeInput} value={userid} />
                <StyledButton style={{ marginLeft: '720px', marginTop: '-52px', width: '100px', fontSize: '16px' }} onClick={idCheckSubmit}>중복확인</StyledButton>
                <br />
                <StyledInput name="password" type="password" placeholder="password" onChange={onChangeInput} value={password} />
                <br />
                <StyledInput name="nickname" placeholder="nickname" onChange={onChangeInput} value={nickname} />
                <br />
                <StyledInput name="email" placeholder="email" onChange={onChangeInput} value={email} />
                <StyledButton style={{ marginLeft: '720px', marginTop: '-52px', width: '100px', fontSize: '16px' }} onClick={sendEmailSubmit}>이메일확인</StyledButton>
                <StyledButton style={{ marginLeft: '950px', marginTop: '-52px', width: '100px', fontSize: '16px' }} onClick={onRemoveClick}>코드입력</StyledButton>
                <StyledInput name="team" placeholder="team" style={{ marginTop: '20px' }} onChange={onChangeInput} value={team} />
                <br />
                <div className="ButtonArea">
                    <StyledButton onClick={onSubmit}>sign in</StyledButton>
                            &nbsp;
                        <StyledButton><Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>login</Link></StyledButton>
                </div>

                <div className="ModalArea">
                    <AskCheckModal
                        classNmae="modal"
                        visible={modal}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        onChange={onChangeInput}
                        onClick={getEmailSubmit} />
                </div>
            </RegisterArea>
        </>
    );
};

export default RegisterForm;