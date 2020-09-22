import React from 'react';
import styled from 'styled-components';

const LoginAfterArea = styled.div`
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


const LoginAfterForm = ({ loading, mypage, onLogout, onChangeField, onSubmit, modifiedid, modifiedpassword, modifiednickname, modifiedemail, modifiedteam }) => {

    if (loading) {
        return <LoginAfterArea><h1 style={{ textDecoration: 'none', color: 'white' }}>로딩 중 입니다.</h1></LoginAfterArea>
    }

    if (mypage === null) {
        return <LoginAfterArea><h1 style={{ textDecoration: 'none', color: 'white' }}>존재하지 않는 계정정보입니다.</h1></LoginAfterArea>
    }

    if (!mypage) {
        console.log("오류발생");
        return null;
    }

    const onChangeInput = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    };

    const { id, nickname, email, score, team } = mypage;

    return (
        <>
            {/* 로딩 중이 아니고, mypage 데이터가 존재할 때만 보여줌 */}
            {!loading && mypage && (
                <LoginAfterArea>
                    <StyledInput type="text" name="id" placeholder={id} value={modifiedid} onChange={onChangeInput} />
                    <br />
                    <StyledInput type="text" name="email" placeholder={email} value={modifiedemail} onChange={onChangeInput} />
                    <br />
                    <StyledInput type="text" name="nickname" placeholder={nickname} value={modifiednickname} onChange={onChangeInput} />
                    <br />
                    <StyledInput type="text" name="team" placeholder={team} value={modifiedteam} onChange={onChangeInput} />
                    <br />
                    <StyledInput type="readonly" name="score" value={score} />
                    <br />
                    <div className="ButtonArea">
                        <StyledButton onClick={onLogout} style={{ textDecoration: 'none', color: 'white' }}>log out</StyledButton>
                            &nbsp;
                        <StyledButton onClick={onSubmit} style={{ textDecoration: 'none', color: 'white' }}>submit</StyledButton>
                    </div>
                </LoginAfterArea>
            )}
        </>
    );

};

export default LoginAfterForm;