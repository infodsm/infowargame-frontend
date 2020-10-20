import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showquizlistPost } from '../modules/showquizlist';
import ChallengesItem from '../components/table/ChallengesItem';
import { withRouter } from 'react-router-dom';
import { quizinitialize } from '../modules/deletequiz';
import { initialize, quizPost } from '../modules/quiz';
import { getCookie } from '../lib/cookie';


const ChallengesContainer = ({ history }) => {
    const [quizlist, setQuizList] = useState(null);
    const dispatch = useDispatch();
    const { showquizlist, quiz, loading } = useSelector(({ showquizlist, quiz, loading }) => ({
        showquizlist: showquizlist.showquizlist,
        quiz: quiz.quiz,
        loading: loading['showquizlist/SHOW_QUIZLIST'],
    }));

    // 페이지가 mount 될 때 문제목록 api 호출
    useEffect(() => {
        const users = localStorage.getItem("users") ? localStorage.getItem('users') : null;
        const admin = localStorage.getItem("admin") ? localStorage.getItem('admin') : null;
        const token = getCookie("user");
        if (users) {
            dispatch(showquizlistPost({ token }));
            dispatch(quizPost({ token }));
        }
        if (admin) {
            dispatch(showquizlistPost({ token }));
            dispatch(quizPost({ token }));
        }
        if (!token) {
            alert("로그인하지 않으면 문제들을 볼 수 없습니다.");
            history.goBack();
        }
        return () => {
            dispatch(quizinitialize());
            initialize();
        }
    }, [dispatch]);

    useEffect(() => {
        if (quiz) {
            setQuizList(quiz.contents);
        }
    }, [quizlist, quiz]);

    return <ChallengesItem data={showquizlist} quiz={quizlist} loading={loading} />;
};

export default withRouter(ChallengesContainer);