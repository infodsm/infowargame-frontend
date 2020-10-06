import React, { useEffect, useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminRegisterChangeField, adminRegisterInitialize, adminRegisterPost } from '../modules/adminregister';
import AdminRegisterForm from '../components/auth/AdminRegisterForm';
import { idCheck, idinitialize } from '../modules/idcheck';

const AdminRegisterContainer = ({ location, history }) => {
    const [getidcheck, setidcheck] = useState(false);
    const dispatch = useDispatch();
    const { adminregister, id, password, nickname, idcheck, error, code, adminerror, } = useSelector(({ adminregister, idcheck }) => ({
        id: adminregister.id,
        password: adminregister.password,
        nickname: adminregister.nickname,
        code: adminregister.code,
        idcheck: idcheck.idcheck,
        error: idcheck.error,
        adminregister: adminregister.adminregister,
        adminerror: adminregister.error,
    }));

    // 아이디 중복 체크
    const idCheckSubmit = () => {
        dispatch(idCheck({ id }));
    };

    // 어드민 회원가입
    const onSubmit = e => {
        e.preventDefault();
        if (getidcheck === true) {
            dispatch(adminRegisterPost({ id, password, nickname, code }));
        }
        if ([id, password, nickname, code].includes('')) {
            alert('빈 칸을 모두 입력하세요.');
        }
        if (getidcheck === false) {
            alert("ID 중복체크가 완료되지 않았습니다.");
        }
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
        if (idcheck) {
            alert('아이디가 사용 가능합니다.');
            setidcheck(true);
            dispatch(idinitialize());
        }
        if (error) {
            alert("아이디가 사용 불가능합니다.");
            dispatch(idinitialize());
        }
    }, [idcheck, error, getidcheck, dispatch]);

    // 어드민 회원가입 성공 여부 확인
    useEffect(() => {
        if (adminregister) {
            alert("회원가입이 완료되었습니다!");
            history.push('/adminlogin');
        }
        if (adminerror) {
            alert("회원가입 실패");
        }
    }, [adminregister, adminerror, history]);


    return <AdminRegisterForm
        onChangeField={onChangeField}
        idCheckSubmit={idCheckSubmit}
        id={id}
        password={password}
        nickname={nickname}
        code={code}
        onSubmit={onSubmit}
    />;
};


export default withRouter(AdminRegisterContainer);