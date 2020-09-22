import React, { useEffect, useState, useCallback } from 'react';
import LoginAfterForm from '../components/auth/LoginAfterForm';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mypagees } from '../modules/mypages';
import { logout } from '../modules/login';
import { changeField, initialize, modifiedPost } from '../modules/mypagemodified';


const MypageContainer = ({ history, location }) => {
    const [mypage, setMypage] = useState({});
    const dispatch = useDispatch();
    const { myPage, id, password, nickname, team, email, loading } = useSelector(({ mypages, mypagemodified, loading }) => ({
        myPage: mypages.myPage,
        error: mypages.error,
        mypagemodified: mypagemodified.mypagemodified,
        id: mypagemodified.id,
        password: mypagemodified.password,
        nickname: mypagemodified.nickname,
        team: mypagemodified.team,
        email: mypagemodified.email,
        loading: loading['mypages/MYPAGE'],
    }));

    // 로그아웃 (로컬스토리지에서 토큰을 삭제 후 로그인 페이지로 이동)
    const onLogout = () => {
        dispatch(logout());
        alert("로그아웃 성공");
        history.push("/");
    };

    // 페이지가 마운트(처음 보여질 때)될 때 마이페이지 api 요청
    useEffect(() => {
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (users) {
            dispatch(mypagees({ token }));
        }
        if (admin) {
            alert("어드민은 마이페이지 정보가 표시되지 않습니다.");
            history.goBack();
        }
    }, [dispatch, history]);

    // 마이페이지 수정 api 요청
    const onSubmit = e => {
        e.preventDefault();
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (users) {
            dispatch(modifiedPost({ id, password, nickname, team, email, token }));
            dispatch(logout());
            history.push('/');
        }
        if (admin) {
            alert("어드민은 마이페이지 정보가 표시되지 않습니다.");
            dispatch(logout());
            history.push('/notification');
        }
    };

    useEffect(() => {
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        if (users) {
            alert("마이페이지 정보 변경 시 재로그인 하셔야 합니다.");
        }
    }, []);

    // mypage 정보 저장
    useEffect(() => {
        setMypage(myPage);
    }, [mypage, myPage]);

    // 언마운트 될 때 인풋 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        }
    }, [dispatch]);

    // 인풋 값 변경
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    return (
        <LoginAfterForm loading={loading} mypage={mypage} onLogout={onLogout} onSubmit={onSubmit} onChangeField={onChangeField} modifiedid={id} modifiedemail={email} modifiednickname={nickname} modifiedteam={team} modifiedpassword={password} />
    );
};

export default withRouter(MypageContainer);