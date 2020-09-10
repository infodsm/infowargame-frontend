import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminChangeField, adminInitialize } from '../modules/adminlogin';
import AdminLoginForm from '../components/auth/AdminLoginForm';

const LoginContainer = () => {
    const dispatch = useDispatch();
    const { id, password } = useSelector(({ adminlogin }) => ({
        id: adminlogin.id,
        password: adminlogin.password,
    }));

    const onChange = useCallback(payload => dispatch(adminChangeField(payload)), [dispatch]);
    // 컴포넌트가 맨 처음 렌더링 될 때 인풋 초기화
    useEffect(() => {
        dispatch(adminInitialize());
    }, [dispatch]);

    return <AdminLoginForm
        onChangeField={onChange}
        id={id}
        password={password}
    />;
};


export default LoginContainer;