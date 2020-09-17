import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, userSearchPost } from '../modules/search';
import UserItem from '../components/table/UserItem';

const UserContainer = () => {
    const [info, setInfo] = useState(null);
    const dispatch = useDispatch();
    const { column, srch, search } = useSelector(({ search }) => ({
        search: search.search,
        column: search.column,
        srch: search.srch,
        error: search.error,
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

    // user 검색 api 요청
    const onSubmit = e => {
        e.preventDefault();
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (users) {
            dispatch(userSearchPost({ column, srch, token }));
        }
        if (admin) {
            alert("어드민은 유저검색이 되지 않습니다.");
        }
    };

    // user 검색 성공 여부 확인
    useEffect(() => {
        if (search) {

        }
    }, [search]);


    // user 정보 저장
    useEffect(() => {
        setInfo(search.contents);
    }, [search, info]);

    return (
        <UserItem onChangeField={onChange} onSubmit={onSubmit} column={column} srch={srch} information={info} />
    );
};

export default UserContainer;