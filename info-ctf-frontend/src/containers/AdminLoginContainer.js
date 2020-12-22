import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, admininitialize, adminloginPost } from '../modules/adminlogin';
import AdminLoginForm from '../components/auth/AdminLoginForm';
import { setCookie, getCookie } from '../lib/cookie';


const AdminLoginContainer = ({ history, empowerment }) => {
    const dispatch = useDispatch();
    const { id, password, adminlogin, error, admin } = useSelector(({ adminlogin }) => ({
        adminlogin: adminlogin.adminlogin,
        id: adminlogin.id,
        password: adminlogin.password,
        error: adminlogin.error,
        admin: adminlogin.admin,
    }));

    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(admininitialize());
    }, [dispatch]);

    // 컴포넌트가 언마운트될 때 인풋 초기화
    /* useEffect(() => {
        return () => {
            dispatch(admininitialize());
        }
    }, [dispatch]);
    */

    // 로그인 요청
    const onSubmit = e => {
        dispatch(adminloginPost({ id, password }));
    };

    // 로그인 성공 여부 확인
    useEffect(() => {
        if (adminlogin) {
            alert("로그인 성공");
            setCookie("user", adminlogin.token, 1);
            // localStorage.setItem("admin", JSON.stringify(adminlogin.token)); // localStorage에 토큰 저장
            history.push('/notification');    // 마이페이지로 이동
        }
        if (error) {
            if (error) {
                alert("로그인 실패");
                history.push('/adminlogin');
            }
        }
    }, [history, adminlogin, error, dispatch]);

    return <AdminLoginForm
        onChangeField={onChange}
        onSubmit={onSubmit}
        id={id}
        password={password}
    />;
};


export default withRouter(AdminLoginContainer);