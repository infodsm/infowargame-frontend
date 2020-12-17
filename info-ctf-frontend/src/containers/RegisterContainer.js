import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, registerPost } from '../modules/register';
import RegisterForm from '../components/auth/RegisterForm';
import { idCheck, idinitialize } from '../modules/idcheck';
import { sendEmail } from '../modules/sendemail';
import { getEmail, getemailinitialize } from '../modules/getemail';

const RegisterContainer = ({ location, history }) => {
    const dispatch = useDispatch();
    const { id, password, nickname, email, team, code, GetEmailCheck, getemailerror, register, registererror, idcheck, error, getemail } = useSelector(({ register, idcheck, getemail }) => ({
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
        registererror: register.error,

    }));


    // 아이디 중복 체크
    const idCheckSubmit = () => {
        idinitialize();
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
        if ([id, password, nickname, email, team].includes('')) {
            alert('빈 칸을 모두 입력하세요.');
        }
    };
    // 인풋 값 변경
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        idinitialize();
        dispatch(initialize());
    }, [dispatch]);

    // 언마운트 될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
            dispatch(getemailinitialize());
        }
    }, [dispatch]);


    // ID 중복 체크 성공여부 확인
    useEffect(() => {
        if (idcheck) {
            alert('아이디가 사용 가능합니다.');
            dispatch(idinitialize());
        }
        if (error) {
            alert("아이디가 사용 불가능합니다.");
            dispatch(idinitialize());
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
        if (registererror) {
            alert("회원가입 실패");
        }
    }, [register, registererror, history]);


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