import React, { useEffect, useCallback } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminRegisterChangeField, adminRegisterInitialize } from '../modules/adminregister';
import AdminRegisterForm from '../components/auth/AdminRegisterForm';
import { idCheck, idUnload } from '../modules/idcheck';
import { sendEmail } from '../modules/sendemail';
import { getEmail } from '../modules/getemail';

const AdminRegisterContainer = ({ location }) => {
    const dispatch = useDispatch();
    const { id, password, nickname, email, team, check, error, code, idcheck, sendemail, getemail, } = useSelector(({ adminregister, idcheck, sendemail, getemail }) => ({
        id: adminregister.id,
        password: adminregister.password,
        nickname: adminregister.nickname,
        email: adminregister.email,
        team: adminregister.team,
        code: adminregister.code,
        idcheck: idcheck.idcheck,
        check: idcheck.check,
        error: idcheck.error,
        sendEmail: sendemail.sendemail,
        EmailCheck: sendemail.EmailCheck,
        getemail: getemail.getemail,

    }));
    // 아이디 중복확인
    const idCheckSubmit = () => {
        const { id } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(idCheck({ id }));
    };
    // 이메일 인증 보내기
    const sendEmailSubmit = () => {
        const { email } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(sendEmail({ email }));
    };
    // 이메일 인증 받기
    const getEmailSubmit = () => {
        const { id } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        const { code } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(getEmail({ id, code }));
    };
    // 인풋 값 변경하기
    const onChangeField = useCallback(payload => dispatch(adminRegisterChangeField(payload)), [dispatch]);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(adminRegisterInitialize());
    }, [dispatch]);

    // 언마운트 될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(adminRegisterInitialize());
        }
    }, [dispatch]);


    // ID 중복 체크 성공여부 확인
    useEffect(() => {
        if (check) {
            alert('아이디가 사용 가능합니다.');
        }
        if (check === false) {
            alert("아이디 사용 불가능");
            dispatch(idUnload());
            console.log(error);
        }
    }, [check, dispatch, error]);


    return <AdminRegisterForm
        onChangeField={onChangeField}
        idCheckSubmit={idCheckSubmit}
        sendEmailSubmit={sendEmailSubmit}
        getEmailSubmit={getEmailSubmit}
        id={id}
        password={password}
        nickname={nickname}
        email={email}
        team={team}
        code={code}
    />;
};


export default withRouter(AdminRegisterContainer);