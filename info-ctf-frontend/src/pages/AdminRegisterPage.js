import React from 'react';
import styled from 'styled-components';
import AdminRegisterContainer from '../containers/AdminRegisterContainer';
import { Helmet } from 'react-helmet-async';

/* 화면 전체를 채움 */
const AdminRegisterPageBlock = styled.div`
position: absolute;
left: 0;
top: 0;
bottom: 0;
right: 0;
background: #000000;
/* flex로 내부 내용 중앙 정렬 */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const AdminRegisterPage = () => {

    return (
        <>
            <Helmet>
                <title>어드민 회원가입 - INFO WARGAME</title>
            </Helmet>
            <AdminRegisterPageBlock>
                <AdminRegisterContainer />
            </AdminRegisterPageBlock>
        </>
    );
};

export default AdminRegisterPage;