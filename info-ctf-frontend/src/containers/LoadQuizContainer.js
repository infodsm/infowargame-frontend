import React, { useEffect, useState } from 'react';
import ShowQuizItem from '../components/Quiz/ShowQuizItem';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadquizPost, initialize } from '../modules/loadquiz';
import { deletequizPost, quizinitialize } from '../modules/deletequiz';
import { deletefilePost } from '../modules/deletefile';




const LoadQuizContainer = ({ match, history }) => {
    const dispatch = useDispatch();
    const { num } = match.params;
    var quiz_num = { num }.num;
    const { loadquiz, deletequiz, deletequizerror, error, loading } = useSelector(({ loadquiz, deletequiz, deletefile, loading }) => ({
        loadquiz: loadquiz.loadquiz,
        error: loadquiz.error,
        deletequiz: deletequiz.deletequiz,
        deletequizerror: deletequiz.error,
        loading: loading['loadquiz/LOAD_QUIZ'],
    }));

    // 페이지가 마운트(처음 보여질 때)될 때 퀴즈목록 api 요청
    useEffect(() => {
        console.log(num);
        dispatch(loadquizPost(num));

        return () => {
            dispatch(initialize());
        };
    }, [dispatch, num]);

    // 문제 삭제 api 요청
    const onSubmit = e => {
        e.preventDefault();
        const users = localStorage.getItem("users") ? localStorage.getItem('user') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        if (admin) {
            console.log(quiz_num);
            dispatch(deletefilePost({ quiz_num, token }));
            dispatch(deletequizPost({ quiz_num, token }));
        }
        if (users) {
            alert("어드민만 사용 가능한 기능입니다.");
        }
    };

    useEffect(() => {
        if (loadquiz) {
            console.log("요청성공");
            console.log(loadquiz);
        }
        if (error) {
            console.log(error);
            console.log("오류발생");
        }
    }, [loadquiz, error]);

    useEffect(() => {
        if (deletequiz) {
            quizinitialize();
            alert("문제 삭제 완료");
            history.push('/challenges')
        }
        if (deletequizerror) {
            console.log(deletequizerror);
        }
    }, [deletequiz, deletequizerror, history]);

    return <ShowQuizItem loadquiz={loadquiz} loading={loading} onSubmit={onSubmit} />;
};


export default withRouter(LoadQuizContainer);