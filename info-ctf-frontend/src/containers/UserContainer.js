import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, userSearchPost } from '../modules/searchuser';
import UserItem from '../components/table/UserItem';
import { withRouter } from 'react-router-dom';
import { getCookie } from '../lib/cookie';

const UserContainer = ({ history }) => {
    const [info, setInfo] = useState(null);
    const dispatch = useDispatch();
    const { searchuser, property, search } = useSelector(({ searchuser }) => ({
        searchuser: searchuser.searchuser,
        search: searchuser.search,
        property: searchuser.property,
        error: searchuser.error,
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
        const users = localStorage.getItem("users") ? localStorage.getItem('users') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = getCookie('user');
        if (users) {
            dispatch(userSearchPost({ search, property, token }));
        }
        if (admin) {
            dispatch(userSearchPost({ search, property, token }));
        }
        if (!users && !admin) {
            alert("로그인해야 사용가능한 기능입니다.");
            history.push("/");
        }

    };


    // user 정보 성공 / 실패 처리
    useEffect(() => {
        if (searchuser) {
            if (searchuser) {
                setInfo(searchuser.contents);
            }
        }
    }, [searchuser, info]);

    return (
        <UserItem onChangeField={onChange} onSubmit={onSubmit} search={search} property={property} information={info} />
    );
};

export default withRouter(UserContainer);