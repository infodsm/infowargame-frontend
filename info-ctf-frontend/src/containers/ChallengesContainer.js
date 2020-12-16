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
    const { showquizlist, quiz, loading, admin } = useSelector(({ showquizlist, quiz, loading, adminlogin }) => ({
        showquizlist: showquizlist.showquizlist,
        quiz: quiz.quiz,
        admin: adminlogin.admin,
        loading: loading['showquizlist/SHOW_QUIZLIST'],
    }));

    // 페이지가 mount 될 때 문제목록 api 호출
    useEffect(() => {
        const token = getCookie("user");
        if (token) {
            dispatch(showquizlistPost({ token }));
            dispatch(quizPost({ token }));
        }

        if (!token) {
            alert("로그인해야 사용가능한 기능입니다.");
            history.push("/");
        }

        return () => {
            dispatch(quizinitialize());
            initialize();
            console.log(showquizlist);
            console.log(admin);
        }
    }, [dispatch, history]);

    useEffect(() => {
        if (quiz) {
            setQuizList(quiz.contents);
        }
    }, [quizlist, quiz]);

    return <ChallengesItem data={showquizlist} quiz={quizlist} loading={loading} admin={admin} />;
};

export default withRouter(ChallengesContainer);