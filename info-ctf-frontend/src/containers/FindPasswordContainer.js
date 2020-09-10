import React, { useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, findpasswordPost } from '../modules/findpassword';
import FindPasswordItem from '../components/etc/FindPasswordItem';

const LoginContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { id, email, findpassword, } = useSelector(({ findpassword }) => ({
        id: findpassword.id,
        email: findpassword.email,
        findpassword: findpassword.findpassword,
    }));


    // 인풋 값 업데이트
    const onChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    // 비밀번호 찾기 요청
    const onSubmit = e => {
        e.preventDefault();
        dispatch(findpasswordPost({ id, email }));
    };

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

    // 비밀번호 인증 성공 여부 검사
    useEffect(() => {
        if (findpassword) {
            if (findpassword.check === true)
                alert("바뀐 비밀번호가 이메일로 전송되었습니다.");
            history.push('/login');
        }
        if (findpassword) {
            if (findpassword.check === false)
                alert("바뀐 비밀번호 전송 실패");
        }
    }, [history, findpassword]);


    return <FindPasswordItem
        onChangeField={onChange}
        id={id}
        email={email}
        onSubmit={onSubmit}
    />;
};


export default withRouter(LoginContainer);