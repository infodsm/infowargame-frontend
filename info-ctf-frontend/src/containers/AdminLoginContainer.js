import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { adminChangeField, adminInitialize, adminloginPost } from '../modules/adminlogin';
import AdminLoginForm from '../components/auth/AdminLoginForm';

const AdminLoginContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { id, password, adminlogin, } = useSelector(({ adminlogin }) => ({
        id: adminlogin.id,
        password: adminlogin.password,
        adminlogin: adminlogin.adminlogin,
    }));

    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(adminChangeField(payload)), [dispatch]);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(adminInitialize());
    }, [dispatch]);

    // 컴포넌트가 언마운트될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(adminInitialize());
        }
    }, [dispatch]);

    // 로그인 요청
    const onSubmit = e => {
        e.preventDefault();
        dispatch(adminloginPost({ id, password }));
    };

    // 로그인 성공 여부 확인
    useEffect(() => {
        if (adminlogin) {
            if (adminlogin.check === true || adminlogin.token) {
                alert("로그인 성공");
                localStorage.setItem("user", JSON.stringify(adminlogin.token)); // localStorage에 토큰 저장
                history.push('/loginafter');    // 마이페이지로 이동
            }
        }
        if (adminlogin) {
            if (adminlogin.check === false || adminlogin.token === null) {
                alert("로그인 실패");   // 로그인 실패 처리
                history.push('/');
            }
        }
    }, [history, adminlogin]);

    return <AdminLoginForm
        onChangeField={onChange}
        onSubmit={onSubmit}
        id={id}
        password={password}
    />;
};


export default withRouter(AdminLoginContainer);