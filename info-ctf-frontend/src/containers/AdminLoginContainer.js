import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initialize, adminloginPost } from '../modules/adminlogin';
import AdminLoginForm from '../components/auth/AdminLoginForm';

// 해당 api를 위한 컨테이너는 사용되지 않음 (컴포넌트 단에서 api를 호출함)
const AdminLoginContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { id, password, adminlogin, } = useSelector(({ adminlogin }) => ({
        adminlogin: adminlogin.adminlogin,
        id: adminlogin.id,
        password: adminlogin.password,
    }));

    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

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
        dispatch(adminloginPost({ id, password }));
    };

    // 로그인 성공 여부 확인
    useEffect(() => {
        if (adminlogin) {
            if (adminlogin.check === true) {
                alert("로그인 성공");
                localStorage.setItem("admin", JSON.stringify(adminlogin.token)); // localStorage에 토큰 저장
                history.push('/');    // 마이페이지로 이동
            }
        }
        if (adminlogin) {
            if (adminlogin.check === false) {
                alert("로그인 실패");
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