import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showquizlistPost } from '../modules/showquizlist';
import ChallengesItem from '../components/table/ChallengesItem';
import { quizinitialize } from '../modules/deletequiz';
import { initialize, quizPost } from '../modules/quiz';
import { getCookie } from '../lib/cookie';


const ChallengesContainer = () => {
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
        dispatch(showquizlistPost());
        if (users) {
            dispatch(quizPost({ token }));
        }
        if (admin) {
            dispatch(quizPost({ token }));
        }
        return () => {
            dispatch(quizinitialize());
            initialize();
        }
    }, [dispatch]);

    useEffect(() => {
        if (quiz) {
            setQuizList(quiz.contents);
            console.log(quizlist);
        }
    }, [quizlist, quiz]);

    return <ChallengesItem data={showquizlist} quiz={quizlist} loading={loading} />;
};

export default ChallengesContainer;