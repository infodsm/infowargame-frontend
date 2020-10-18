import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showquizlistPost } from '../modules/showquizlist';
import ChallengesItem from '../components/table/ChallengesItem';
import { quizinitialize } from '../modules/deletequiz';
import { initialize, quizPost } from '../modules/quiz';


const ChallengesContainer = () => {

    const dispatch = useDispatch();
    const { showquizlist, quiz, loading } = useSelector(({ showquizlist, quiz, loading }) => ({
        showquizlist: showquizlist.showquizlist,
        quiz: quiz.quiz,
        loading: loading['showquizlist/SHOW_QUIZLIST'],
    }));

    // 페이지가 mount 될 때 문제목록 api 호출
    useEffect(() => {
        const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
        dispatch(showquizlistPost());
        dispatch(quizPost({ token }));

        return () => {
            dispatch(quizinitialize());
            initialize();
        }
    }, [dispatch]);


    return <ChallengesItem data={showquizlist} quiz={quiz} loading={loading} />;
};

export default ChallengesContainer;