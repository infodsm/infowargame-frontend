import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, registerPost } from '../modules/register';
import RegisterForm from '../components/auth/RegisterForm';
import { idCheck } from '../modules/idcheck';
import { sendEmail } from '../modules/sendemail';
import { getEmail } from '../modules/getemail';

const RegisterContainer = ({ location, history }) => {
    const dispatch = useDispatch();
    const { id, password, nickname, email, team, code, GetEmailCheck, getemailerror, register, idcheck, error, getemail } = useSelector(({ register, idcheck, getemail }) => ({
        id: register.id,
        password: register.password,
        nickname: register.nickname,
        email: register.email,
        team: register.team,
        code: register.code,
        register: register.register,
        registerError: register.registerError,
        idcheck: idcheck.idcheck,
        GetEmailCheck: getemail.GetEmailCheck,
        getemail: getemail.getemail,
        error: idcheck.error,
        getemailerror: getemail.error,

    }));


    // 아이디 중복 체크
    const idCheckSubmit = () => {
        console.log(id);
        dispatch(idCheck({ id }));
    };

    // 이메일 인증 보내기
    const sendEmailSubmit = () => {
        dispatch(sendEmail({ id, email }));
    };

    // 이메일 인증 받기
    const getEmailSubmit = () => {
        dispatch(getEmail({ id, code }));
    };
    // 회원가입
    const onSubmit = e => {
        e.preventDefault();
        if (GetEmailCheck === true) {
            dispatch(registerPost({ id, password, nickname, email, team }));
        }
        else {
            alert("이메일 인증이 완료되지 않았습니다.");
        }
    };
    // 인풋 값 변경
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    // 언마운트 될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);


    // ID 중복 체크 성공여부 확인
    useEffect(() => {
        if (idcheck) {
            alert('아이디가 사용 가능합니다.');
        }
        if (error) {
            alert("아이디가 사용 불가능합니다.");
        }
    }, [idcheck, error, dispatch]);

    // 이메일 인증 보내기 성공여부 확인
    useEffect(() => {
        if (getemail) {
            alert("이메일 인증 완료");
        }
        if (getemailerror) {
            alert("이미 있는 이메일입니다");
        }
    }, [getemail, getemailerror, dispatch]);

    // 회원가입 성공여부 확인
    useEffect(() => {
        if (register) {
            alert("회원가입이 완료되었습니다!");
            history.push('/');
        }
        if (!register) {
            alert("회원가입 실패");
        }
    }, [history, register]);


    return <RegisterForm
        onChangeField={onChangeField}
        idCheckSubmit={idCheckSubmit}
        sendEmailSubmit={sendEmailSubmit}
        getEmailSubmit={getEmailSubmit}
        onSubmit={onSubmit}
        id={id}
        password={password}
        nickname={nickname}
        email={email}
        team={team}
        code={code}
    />;
};


export default withRouter(RegisterContainer);