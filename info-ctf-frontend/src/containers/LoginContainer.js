import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, loginPost } from '../modules/login';
import LoginForm from '../components/auth/LoginForm';

const LoginContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { id, password, login, logged, } = useSelector(({ login }) => ({
        id: login.id,
        password: login.password,
        login: login.login,
        logged: login.logged,
    }));

    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (token) {
            history.push('/notification');
        }
        if (!token) {
            history.push('/');
        }
    }, []);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    // 컴포넌트가 언마운트될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);

    // 로그인 요청
    const onSubmit = e => {
        dispatch(loginPost({ id, password }));
    };

    // 로그인 성공 여부 확인
    useEffect(() => {
        if (login) {
            if (login.check === true || login.token) {
                alert("로그인 성공");
                localStorage.setItem("user", JSON.stringify(login.token)); // localStorage에 토큰 저장
                localStorage.setItem("users", 'users');
                history.push('/notification');    // 공지로 이동
            }
        }
        if (login) {
            if (login.check === false || login.token === null || logged === false) {
                alert("로그인 실패");   // 로그인 실패 처리
                history.push('/');
            }
        }
    }, [history, login, logged]);

    return <LoginForm
        onChangeField={onChange}
        onSubmit={onSubmit}
        id={id}
        password={password}
    />;
};


export default withRouter(LoginContainer);