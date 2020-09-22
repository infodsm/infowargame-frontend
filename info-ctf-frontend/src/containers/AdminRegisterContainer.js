import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminRegisterChangeField, adminRegisterInitialize, adminRegisterPost } from '../modules/adminregister';
import AdminRegisterForm from '../components/auth/AdminRegisterForm';
import { idCheck } from '../modules/idcheck';

const AdminRegisterContainer = ({ location, history }) => {
    const dispatch = useDispatch();
    const { adminregister, id, password, nickname, idcheck, error, code } = useSelector(({ adminregister, idcheck }) => ({
        id: adminregister.id,
        password: adminregister.password,
        nickname: adminregister.nickname,
        code: adminregister.code,
        idcheck: idcheck.idcheck,
        error: idcheck.error,
        adminregister: adminregister.adminregister,
    }));

    var userid = id;


    // 아이디 중복 체크
    const idCheckSubmit = () => {
        dispatch(idCheck({ userid }));
    };

    // 어드민 회원가입
    const onSubmit = e => {
        e.preventDefault();
        dispatch(adminRegisterPost({ id, password, nickname, code }));
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
            if (idcheck.check === true)
                alert('아이디가 사용 가능합니다.');
        }
        if (idcheck) {
            if (idcheck.check === false)
                alert("아이디가 사용 불가능합니다.");
        }
        if (idcheck) {
            if (error)
                alert("오류발생");
        }
    }, [idcheck, dispatch, error]);

    // 어드민 회원가입 성공 여부 확인
    useEffect(() => {
        if (adminregister) {
            if (adminregister.check === true) {
                alert("회원가입이 완료되었습니다!");
                history.push('/adminlogin');
            }
            if (adminregister.check === false) {
                alert("회원가입 실패");
            }
        }
    }, [history, adminregister]);


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