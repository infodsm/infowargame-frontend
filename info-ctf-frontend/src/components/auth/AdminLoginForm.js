import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setCookie } from '../../lib/cookie';
import { withRouter, Redirect } from 'react-router-dom';

const AdminLoginArea = styled.div`
    padding: 2rem;
    width: 100%;
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
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    
    h1 {
        color: white;
    }
    font-family: 'Do Hyeon', sans-serif;
    color: white;
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

const AdminLoginForm = ({ id, password, onChangeField, onSubmit, history }) => {

    const onChange = e => {
        const { name } = e.target;
        onChangeField({ key: name, value: e.target.value });
    }

    // const [login, setLogin] = useState({ id: '', password: '' });

    /* const onChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }; */

    /* const onSubmit = e => {
        e.preventDefault();
        axios.post(("http://211.35.225.252:4000/api/admin/login"), {
            id: login.id,
            password: login.password,
        }).then(result => {
            if (result.status === 201) {   // 예외 처리
                alert("로그인 성공!");
                if (!result.data.token) {
                    alert("에러");
                    return;
                }
                setCookie("user", result.data.token);
                localStorage.setItem("admin", 'admin');
                history.push('/notification');
            }
            else if (result.status === 403) {
                alert("로그인 실패");
                return <Redirect to="/adminlogin" />
            }
        })
    }
    */

    return (
        <>
            <AdminLoginArea>
                <h1>어드민 로그인</h1>
                <StyledInput name="id" onChange={onChange} value={id} placeholder="id" />
                <br />
                <StyledInput type="password" name="password" onChange={onChange} value={password} placeholder="password" />
                <br />
                <div className="ButtonArea">
                    <StyledButton><Link to="/adminregister" style={{ textDecoration: 'none', color: 'white' }}>sign in</Link></StyledButton>
                            &nbsp;
                        <StyledButton onClick={onSubmit}>login</StyledButton>
                </div>
                <span className="findpassword"><Link to="/findpassword" style={{ textDecoration: 'none', color: 'gray' }}>find password</Link></span>
            </AdminLoginArea>
        </>
    );

};

export default withRouter(AdminLoginForm);
