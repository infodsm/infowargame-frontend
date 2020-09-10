import React from 'react';
import styled from 'styled-components';

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
    height: 292px;
    background: #000000;
    padding: 1.5rem;
    border-radius: 4px;
    border: 2px solid #FFFFFF;
    margin-left: 480px;

    .inputs {
        margin-top: 60px;
        display: flex;
        justify-content: flex-end;
    }

    .buttons {
        display: flex;
        justify-content: flex-end;
    }
`;

const StyledInput = styled.input`
    font-size: 2rem;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    width: 80%;
    height: 52px;
    left: 642px;
    top: 420px;
    background: #000000;
    border-radius: 4px;
    text-align: center;
    color: white;
`;

const StyledButton = styled.button`
font-size: 2rem;
border: 2px solid #FFFFFF;
box-sizing: border-box;
width: 100px;
height: 52px;
left: 642px;
top: 420px;
background: #000000;
border-radius: 3px;
text-align: center;
color: white;
`;

const AskModal = ({
    visible,
    conFirmText = "닫기",
    onConfirm,
    onCancel,
    onChange,
    onClick,
}) => {
    if (!visible) return null;
    return (
        <FullScreen>
            <AskModalBlock>
                <div className="inputs">
                    <StyledInput name="code" style={{ borderRadius: '5px', border: '2px solid #FFFFFF', }} placeholder="E-mail Check" onChange={onChange} />
                    &nbsp;&nbsp;
                    <StyledButton onClick={onClick}>V</StyledButton>
                </div>
                <div className="buttons">
                    <StyledButton style={{ marginTop: '60px' }} onClick={onCancel}>{conFirmText}</StyledButton>
                </div>
            </AskModalBlock>
        </FullScreen>
    );
};

export default AskModal;
